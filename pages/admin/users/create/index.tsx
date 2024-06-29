// pagina de creacion de usuarios
import React from 'react';
import safeJsonStringify from 'safe-json-stringify';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import GET_ROLES from 'utils/gql/queries/roles';
import HeadBarImg from '@components/navegation/HeadBarImg';
import CreateForm from '@components/forms/CreateForm';
import matchRoles from 'utils/matchRoles';
import { useSession } from 'next-auth/react';
import Loading from '@components/Loading';
import ButtonBack from '@components/buttons/ButtonBack';

// SI ... ROLES QUERY
export async function getServerSideProps(ctx) {
  const { rejected, isPublic, page } = await matchRoles(ctx);

  return {
    props: {
      rejected,
      isPublic,
      page: JSON.parse(safeJsonStringify(page)),
    },
  };
}

function Index() {
  const { data: session }: any = useSession();
  const createIcon = '/img/icons/createCIRCLE.svg';
  const logoCirculo = '/img/logos/logoCirculoMorado.svg';

  const { data: dataRoles, loading: loadingRol } = useQuery(GET_ROLES, {
    fetchPolicy: 'cache-and-network',
  });

  const rolVerify = (arrayRole, roleUser) => {
    if (roleUser?.name === 'Admin') {
      return arrayRole?.filter(
        (rol) => rol?.name !== 'Superadmin' && rol?.name !== 'Admin'
      );
    }
    return arrayRole;
  };
  const roles = dataRoles?.roles;
  const currentRol = session?.user?.role;
  const rolOption = dataRoles && rolVerify(roles, currentRol);
  // const rolOption = rolVerify(roles, currentRol);
  if (loadingRol) {
    return <Loading open={loadingRol} />;
  }
  return (
    <div>
      <header className='mb-14'>
        <ButtonBack />
        <HeadBarImg title='Crear usuarios' img={createIcon} />
      </header>
      <main className='w-full px-[10%]'>
        <div className='hidden'>
          <Image
            src={logoCirculo}
            alt='logo'
            quality={100}
            width={310}
            height={310}
          />
        </div>
        {dataRoles && (
          <div>
            <CreateForm rolesOption={rolOption} />
          </div>
        )}
      </main>
    </div>
  );
}

export default Index;
