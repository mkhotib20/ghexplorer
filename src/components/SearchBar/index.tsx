import { Button, Form, Input } from 'antd';
import Image from 'next/image';

import { cssSearchbarWrapper } from './styles';

interface SearchBarProps {
  loading?: boolean;
}

/**
 * No need to loaded dynamically, because this component loaded immediately
 */
const SearchBar = ({ loading }: SearchBarProps) => {
  const form = Form.useFormInstance();
  const keyword = Form.useWatch('keyword', form);
  return (
    <div css={cssSearchbarWrapper}>
      <Image
        src="/gh-black.png"
        width={50}
        height={50}
        css={{
          objectFit: 'contain',
        }}
        alt="github"
      />
      <Form.Item name="keyword" noStyle>
        <Input allowClear disabled={loading} placeholder="Enter Username" size="large" />
      </Form.Item>
      <Button disabled={!keyword} loading={loading} size="large" htmlType="submit" type="primary">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
