import prisma from 'config/prisma';

import { getSession } from 'next-auth/react';

const matchRoles = async (context) => {
  let url = context.resolvedUrl.split('?')[0];

  const { id } = context.query;

  if (id) {
    url = url.replace(id, '[id]');
  }

  const { slug } = context.query;

  if (slug) {
    url = url.replace(slug, '[slug]');
  }

  const session: any = await getSession({ req: context.req });

  const currentPage = await prisma.page.findUnique({
    where: { route: url },
  });

  const pages = await prisma.page.findFirst({
    where: {
      AND: {
        route: {
          equals: url,
        },

        roles: {
          some: {
            users: {
              some: {
                id: session?.user?.id,
              },
            },
          },
        },
      },
    },
  });

  return {
    userLogin: !!session,

    rejected: !pages,

    isPublic: currentPage?.isPublic ?? false,

    page: pages,

    currentPage,

    session,
  };
};

const checkRolesServer = (context, roles) =>
  context?.session?.user?.role.includes(roles.name);

export { checkRolesServer };

export default matchRoles;
