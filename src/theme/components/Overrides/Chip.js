// Imports
import {isFunction, mapValues} from 'lodash';

// Style overrides for chip
const styleOverrides = ()  => ({
  root: {
    cursor: 'pointer',
    fontWeight: 500,
  },
  sizeSmall: {
    height: 28,
  },
});

// Variants for chip
const variants = ({ palette }) => ([ 
  {
    props: { variant: 'outlined', color: 'primary' },
    style: {
      borderColor: palette.primary.light,
      color: palette.primary.light,
      borderWidth: '1.5px',
      '&:hover': {
        backgroundColor: palette.primary.light,
        color: palette.primary.contrastText,
      },
      '&.MuiChip-clickable': {
        '&:hover': {
          backgroundColor: palette.primary.light,
          color: palette.primary.contrastText,
        },
      },
    },
  },
  {
    props: { variant: 'outlined', color: 'secondary' },
    style: {
      height: '16px',
      fontSize: '8px',
      borderColor: palette.secondary.main,
      borderWidth: '1.5px',
      '&:hover': {
        backgroundColor: palette.secondary.main,
        color: palette.primary.contrastText,
      },
    },
  },

]);

// Chip override function
const ChipOverrides = (theme) => {
  return mapValues({
    styleOverrides,
    variants,
  }, override => {
    if (isFunction(override)) {
      return override(theme);
    }
    return override;
  });
};

// Default export
export default ChipOverrides;