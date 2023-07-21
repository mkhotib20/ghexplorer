import { css } from '@emotion/react';

// @ts-expect-error because i need to unset the border radius
export const cssCollapseWrapper = css({
  '.ant-collapse-header': {
    backgroundColor: 'white',
    borderBottom: '1px solid #dbdbdb',
    borderRadius: '0px!important',
    position: 'sticky!important',
    top: 0,
    zIndex: 2,
    padding: '20px 10px!important',
  },
});
