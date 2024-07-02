import TextPrimary from '@components/AtomicDesign/Atoms/TextPrimary';
import CardComponent from '@components/AtomicDesign/Molecules/CardComponent';
import { linksCards } from 'utils/links';

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
