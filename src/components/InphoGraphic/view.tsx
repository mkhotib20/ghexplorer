import { Typography } from 'antd';
import Image from 'next/image';

import { IMG_URL_BASED_ON_TYPE } from './const';
import { cssInfoGraphicWrapper } from './styles';
import type { ViewInphoGraphicProps } from './types';

const ViewInphoGraphic = ({ description, type, title }: ViewInphoGraphicProps) => {
  const imgSr = IMG_URL_BASED_ON_TYPE[type];
  return (
    <div css={cssInfoGraphicWrapper}>
      {imgSr && <Image width={50} height={50} css={{ margin: '0 auto', opacity: 0.5 }} src={imgSr} alt={title} />}
      <Typography.Title level={5}>{title}</Typography.Title>
      <Typography.Text>{description}</Typography.Text>
    </div>
  );
};

export default ViewInphoGraphic;
