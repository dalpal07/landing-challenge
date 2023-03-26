import {isFunction, mapValues} from 'lodash';

const styleOverrides = theme => ({
  root: {
    borderRadius: theme.spacing(2),
    textTransform: 'capitalize',
  },
  sizeMedium: {
    '&:not(.MuiButton-text, [psvariant="icon"])': {
      padding: '16px 43px',
      '& .MuiButton-startIcon': {
        marginLeft: `-${theme.spacing(2)}`,
      },
    },
  },
  sizeLarge: {
    '&:not(.MuiButton-text, [psvariant="icon"])': {
      padding: '15px 58px',
      '& .MuiButton-startIcon': {
        marginLeft: '-20px',
      },
    },
  },
  sizeSmall: {
    '&:not(.MuiButton-text, [psvariant="icon"])': {
      padding: '14px 22px',
      '& .MuiButton-startIcon': {
        marginLeft: '-8px',
      },
    }
  },
  outlined: {
    borderWidth: '2px',
    '&:hover': {
      borderWidth: '2px',
    },
  },
});

const variants = ({ palette, spacing }) => ([
  {
    props: { variant: 'outlined', color: 'primary' },
    style: {
      borderColor: palette.primary.main,
      '&:hover': {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
      },
    },
  },
  {
    props: { variant: 'outlined', color: 'secondary' },
    style: {
      borderColor: palette.secondary.main,
      '&:hover': {
        backgroundColor: palette.secondary.main,
        color: palette.primary.contrastText,
      },
    },
  },
  {
    props: { psvariant: 'icon' },
    style: {
      borderRadius: spacing(2),
      padding: spacing(2),
      minWidth: 0,
    },
  },
  {
    props: { psvariant: 'icon', size: 'small' },
    style: {
      padding: spacing(1.5),
    },
  },
]);

const defaultProps = () => ({
  variant: 'contained',
});

const LoadingButtonOverrides = (theme) => {
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
export default LoadingButtonOverrides;