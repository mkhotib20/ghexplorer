import { Skeleton } from 'antd';
import dynamic from 'next/dynamic';

const ResultSection = dynamic(() => import('./view'), {
  loading: () => <Skeleton />,
});

export default ResultSection;
