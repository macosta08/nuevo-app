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

export const createUserTransformation = (user: User) => {
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

export const updateUserTransformation = (user: User) => {
  const where = { id: user.id };
  const data = {
    name: { set: user.name },
    cedula: { set: user.typeDocument },
    email: { set: user.email },
    role: {
      connect: {
        id: user?.roles?.value,
      },
    },
  };

  return { where, data };
};

export const deleteUserTransformation = (id: string) => {
  const where = { id };

  const data = { deleted: { set: true } };

  return { where, data };
};
