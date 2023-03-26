import {isFunction, mapValues} from 'lodash';

const styleOverrides = (theme) => ({
  icon: {
    display: 'none',
  },
  select: {
    '&[aria-expanded="false"]': {
      borderRadius: '16px',
      backgroundColor: 'rgba(239, 240, 246, 0.5)',
      color: '#6E7191',
    },
    backgroundImage: 'url(/images/select-arrow.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '95.75% center',
    '&[aria-expanded="true"]': {
      backgroundColor: '#ffffff',
      backgroundImage: 'url(/images/select-open-arrow.svg)',
    },
    transition: theme.transitions.create('background', {
      easing: theme.transitions.easing.easeInOut,
      duration: 267,
    }),
  },
});

const SelectOverrides = (theme) => {
  return mapValues({
    styleOverrides,
  }, override => {
    if (isFunction(override)) {
      return override(theme);
    }
    return override;
  });
};
export default SelectOverrides;