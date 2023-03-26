import {isFunction, mapValues} from 'lodash';

const styleOverrides = (theme) => ({
  root: {
    color: '#6E7191',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginBottom: '2px',
    borderRadius: theme.spacing(2),
    '&:hover, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible, &.Mui-focusVisible': {
      background: 'rgba(239, 240, 246, 0.5)',
      color: '#14142A',
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      },
    },
  },
  dense: {
    borderRadius: theme.spacing(1.5),
    paddingTop: '6px',
    paddingBottom: '6px',
  },
});

const variants = () => ([]);

const MenuItemOverrides = (theme) => {
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

export default MenuItemOverrides;