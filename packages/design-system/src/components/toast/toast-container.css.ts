import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  position: 'fixed',
  pointerEvents: 'none',
  touchAction: 'none',

  zIndex: 10,
  minWidth: 'auto',
  maxWidth: '100%',
  width: '32.5rem',
});

export const toastPositionStyle = recipe({
  base: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
  variants: {
    position: {
      topCenter: {
        top: '5em',
      },
      bottomCenter: {
        bottom: '5rem',
      },
    },
  },
});
