import { menus } from '@utils/constants';
import { useGoTo, useIncludeMenu } from '@utils/hooks';
import { TabBar } from 'antd-mobile';

import style from './index.module.scss';

/**
* Bottom Bar
*/
const Bottom = () => {
  const goto = useGoTo();
  const include = useIncludeMenu();

  const onChangeTabItem = (key) => {
    goto(key);
  };

  if (!include) {
    return null;
  }

  return (
    <div className={style.container}>
      <TabBar onChange={onChangeTabItem}>
        {menus.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

export default Bottom;
