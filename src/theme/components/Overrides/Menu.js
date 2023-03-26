import {isFunction, mapValues} from 'lodash';

const styleOverrides = (theme) => ({
  root: {
    '& .MuiMenu-paper': {
      borderRadius: '16px',
      marginTop: '4px',
      padding: theme.spacing(0.5, 1),
      boxShadow: '0px 0px 63px 0px #80819140',
      border: '1px solid #F0F3F6',
    },
  },
});

const variants = () => ([
  {
    props: { isselect: 'true' },
    style: {
      '& .MuiMenu-paper': {
        borderRadius: '16px',
        marginTop: '4px',
      },
    },
  },
]);

const MenuOverrides = (theme) => {
  return mapValues({
    variants,
    styleOverrides,
  }, override => {
    if (isFunction(override)) {
      return override(theme);
    }
    return override;
  });
};

export default MenuOverrides;