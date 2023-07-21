import type { UserType } from '@/types/user.type';

export interface UserProps {
  userData: UserType;
}

export interface DetailData {
  repositories: Repositories;
  __typename: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor?: string;
}

export interface Repositories {
  nodes: UserRepository[];
  pageInfo: PageInfo;
  __typename: string;
}

export interface UserRepository {
  name: string;
  description: string;
  id: string;
  stargazers: Stargazers;
  url: string;
  __typename: string;
  languages: {
    edges: [
      {
        node: {
          color: string;
          name: string;
        };
      },
    ];
  };
}

export interface Stargazers {
  totalCount: number;
  __typename: string;
}
