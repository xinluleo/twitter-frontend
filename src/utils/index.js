import moment from 'moment';
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

/**
 * 返回两个时间的差值
 */
export const timeDiff = (time) => {
  const hours = moment().diff(time, 'hours');
  if (hours > 23) {
    return moment(time).format('MM月DD日');
  }
  if (hours > 0) {
    return `${hours}小时`;
  }
  const minutes = moment().diff(time, 'minutes');
  return `${minutes || 1}分钟`;
};
