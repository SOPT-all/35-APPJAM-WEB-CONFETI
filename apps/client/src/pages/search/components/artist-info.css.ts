import { style } from '@vanilla-extract/css';
import { themeVars } from '@confeti/design-system/styles';

export const container = style({
  display: 'flex',
  padding: '1rem 2rem',
  width: '100%',
});

export const wrapper = style({
  width: '100%',
  ...themeVars.display.flexAlignCenter,
});

export const image = style({
  width: '8rem',
  height: '8rem',
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: '2rem',
});

export const textSection = style({
  ...themeVars.display.flexColumnLeft,
  flex: 1,
  gap: '1.05rem',
});

export const name = style({
  ...themeVars.fontStyles.subtitle2_sb_16,
  color: themeVars.color.black,
});

export const releaseWrapper = style({
  ...themeVars.display.flexAlignCenter,
  gap: '0.8rem',
});

export const releaseLabel = style({
  ...themeVars.fontStyles.body3_m_14,
  color: themeVars.color.gray600,
});

export const releaseDate = style({
  ...themeVars.fontStyles.body3_r_14,
  color: themeVars.color.gray600,
});

export const heartIcon = style({
  width: '2.4rem',
  height: '2.4rem',
  cursor: 'pointer',
  flexShrink: 0,
  marginLeft: '1rem',
});
