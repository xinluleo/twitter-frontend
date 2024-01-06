import { isMobile } from 'react-device-detect';
import VConsole from 'vconsole';

// eslint-disable-next-line import/prefer-default-export
export const startVConsole = () => isMobile && new VConsole();
