import {isFunction, mapValues} from 'lodash';

const styleOverrides = () => ({
  root: {
    wordBreak: 'break-word',
  },
});

const variants = () => [];

const TypographyOverrides = (theme) => {
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
export default TypographyOverrides;