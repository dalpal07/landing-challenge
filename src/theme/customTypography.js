export default function customTypography(theme) {
  return {
    d1: {
      fontSize: '9.6rem',
      lineHeight: '3.8rem',
      letterSpacing: '-1px',
    },
    d2: {
      fontSize: '7.2rem',
      lineHeight: '8.8rem',
      letterSpacing: '-1px',
    },
    d3: {
      fontSize: '6.4rem',
      lineHeight: '7.2rem',
      letterSpacing: '-1px',
    },
    h1: {
      fontSize: '5.6rem',
      lineHeight: '6.4rem',
      letterSpacing: '-1px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '4.8rem',
      lineHeight: '5.8rem',
      letterSpacing: '-1px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '4.0rem',
      lineHeight: '4.8rem',
      letterSpacing: '-1px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '3.2rem',
      lineHeight: '3.9rem',
      letterSpacing: '0.5px',
      fontWeight: 500,
    },
    h5: {
      fontSize: '2.4rem',
      lineHeight: '3.2rem',
      letterSpacing: '0',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.8rem',
      lineHeight: '2.4rem',
      letterSpacing: '0',
      fontWeight: 500,
    },
    menu: {
      fontSize: '1.4rem',
      lineHeight: '2.0rem',
      letterSpacing: '0',
    },
    title: {
      fontSize: '1.6rem',
      lineHeight: '1.9rem',
      letterSpacing: '0',
    },
    caption1: {
      fontSize: '1.3rem',
      lineHeight: '1.8rem',
      letterSpacing: '0',
    },
    caption2: {
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '0',
    },
    body: {
      ...theme.typography.body1,
      fontSize: '1.4rem',
      lineHeight: '2.4rem',
      letterSpacing: '0',
    },
    bodySmall: {
      ...theme.typography.body2,
      fontSize: '1.3rem',
      lineHeight: '2.4rem',
      letterSpacing: '0',
    },
    button: {
      fontSize: '1.4rem',
      lineHeight: '2.0rem',
      letterSpacing: '0',
    },
    buttonSmall: {
      fontSize: '1.3rem',
      lineHeight: '2.0rem',
      letterSpacing: '0',
    },
  };
}