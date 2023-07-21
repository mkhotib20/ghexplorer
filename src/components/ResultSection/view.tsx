import { Avatar, Collapse, Space, Tag, Typography } from 'antd';

import User from './components/User';
import { cssCollapseWrapper } from './styles';
import type { ViewResultSectionProps } from './types';

const ViewResultSection = ({ userList }: ViewResultSectionProps) => {
  return (
    <Collapse accordion ghost>
      {userList.map((userData) => {
        const isOrganization = userData.__typename === 'Organization';
        return (
          <Collapse.Panel
            css={cssCollapseWrapper}
            key={userData.id}
            header={
              <Space>
                <Avatar src={userData.avatarUrl} />
                <Typography.Text strong ellipsis>
                  {userData.name || userData.login}
                </Typography.Text>
                {isOrganization && <Tag>Organization</Tag>}
              </Space>
            }
          >
            <User userData={userData} />
          </Collapse.Panel>
        );
      })}
    </Collapse>
  );
};

export default ViewResultSection;
