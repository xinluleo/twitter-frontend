import { isMobile } from 'react-device-detect';
import VConsole from 'vconsole';

// eslint-disable-next-line import/prefer-default-export
export const startVConsole = () => isMobile && new VConsole();

export const fileToBase64 = (file) => new Promise((resolve) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    resolve(e.target.result);
  };
});
