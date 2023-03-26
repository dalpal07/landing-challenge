import {isFunction, mapValues} from 'lodash';

const variants = () => ([]);

const FormControlOverrides = (theme) => {
  return mapValues({
    variants
  }, override => {
    if (isFunction(override)) {
      return override(theme);
    }
    return override;
  });
};
export default FormControlOverrides;