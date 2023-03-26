import {isFunction, mapValues} from 'lodash';

const styleOverrides = (theme) => ({
  paper: {
    boxShadow: '0px 0px 63px rgba(128, 129, 145, 0.25)',
    borderRadius: '24px',
  },
  listbox: {
    maxHeight: 240,
  },
  option: {
    color: '#14142A',
    margin: theme.spacing(0.5, 1),
    borderRadius: '16px',
    textOverflow: 'ellipsis',
    overflow: 'hidden !important',
    display: '-webkit-box !important',
    '-webkit-line-clamp': '1',
    '-webkit-box-orient': 'vertical',
    lineHeight: '32px',
    minHeight: '46px !important',
  },
});

const variants = () => [];

const AutocompleteOverrides = (theme) => {
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
export default AutocompleteOverrides;