import { Skeleton } from 'antd';
import dynamic from 'next/dynamic';

const Repository = dynamic(() => import('./view'), {
  loading: () => <Skeleton />,
});

export default Repository;
