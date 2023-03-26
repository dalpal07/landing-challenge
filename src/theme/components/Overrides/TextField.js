import {isFunction, mapValues} from 'lodash';

const styleOverrides = (theme) => ({
  root: {
    '& label': {
      position: 'relative',
      transform: 'none',
      fontSize: '12px',
      color: '#6E7191',
      textAlign: 'left',
      textTransform: 'capitalize',
      marginBottom: theme.spacing(1.5),
      fontWeight: '500',
      '&[data-shrink=false]+.MuiInputBase-root': {
        '& input::placeholder': {
          opacity: '1 !important',
        },
        '& textarea::placeholder': {
          opacity: '1 !important',
        },
      },
      '& .MuiInputLabel-asterisk': {
        color: theme.palette.error.main,
      },
    },
    '& > .MuiInputBase-root': {
      '&.Mui-focused': {
        borderColor: theme.palette.primary.light,
        backgroundColor: '#fff',
      },
      '& input': {
        color: '#14142A',
      },
      '& input::placeholder':{
        opacity: '1 !important',
        color: '#6E7191',
        fontSize: '14px',
      },
      '& textarea::placeholder':{
        opacity: '1 !important',
        color: '#6E7191',
        fontSize: '14px',
      },
      '& fieldset': {
        borderWidth: '2px',
        '& legend': {
          maxWidth: 0,
        },
      },
    },
  },
});

const variants = (theme) => [
  {
    props: { variant: 'outlined' },
    style: {
      '& > .MuiInputBase-root': {
        borderRadius: '16px',
        backgroundColor: 'rgba(239,240,246,0.5)',
        '& fieldset': {
          borderColor: 'rgba(239,240,246,0.5)',
        },
        '&:hover, &.Mui-focused': {
          '& fieldset': {
            borderColor: theme.palette.primary.light,
          },
        },
      },
    },
  },
];

const TextFieldOverrides = (theme) => {
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
export default TextFieldOverrides;