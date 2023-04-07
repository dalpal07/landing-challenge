import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {alpha} from "@mui/material";
import theme from "../../src/theme";

const NavbarContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '1em',
  margin: '2em',
});

const NavbarLogo = styled(Box)({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
});

const NavbarApp = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const NavbarButton = styled(Box)({
  textAlign: 'right',
});

const SignupButton = styled(Button)({
  marginRight: '1em',
  backgroundColor: '#F9F9FB',
  color: 'black',
  '&:hover': {
    backgroundColor: 'black',
    color: '#F9F9FB',
  },
});

const LoginButton = styled(Button)({
  display: 'inline-block',
  backgroundColor: theme.palette.primary && alpha(theme.palette.primary.main, 0.5),
  color: theme.palette.primary.dark,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
  },
});

function Navbar() {
  return (
    <NavbarContainer id={'Navbar'}>
      <NavbarLogo>
        <Image src='/images/Logo.svg' alt='Logo' height={40} width={171} />
      </NavbarLogo>
      <NavbarApp>
        <Image src='/images/AppStoreBadge.svg' alt='App Store Badge' height={40} width={121} />
        <Image src='/images/Chrome.svg' alt='Google Chrome' height={20} width={20} />
        <Typography sx={{ display: 'inline-block' }}>
          <u>Get the Chrome extension</u>
        </Typography>
      </NavbarApp>
      <NavbarButton>
        <SignupButton size='small'>
          <Typography>
            <b>Sign up</b>
          </Typography>
        </SignupButton>
        <LoginButton size='small'>
          <Typography>
            <b>Log in</b>
          </Typography>
        </LoginButton>
      </NavbarButton>
    </NavbarContainer>
  );
}

export default Navbar;