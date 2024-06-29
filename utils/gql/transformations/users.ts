type User = {
  id?: string;
  name: string;
  email?: string;
  image?: string;
  auth0Id?: string;
  roles: any;
  enabled?: boolean;
  client?: string;
  cedula: string;
  typeDocument: string;
};
type Role = {
  value: string;
  label: string;
};

// type Document = {
//   value: string;
//   label: string;
// };

export const createUserTransformation = (user: User) => {
  // const rolesArray = roles.map((role) => ({ id: role.value }));

  const data = {
    data: {
      name: user.name,
      email: user.email,
      cedula: user.typeDocument,
      image: user.image,
      deleted: false,
      enabled: true,
      role: {
        connect: {
          id: user.roles.value,
        },
      },
      accounts: {
        create: {
          provider: 'auth0',
          providerAccountId: user.auth0Id,
          type: 'oauth',
        },
      },
    },
  };

  return data;
};

export const updateUserTransformation = (
  user: User,
  roleToDisconnect: Role
) => {
  const where = { id: user.id };
  const roleTDc =
    roleToDisconnect === user?.roles?.value ? '' : roleToDisconnect;

  const data = {
    name: { set: user.name },
    cedula: { set: user.typeDocument },
    email: { set: user.email },
    role: {
      disconnect: {
        id: roleTDc,
      },
      connect: {
        id: user?.roles?.value,
      },
    },
    // roles: {
    //   disconnect: [
    //     {
    //       id: roleTDc,
    //     },
    //   ],
    //   connect: [
    //     {
    //       id: user?.roles?.value,
    //     },
    //   ],
    // },
  };

  return { where, data };
};

export const deleteUserTransformation = (id: string) => {
  const where = { id };

  const data = { deleted: { set: true } };

  return { where, data };
};
