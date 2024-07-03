import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { links } from 'utils/links';
import { useSession } from 'next-auth/react';
import { PrivateComponent } from '@components/RBAC/PrivateComponent';

function Sidebar() {
  const router = useRouter();
  const { data: session }: any = useSession();

  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
      <div className='flex items-center justify-center py-4'>
        <Image src='/img/logo.png' alt='Logo' width={40} height={40} />
      </div>
      <nav className='flex flex-col items-center gap-4 px-2 py-10'>
        {links.map((link) => {
          const isActive = router.pathname.includes(link.link);
          return (
            <PrivateComponent roleList={link.arrayRol} userRole={session?.user?.role?.name}>
            <Tooltip key={link.link}>
              <TooltipTrigger asChild>
                <Link
                  href={link.link}
                  className={
                    isActive
                      ? 'group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
                      : 'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                  }
                >
                  {link.icon}
                  <span className='sr-only'>{link.name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>{link.name}</TooltipContent>
            </Tooltip>
            </PrivateComponent>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
