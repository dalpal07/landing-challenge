import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Button from '@mui/material/Button';

const HeadContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '64px 32px',
    gap: '24px',
    width: '1280px',
    height: '456px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
});


const HeadContentContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',
    gap: '48px',
    isolation: 'isolate',
    width: '1216px',
    height: '328px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
});

const TextWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    width: '1216px',
    height: '220px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    zIndex: 0,
});

const Heading = styled(Typography)({
    width: '1216px',
    height: '44px',
    fontFamily: 'Aeonik',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '36px',
    lineHeight: '44px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#231D39',
    flex: 'none',
    order: 0,
    flexGrow: 0,
});

const PurpleHeading = styled(Box)({
    textAlign: 'center',
    width: '1216px',
    height: '116px',
    flex: 'none',
    order: '1',
    flexGrow: '0',
});

const PurpleHeadingTypography = styled(Typography)({
    display: 'inline',
    fontFamily: 'Aeonik',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '88px',
    lineHeight: '116px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    background: 'linear-gradient(3.28deg, #3A0098 0.83%, #A717FF 73.78%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
});

const BlackHeadingTypography = styled(Typography)({
    display: 'inline',
    fontFamily: 'Aeonik',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '88px',
    lineHeight: '116px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    background: '#000000',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
});

const SupportText = styled(Typography)({
    width: '763px',
    height: '60px',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '30px',
    textAlign: 'center',
    color: '#3B3454',
    flex: 'none',
    order: 2,
    flexGrow: 0,
});

const StartButton = styled(Button)({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 28px',
    gap: '12px',
    width: '247px',
    height: '60px',
    background: 'linear-gradient(3.28deg, #2D0077 0.83%, #9C1EFF 85.08%)',
    boxShadow: '0px 18px 35px -16px rgba(109, 93, 212, 0.74)',
    borderRadius: '16px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
    zIndex: 1,
    '&:hover': {
        background: 'linear-gradient(3.28deg, #511C96 0.83%, #7527DA 85.08%)',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    }
});

const FreeBox = styled(Box)({
    position: 'absolute',
    width: '129px',
    height: '52.12px',
    left: '871px',
    top: '460px',
    flex: 'none',
    order: 2,
    flexGrow: 0,
    zIndex: 2,
});

const HeadContent = () => {
    return (
        <HeadContainer>
            <HeadContentContainer>
                <TextWrapper>
                    <Heading>
                        Find exactly what you’re looking for on the web, faster
                    </Heading>
                    <PurpleHeading>
                        <PurpleHeadingTypography>Search. </PurpleHeadingTypography><BlackHeadingTypography>Save. Share.</BlackHeadingTypography>
                    </PurpleHeading>
                    <SupportText>Platstack is the best way to save and organize any type of digital content from<br/>anywhere on the web.</SupportText>
                </TextWrapper>
                <StartButton>Start stacking content</StartButton>
                <FreeBox>
                    <Image src='/images/Free.svg' alt='Free' height={53} width={134}/>
                </FreeBox>
            </HeadContentContainer>
        </HeadContainer>
    );
};

export default HeadContent;