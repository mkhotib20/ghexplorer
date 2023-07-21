import dynamic from 'next/dynamic';

/**
 * Should loaded dynamically and the js chunk should be separated, because it's rendered conditionally
 */
const InphoGraphic = dynamic(() => import('./view'));

export default InphoGraphic;
