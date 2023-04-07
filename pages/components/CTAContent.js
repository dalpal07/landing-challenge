import {Box, Button, Grid, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/material/styles";

const BigBlackText = styled(Typography)({
    fontSize: '4.5em',
    fontWeight: 'bold',
    lineHeight: '1em',
});

const LittleBoldText = styled(Typography)({
    fontSize: '1.75em',
    fontWeight: 'bold',
    marginTop: '1em',
});

const LittleThinText = styled(Typography)({
    fontSize: '1.75em',
    fontWeight: 'thin',
    marginBottom: '1em',
});

const StartButton = styled(Button)({
    marginTop: '1.5em',
    background: 'linear-gradient(3.28deg, #2D0077 0.83%, #9C1EFF 85.08%)',
    boxShadow: '0px 18px 35px -16px rgba(109, 93, 212, 0.74)',
    borderRadius: '16px',
});

const StickyBox = styled(Box)({
    position: 'sticky',
    top: '10em',
    textAlign: 'left',
});

const CTAContent = () => {
    return (
        <StickyBox>
            <BigBlackText>Start stacking <i>your</i> internet</BigBlackText>
            <LittleBoldText>Free. Fun. In your pocket.</LittleBoldText>
            <LittleThinText>Save the best links you’re finding online and share what you<br/>know with others.</LittleThinText>
            <LittleThinText>Sign up and start stacking content - it’s free!</LittleThinText>
            <StartButton>Start stacking!</StartButton>
        </StickyBox>
    );
}

export default CTAContent;