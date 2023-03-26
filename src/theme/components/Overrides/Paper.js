import {isFunction, mapValues} from 'lodash';

const styleOverrides = () => ({});

const variants = () => ([
  {
    props: { variant: 'appRoot-auth' },
    style: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #AE06FA 0%, #6D5DD4 100%)',
      display: 'flex',
      alignItems: 'center',
    },
  },
]);

const defaultProps = () => ({
  square: true,
});

const PaperOverrides = (theme) => {
  return mapValues({
    variants,
    styleOverrides,
    defaultProps,
  }, override => {
    if (isFunction(override)) {
      return override(theme);
    }
    return override;
  });
};
export default PaperOverrides;