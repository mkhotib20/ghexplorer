import { css } from '@emotion/react';

export const cssRepoWrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 32,
  '@media(max-width:768px)': {
    flexDirection: 'column',
  },
});

export const cssSingleRepoWrapper = css({
  width: 'calc(50% - 32px)',
  '@media(max-width:768px)': {
    width: '100%',
  },
});
