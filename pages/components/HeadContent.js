import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Button from '@mui/material/Button';

const AboveSSS = styled(Typography)({
    fontSize: '3.25em',
    fontWeight: 'thinner',
    color: '#231D39',
});

const SSS = styled(Typography)({
    fontSize: '8em',
    fontWeight: 'bolder',
    margin: '.1em',
    display: 'inline-block',
    letterSpacing: '-3px',
    '&.purple': {
        background: 'linear-gradient(3.28deg, #3A0098 0.83%, #A717FF 73.78%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
    }
});

const BelowSSS = styled(Typography)({
    fontSize: '2em',
    fontWeight: 'thinner',
    color: '#231D39',
});

const FreeSignUp = styled(Box)({
    position: 'relative',
    left: '21em',
    bottom: '1em',
});

const GradiantButton = styled(Button)({
    boxSizing: 'border-box',
    background: `linear-gradient(3.28deg, #2D0077 0.83%, #9C1EFF 85.08%)`,
    boxShadow: `0px 18px 35px -16px rgba(109, 93, 212, 0.74)`,
    borderRadius: '16px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
    zIndex: 1,
});

const HeadContent = () => {
    return (
        <Box>
            <AboveSSS>Find exactly what you’re looking for on the web, faster</AboveSSS>
            <Box>
                <SSS className={'purple'}>Search.</SSS>
                <SSS>Save.</SSS>
                <SSS>Share.</SSS>
            </Box>
            <BelowSSS>Platstack is the best way to save and organize any type of digital content from<br/>anywhere on the web.</BelowSSS>
            <FreeSignUp>
                <Image src='/images/Free.svg' alt='Free' height={53} width={134}/>
            </FreeSignUp>
            <GradiantButton>Start stacking content</GradiantButton>
        </Box>
    );
};

export default HeadContent;