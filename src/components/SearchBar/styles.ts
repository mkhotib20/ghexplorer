import { css } from '@emotion/react';

export const cssSearchbarWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  maxWidth: 500,
  '@media(max-width:768px)': {
    flexDirection: 'column',
    '.ant-btn': {
      width: '100%',
    },
  },
});
