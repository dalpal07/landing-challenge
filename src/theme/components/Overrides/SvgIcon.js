import {isFunction, mapValues} from 'lodash';

const styleOverrides = {};
const variants = () => [];
const defaultProps = {};

const SvgIconOverrides = (theme) => {
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
export default SvgIconOverrides;