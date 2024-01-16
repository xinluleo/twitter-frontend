import { menus } from '@utils/constants';
import { useCurrentMenu, useGoTo } from '@utils/hooks';
import { TabBar } from 'antd-mobile';

import style from './index.module.scss';

/**
* Bottom Bar
*/
const Bottom = () => {
  const goto = useGoTo();
  const menu = useCurrentMenu();

  const onChangeTabItem = (key) => {
    goto(key);
  };

  if (menu.hideHeader) {
    return null;
  }

  return (
    <div className={style.container}>
      <TabBar onChange={onChangeTabItem}>
        {menus.map((item) => (
          item.isMenu && <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

export default Bottom;
