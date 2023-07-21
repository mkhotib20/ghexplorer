import { useMemo, useState } from 'react';

import { useLazyQuery } from '@apollo/client';
import { Divider, Form, Typography, message } from 'antd';

import InphoGraphic from '@/components/InphoGraphic';
import ResultSection from '@/components/ResultSection';
import SearchBar from '@/components/SearchBar';
import getUsersQuery from '@/queries/getUsers.graphql';
import type { GetUserVariable } from '@/types/formType';
import type { GetUsersResult } from '@/types/search.type';
import type { UserType } from '@/types/user.type';
import Head from 'next/head';

const Homepage = () => {
  // Hooks
  const [form] = Form.useForm();
  const [searchedKeyword, setSearchedKeyword] = useState('');

  const [doFetch, { data, loading, called }] = useLazyQuery<GetUsersResult<UserType>>(getUsersQuery, {
    variables: {},
    fetchPolicy: 'cache-first',
    onError: (error) => {
      message.error({ key: 'repos', content: error.message });
    },
  });

  const userList = useMemo(() => {
    if (!data?.search) {
      return [];
    }
    return data.search.edges.map((edge) => edge.node);
  }, [data]);

  // Hanldres
  const handleSubmitSearch = (variables: GetUserVariable) => {
    setSearchedKeyword(variables.keyword);
    doFetch({ variables });
  };

  // Var declarations

  const isUserNotFound = called && !loading && !userList.length;
  const isNeedToSearch = !called;

  return (
    <>
      <Head>
        <title>Github Repository Showcases</title>
      </Head>
      <div
        css={{
          margin: 'auto',
          padding: '32px 52px',
          '@media(max-width:768px)': {
            padding: '10px 20px',
          },
        }}
      >
        <Form form={form} onFinish={handleSubmitSearch}>
          <SearchBar loading={loading} />
          <Divider />

          {Boolean(userList.length) && (
            <Typography.Paragraph css={{ marginTop: 32, color: 'gray' }}>
              Showing users for &quot;{searchedKeyword}&quot;
            </Typography.Paragraph>
          )}

          {isUserNotFound && (
            <InphoGraphic
              type="empty"
              title="No User Found"
              description={`Github user with ${searchedKeyword} username is not found!`}
            />
          )}

          {isNeedToSearch && (
            <InphoGraphic
              type="info"
              title="Search Github User"
              description="Input username keyword on the provided search input to show github user list"
            />
          )}

          {Boolean(userList.length) && <ResultSection userList={userList} />}
        </Form>
      </div>
    </>
  );
};

export default Homepage;
