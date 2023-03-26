// Imports
import {isFunction, mapValues} from 'lodash';

// Style overrides for chip
const styleOverrides = (theme)  => ({
  root: {
    '& .MuiTab-root:not(:nth-of-type(1))': {
      marginLeft: theme.spacing(8),
    },
  },
  indicator: {
    height: '4px',
    borderRadius: '2px',
  },
});

// Variants for chip
const variants = () => ([]);

// Chip override function
const MuiTabsOverrides = (theme) => {
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
export default MuiTabsOverrides;