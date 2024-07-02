import TextPrimary from '@components/AtomicDesign/Atoms/TextPrimary';
import CardComponent from '@components/AtomicDesign/Molecules/CardComponent';
import { linksCards } from 'utils/links';
import safeJsonStringify from 'safe-json-stringify';
import matchRoles from 'utils/matchRoles';

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

function Inicio() {
  // const { data: session } = useSession();
  return (
    <div className='flex h-screen flex-col items-center gap-32 p-4'>
      <TextPrimary text='Bienvenido, nombre usuario' />
      <div className='flex gap-4'>
        {linksCards.map((link) => (
          // <PrivateComponent roleList={[]} userRole={undefined} children={undefined}>
          <CardComponent key={link.link} info={link} />
          // </PrivateComponent>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
function safeJsonStringify(page: any): string {
  throw new Error('Function not implemented.');
}

