import { Divider, Typography } from 'antd';
import Image from 'next/image';

import type { UserRepository } from '../../types';
import { cssDescription, cssItemWrapper, cssSingleLanguage, cssTitleLink, cssTitleWrapper } from './styles';

interface ViewRepositoryProps {
  repo: UserRepository;
}
const ViewRepository = ({ repo }: ViewRepositoryProps) => {
  return (
    <>
      <div css={cssItemWrapper}>
        <a target="_blank" referrerPolicy="no-referrer" href={repo.url} css={cssTitleLink}>
          {repo.name}
        </a>
        <div css={cssTitleWrapper}>
          <Image src="/gh-star.svg" width={20} height={20} alt="Star count" />
          {repo.stargazers.totalCount?.toLocaleString() || '-'}
        </div>
      </div>
      <p css={cssDescription}>{repo.description || <em css={{ opacity: 0.4 }}>No description</em>}</p>
      <div css={{ display: 'flex', gap: 14 }}>
        {repo.languages.edges.map(({ node }) => (
          <div css={{ display: 'flex', alignItems: 'center', gap: 4 }} key={node.name}>
            <div css={cssSingleLanguage(node.color)} />
            <Typography.Text>{node.name}</Typography.Text>
          </div>
        ))}
      </div>
      <Divider css={{ borderColor: '#dbdbdb', margin: "20px 0 0" }} />
    </>
  );
};

export default ViewRepository;
