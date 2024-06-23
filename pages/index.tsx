import RoleCard from '@components/cards/RoleCard';
import HeadBarImg from '@components/navegation/HeadBarImg';
import React from 'react';
import IndexUser from '@components/banner/IndexUser';
import { useSession } from 'next-auth/react';
import matchRoles from 'utils/matchRoles';
import safeJsonStringify from 'safe-json-stringify';

const inicioIcon = '/img/icons/iconos_HOME.svg';

export async function getServerSideProps(ctx) {
  const { rejected, isPublic, page } = await matchRoles(ctx);
  return {
    props: { rejected, isPublic, page: JSON.parse(safeJsonStringify(page)) },
  };
}

function Index() {
  const { data: session }: any = useSession();
  const currentRole = session?.user?.roles[0]?.name;

  return (
    <div>
      <header>
        <HeadBarImg title='Inicio' img={inicioIcon} />
      </header>
      <main className=' flex flex-col px-[5%] md:w-full  lg:flex lg:px-[10%]'>
        <IndexUser
          name={session?.user?.name}
          rol={session?.user?.roles[0]?.name}
        />
        {currentRole === 'Medico' && (
          <RoleCard
            title='Médicos'
            text='En esta sección podrás visualizar tus pacientes y descargar los resultados.'
            link='/medico'
          />
        )}
        {currentRole === 'Admin' && (
          <RoleCard
            title='Usuarios'
            text='En esta sección podrás visualizar, editar y eliminar tus usuarios.'
            link='/admin/users'
          />
        )}
        {currentRole === 'Superadmin' && (
          <RoleCard
            title='Usuarios'
            text='En esta sección podrás visualizar, editar y eliminar tus usuarios.'
            link='/admin/users'
          />
        )}
        {currentRole === 'Paciente' && (
          <RoleCard
            title='Paciente'
            text='En esta sección podrás visualizar y descargar los resultados de tus exámenes médicos.'
            link='/paciente'
          />
        )}
      </main>
    </div>
  );
}

export default Index;
