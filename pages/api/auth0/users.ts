import { getServerSession } from 'next-auth';
import {
  getAuth0Token,
  createUserAuth0,
  // passwordChangeTicket,
  // sendChangePasswordEmail,
} from 'utils/api';
import { options } from 'pages/api/auth/[...nextauth]';

const Auth0 = async (req, res) => {
  if (req.method === 'POST') {
    const session = await getServerSession(req, res, options);

    const { data } = req.body;
    if (session) {
      let userData;
      // let ticket;
      try {
        // get auth0 token
        const { access_token: accessToken, token_type: tokenType } =
          await getAuth0Token().then((resToken) => resToken);

        // create user in auth0
        data.connection = 'Username-Password-Authentication';
        userData = await createUserAuth0(data, accessToken, tokenType).then(
          (resAuth) => resAuth
        );
        // start password change ticket
        // await passwordChangeTicket(tokenType, accessToken, data);
      } catch (err) {
        req.status(409).json({ error: err });
      }
      if (!Object.keys(userData).includes('statusCode')) {
        // send welcome email

        return res.status(200).json({ usuario: userData });
      }
      return res
        .status(userData.statusCode)
        .json({ error: userData.message, data: userData });
    }
    return res.status(401).json({ status: 'unauthorized' });
  }
  return res.status(404).json({ status: 'not found' });
};
export default Auth0;
