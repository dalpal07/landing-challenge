import {Stack, styled} from '@mui/material';

const StyledStack = styled(Stack)(() => ({
  border: '#000000',
  height: '88px',
}));

const Header = () => {

  return (
    <StyledStack flexDirection="row" width="100%">
      hello
    </StyledStack>
  );
}

export default Header;
