import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {alpha} from "@mui/material";
import theme from "../../src/theme";
import Link from "next/link";

const NavbarContainer = styled(Box)({
  boxSizing: 'border-box',
  width: '1440px',
  height: '88px',
  background: '#FFFFFF',
  borderBottom: '1px solid #F3F2F7',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  zIndex: 1,
});

const Header = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  position: 'absolute',
  height: '80px',
  left: '0px',
  right: '0px',
  top: '4px',
});

const NavContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 32px',
  width: '1280px',
  height: '44px',
  flex: 'none',
  order: 0,
  flexGrow: 0,
});

const NavbarLogo = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  gap: '40px',
  width: '170.4px',
  height: '38.4px',
  flex: 'none',
  order: '0',
  flexGrow: '0',
});

const Downloads = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 0,
  gap: 16,
  width: 339,
  height: 40,
  flex: 'none',
  order: 1,
  flexGrow: 0,
});

const MobileAppStoreBadge = styled(Box)({
  boxSizing: 'border-box',
  width: '120px',
  height: '40px',
  background: '#FFFFFF',
  flex: 'none',
  order: 0,
  flexGrow: 0,
});

const Frame494 = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 0,
  gap: '16px',
  width: '203px',
  height: '20px',
  flex: 'none',
  order: 1,
  flexGrow: 0,
});

const Button494 = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  gap: '8px',
  width: '203px',
  height: '20px',
  flex: 'none',
  order: 0,
  flexGrow: 0,
});

const ChromeIcon = styled(Box)({
  width: '20px',
  height: '20px',
  flex: 'none',
  order: '0',
  flexGrow: '0',
});

const Text = styled(Box)({
  width: '175px',
  height: '20px',
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  textDecorationLine: 'underline',
  color: '#544762',
  flex: 'none',
  order: 1,
  flexGrow: 0
});

const NavigationActions = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 0,
  gap: '12px',
  width: '184px',
  height: '44px',
  flex: 'none',
  order: 2,
  flexGrow: 0,
});

const SignupButton = styled(Button)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 18px',
  gap: '8px',
  width: '92px',
  height: '44px',
  background: '#F9F9FB',
  borderRadius: '16px',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  '&:hover': {
    background: '#F3F2F7',
  }
});


const SignupText = styled(Typography)({
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#544762',
  flex: 'none',
  order: 1,
  flexGrow: 0,
  textTransform: 'none',
});


const LoginButton = styled(Button)({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 18px',
  gap: '8px',
  width: '80px',
  height: '44px',
  background: '#F3F0FF',
  border: '1px solid #F3F0FF',
  borderRadius: '16px',
  flex: 'none',
  order: 1,
  flexGrow: 0,
  '&:hover': {
    background: '#EEE9FE',
    border: '1px solid #EEE9FE',
  }
});

const LoginText = styled(Typography)({
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#7527DA',
  flex: 'none',
  order: 1,
  flexGrow: 0,
  textTransform: 'none',
});

function Navbar() {
  return (
      <NavbarContainer>
        <Header>
          <NavContainer>
            <NavbarLogo>
              <Image src='/images/Logo.svg' alt='Logo' height={40} width={171} />
            </NavbarLogo>
            <Downloads>
              <MobileAppStoreBadge>
                <Link href="https://apps.apple.com/us/app/platstack-stack-it-forward/id1535896375">
                  <a>
                    <Image src='/images/AppStoreBadge.svg' alt='App Store Badge' height={40} width={120} />
                  </a>
                </Link>
              </MobileAppStoreBadge>
              <Frame494>
                <Button494>
                  <ChromeIcon>
                    <Image src='/images/Chrome.svg' alt='Google Chrome' height={20} width={20} />
                  </ChromeIcon>
                  <Text>
                    <Link href="https://chrome.google.com/webstore/detail/platstack/mcfleopinjndfkoklekjcjcgefgenlhp?hl=en" passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        <u>Get the Chrome extension</u>
                      </a>
                    </Link>
                  </Text>
                </Button494>
              </Frame494>
            </Downloads>
            <NavigationActions>
              <SignupButton>
                <SignupText>
                  Sign up
                </SignupText>
              </SignupButton>
              <LoginButton>
                <LoginText>
                  Log in
                </LoginText>
              </LoginButton>
            </NavigationActions>
          </NavContainer>
        </Header>
      </NavbarContainer>
  );
}

export default Navbar;