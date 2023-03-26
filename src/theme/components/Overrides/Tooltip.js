import {isFunction, mapValues} from 'lodash';

const styleOverrides = () => ({
  tooltip: {
    maxWidth: 150,
  },
});

const variants = () => [];

const defaultProps = {
  arrow: true
};

const TooltipOverrides = (theme) => {
  return mapValues({
    styleOverrides,
    variants,
    defaultProps,
  }, override => {
    if (isFunction(override)) {
      return override(theme);
    }
    return override;
  });
};
export default TooltipOverrides;