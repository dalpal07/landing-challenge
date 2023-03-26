import {isFunction, mapValues} from 'lodash';

const variants = theme => ([
  {
    props: { variant: 'rectangular' },
    style: {
      borderRadius: theme.spacing(1.5),
    },
  },
]);

const FabOverrides = (theme) => {
  return mapValues({
    variants
  }, override => {
    if (isFunction(override)) {
      return override(theme);
    }
    return override;
  });
};
export default FabOverrides;