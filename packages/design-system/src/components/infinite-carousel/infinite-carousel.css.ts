import { themeVars } from '../../styles';
import { style } from '@vanilla-extract/css';

export const wrap = style({
  width: '33.5rem',
  height: '19.3rem',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '2rem',
});

export const imageContainer = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: 'transform 1s ease-in-out',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  flexShrink: 0,
});

export const active = style({
  opacity: 1,
});

export const container = style({
  ...themeVars.display.flexCenter,
  background: themeVars.color.black_op,
  width: '100%',
  height: '100%',
  flexShrink: '0',
  padding: '1.6rem 1.2rem',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const info = style({
  ...themeVars.display.flexColumn,
  width: '31.1rem',
  height: '16.1rem',
  alignItems: 'flex-start',
  flexShrink: '0',
});

export const textSection = style({
  ...themeVars.display.flexColumn,
  alignItems: 'flex-start',
  alignSelf: 'stretch',
});

export const infoDday = style({
  color: themeVars.color.white,
  ...themeVars.fontStyles.title1_b_24,
});

export const subtitle = style({
  ...themeVars.fontStyles.title3_b_18,
  color: themeVars.color.confeti_lime,
});

export const fixedWord = style({
  ...themeVars.fontStyles.title3_b_18,
  color: themeVars.color.white,
});

export const infoBottom = style({
  marginTop: '9.8rem',
  ...themeVars.display.flexBetween,
});
