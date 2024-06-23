// import { prisma } from '@prisma/client';
import prisma from 'config/prisma';
import Cors from 'micro-cors';

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS', 'HEAD'],
  origin: '*',
});

const handler = async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.status(200);
  }
  if (req.method === 'POST') {
    const urlParams = new URLSearchParams(JSON.stringify(req.body));
    if (urlParams.has('email')) {
      try {
        await prisma.session.deleteMany({
          where: {
            user: {
              email: {
                equals: urlParams.get('email'),
              },
            },
          },
        });
        return res.status(200).json({ message: 'Sessions deleted' });
      } catch (error) {
        return res.status(404).json({ status: 'not found' });
      }
    } else {
      return res.status(401).json({ status: 'not authorized' });
    }
  }

  return res.status(200);
};

export default cors(async (req, res) => handler(req, res));
