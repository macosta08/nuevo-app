import { useEffect, useState } from 'react'; // pendiente borrar
import { AiFillCode } from 'react-icons/ai';
import { BsCardText } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/base16/material-palenight.css';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import Tooltip from '@mui/material/Tooltip';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
interface InterfaceComponent {
  children: any;
  resume?: String;
  fullCode?: String;
  requirements?: String;
  help?: String;
}

function DocComponent({
  children,
  resume,
  fullCode,
  requirements,
  help,
}: InterfaceComponent) {
  const [tab, setTab] = useState(0);
  useEffect(() => {
    hljs.initHighlighting();
  }, []);
  return (
    <div className='border-hoverPrimaryButtonBg flex flex-col rounded-lg border-2 p-4 dark:border-cyan-500'>
      <div className='flex items-center justify-center'>{children}</div>
      <div className='flex w-full flex-row items-end justify-end space-x-2'>
        <div>
          <Tooltip
            placement='top'
            title={`${tab === 1 ? 'Resumen' : ' Código'}   `}
          >
            <span>
              <AiFillCode
                onClick={() => {
                  setTab(tab === 0 ? 1 : 0);
                }}
                className='text-secondaryButtonBg hover:text-hoverPrimaryButtonBg dark:text-darkPrimaryButtonBg dark:hover:text-darkHoverPrimaryButtonBg h-10  w-10 cursor-pointer '
              />
            </span>
          </Tooltip>
        </div>

        <div>
          <Tooltip placement='top' title='Requerimientos'>
            <span>
              <BsCardText
                onClick={() => setTab(2)}
                className='text-secondaryButtonBg hover:text-hoverPrimaryButtonBg dark:text-darkPrimaryButtonBg dark:hover:text-darkHoverPrimaryButtonBg h-10  w-10 cursor-pointer '
              />
            </span>
          </Tooltip>
        </div>

        <div>
          <Tooltip placement='top' title='Ayuda'>
            <span>
              <BiHelpCircle
                onClick={() => setTab(3)}
                className='text-secondaryButtonBg hover:text-hoverPrimaryButtonBg dark:text-darkPrimaryButtonBg dark:hover:text-darkHoverPrimaryButtonBg h-10  w-10 cursor-pointer'
              />
            </span>
          </Tooltip>
        </div>
      </div>
      <div className=''>
        <Fade>
          <div
            className={`${
              tab === 0 || tab === 1 ? ' flip  ' : 'hidden '
            }   p-4`}
          >
            <div
              className={`${tab === 1 ? 'flip-content' : ' flip-content2'}   `}
            >
              <div
                className={` ${tab === 1 ? 'hidden' : ''}  flip-front   p-4`}
              >
                <pre>
                  <code className='javascript rounded-lg'>{resume}</code>
                </pre>
              </div>
              <div className={` ${tab === 0 ? 'hidden' : ''}  flip-back   p-4`}>
                {' '}
                <pre>
                  <code className='javascript rounded-lg'>{fullCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className={`${tab === 2 ? 'block ' : 'hidden '} p-4`}>
            {requirements}
          </div>
        </Fade>
        <Fade>
          <div className={`${tab === 3 ? 'block ' : 'hidden '} p-4`}>
            {help}
          </div>
        </Fade>
      </div>
    </div>
  );
}
export default DocComponent;
