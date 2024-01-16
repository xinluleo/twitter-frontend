import Header from '@components/Header';
import ImagePreview from '@components/ImagePreview';
import ImageUpload from '@components/ImageUpload';
import TButton from '@components/TButton';
import { createTweet } from '@services/tweet';
import { useAppContext } from '@utils/context';
import { useGoTo } from '@utils/hooks';
import { TextArea, Toast } from 'antd-mobile';
import { useState } from 'react';

import style from './index.module.scss';

/**
* 发推
*/
const CreateTweet = () => {
  const [content, setContent] = useState('');
  const [imgs, setImgs] = useState([]); // 图片地址集合
  const [store] = useAppContext();
  const goTo = useGoTo();

  const onClickCreate = () => {
    createTweet({
      content,
      files: Object.values(imgs),
    }).then((res) => {
      if (res.success) {
        Toast.show('发布成功');
        setContent('');
        setImgs([]);
        goTo();
        return;
      }
      Toast.show('发布失败');
    });
  };

  const onChangeContent = (v) => {
    setContent(v);
  };

  const onChangeUploadFile = (v) => {
    if (v && Object.keys(v).length < 5) {
      setImgs((prev) => ({ ...prev, ...v }));
      return;
    }
    Toast.show('最多上传4张图片');
  };

  const handleDeleteImg = (index) => {
    setImgs(imgs.filter((_, i) => i !== index));
  };

  return (
    <div className={style.container}>
      <Header>
        <TButton
          disabled={content.length === 0 && Object.keys(imgs).length === 0}
          onClick={onClickCreate}
        >
          发推
        </TButton>
      </Header>
      <div className={style.content}>
        <div className={style.left}>
          <img className={style.avatar} src={store.user?.avatar_url} alt="" />
        </div>
        <div className={style.right}>
          <TextArea
            rows={5}
            value={content}
            onChange={onChangeContent}
            className={style.text}
            placeholder="有什么新鲜事？"
          />
          <ImagePreview imgs={Object.values(imgs)} handleDeleteImg={handleDeleteImg} />
          <div className={style.button}>
            <ImageUpload onChange={onChangeUploadFile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
