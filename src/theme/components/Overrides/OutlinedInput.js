import {isFunction, mapValues} from 'lodash';

const styleOverrides = ({ spacing, palette }) => ({
  root: {
    borderRadius: spacing(2),
    '&:hover, &.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.primary.light,
        borderWidth: '2px',
      },
    },
  },
});

const OutlinedInputOverrides = (theme) => {
  return mapValues({
    styleOverrides,
  }, override => {
    if (isFunction(override)) {
      return override(theme);
    }
    return override;
  });
};
export default OutlinedInputOverrides;