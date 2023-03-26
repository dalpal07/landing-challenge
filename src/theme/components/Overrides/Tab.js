// Imports
import {isFunction, mapValues} from 'lodash';

// Style overrides for chip
const styleOverrides = ()  => ({
  root: {
    padding: 0,
    fontWeight: 500,
    textTransform: 'capitalize',
    minWidth: 0,
    fontSize: '18px',
    '&.Mui-selected': {
      fontWeight: 600,
    },
  },
});

// Variants for chip
const variants = () => ([]);

// Chip override function
const MuiTabOverrides = (theme) => {
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
export default MuiTabOverrides;