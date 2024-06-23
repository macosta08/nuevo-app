// descarga de resultados por pacientes que usa el medico

import ButtonBack from '@components/buttons/ButtonBack';
import ResultsCard from '@components/cards/ResultsCard';
import InputSearch from '@components/inputs/inputSearch';
import HeadBarImg from '@components/navegation/HeadBarImg';
import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import GET_EXAMENES_BY_ID from 'utils/gql/queries/examenes';
import { useSession } from 'next-auth/react';
import Loading from '@components/Loading';
import matchRoles from 'utils/matchRoles';
import safeJsonStringify from 'safe-json-stringify';

const mascota = '/img/banner/Mascota1.png';

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

function ResultsDownload() {
  const { data: session }: any = useSession();
  const [cedula, setcedula] = useState('');
  const [examenes, setExamenes] = useState([]);
  const [getExamenesById, { loading }] = useLazyQuery(GET_EXAMENES_BY_ID, {
    onCompleted: (data) => {
      setExamenes(data.examenes_byId);
    },
    fetchPolicy: 'network-only',
  });
  useEffect(() => {
    if (session.user.cedula) {
      setcedula(session.user.cedula);
      getExamenesById({
        variables: {
          examenesByIdId: session.user.cedula,
        },
      });
    } else {
      setcedula(null);
    }
  }, [session.user.cedula]);

  if (loading) return <Loading open />;

  return (
    <div>
      <header className='mb-12'>
        <ButtonBack />
        <HeadBarImg title='Descarga de resultados' img={mascota} />
      </header>
      <main className='w-full px-[7%] '>
        <InputSearch
          type='text'
          name='name'
          label='Buscar'
          placeholder='Buscar'
          extraClassNames='font-secondaryFont gap-y-2 mb-14 w-[250px] md:w-[350px] lg:w-[653px] '
        />
        {cedula ? (
          <ResultsCard examenes={examenes} />
        ) : (
          <div className='text-center'>
            <p className='text-lg text-gray-500'>
              No se encontraron resultados
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
export default ResultsDownload;
