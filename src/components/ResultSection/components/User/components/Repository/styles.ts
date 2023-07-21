import { css } from '@emotion/react';

export const cssTitleLink = css({
  flex: 1,
  margin: 0,
  fontSize: 20,
  fontWeight: 700,
  color: '#2E7DF0',
  lineHeight: '1',
});

export const cssItemWrapper = css({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: 20,
});

export const cssTitleWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const cssSingleLanguage = (color: string) => {
  return css({
    backgroundColor: color,
    width: 14,
    height: 14,
    borderRadius: 14,
  });
};

export const cssDescription = css({
  height: 40,
  overflow: 'hidden',
  lineClamp: '2',
  textOverflow: 'ellipsis',
});
