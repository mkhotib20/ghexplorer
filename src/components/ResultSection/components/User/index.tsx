import { useMemo } from 'react';

import type { DocumentNode } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Skeleton } from 'antd';

import InphoGraphic from '@/components/InphoGraphic';
import useIntersect from '@/hooks/useIntersect';

import Repository from './components/Repository';
import getOrganizationDetail from './queries/getOrganizationDetail.graphql';
import getUserDetail from './queries/getUserDetail.graphql';
import { cssRepoWrapper, cssSingleRepoWrapper } from './styles';
import type { DetailData, UserProps } from './types';

const QUERY_BASEDON_TYPE: Record<string, DocumentNode> = {
  Organization: getOrganizationDetail,
  User: getUserDetail,
};

const User = ({ userData }: UserProps) => {
  const usedGql = useMemo(() => QUERY_BASEDON_TYPE[userData.__typename], [userData.__typename]);

  const { loading, data, fetchMore } = useQuery<{ detailData: DetailData }>(usedGql, {
    variables: {
      login: userData.login,
    },
  });

  const { nodes, pageInfo } = data?.detailData?.repositories || {};
  const { hasNextPage, endCursor } = pageInfo || {};

  const intersectRef = useIntersect(() => {
    if (loading || !data || !hasNextPage) {
      return;
    }

    fetchMore({
      variables: {
        endCursor,
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => ({
        ...fetchMoreResult,
        detailData: {
          ...fetchMoreResult.detailData,
          repositories: {
            ...fetchMoreResult.detailData.repositories,
            nodes: [
              ...(previousQueryResult.detailData.repositories.nodes || []),
              ...(fetchMoreResult.detailData.repositories.nodes || []),
            ],
          },
        },
      }),
    });
  });

  if (loading) {
    return <Skeleton active />;
  }

  if (!nodes?.length) {
    return (
      <InphoGraphic
        type="empty"
        title="No Repositories Found"
        description={`${userData.name} doesn't have repository yet`}
      />
    );
  }

  const repoList = nodes;
  console.log(hasNextPage);

  return (
    <>
      <div css={cssRepoWrapper}>
        {repoList.map((repo) => (
          <div css={cssSingleRepoWrapper} key={repo.id}>
            <Repository repo={repo} />
          </div>
        ))}
      </div>
      {hasNextPage && (
        <div ref={intersectRef}>
          <Skeleton active />
        </div>
      )}
    </>
  );
};

export default User;
