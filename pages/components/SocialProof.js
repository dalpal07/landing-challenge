import {Box, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {styled} from "@mui/material/styles";

const Title = styled(Typography)({
    textAlign: 'left',
    fontSize: '6em',
    fontWeight: 'bold',
    background: 'linear-gradient(180deg, rgba(74, 49, 174, 0.11) 46.88%, rgba(64, 5, 139, 0.11) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    letterSpacing: '-0.02em',
});

const MadisonBubble = styled(Box)({
    zIndex: '1',
    position: 'relative',
    left: '200px',
    top: '100px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '585px',
    height: '225px',
    background: 'rgba(255, 255, 255, 0.01)',
    boxShadow: '0px 3.33535px 30px 11px rgba(59, 49, 174, 0.06)',
    borderRadius: '274px',
});

const RileyBubble = styled(Box)({
    zIndex: '2',
    position: 'relative',
    left: '710px',
    top: '-75px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '630px',
    height: '200px',
    background: ' #FFFFFF',
    boxShadow: '0px 3.33535px 30px 12px rgba(59, 49, 174, 0.09)',
    borderRadius: '274px',
});

const KimberlyBubble = styled(Box)({
    zIndex: '3',
    position: 'relative',
    left: '50px',
    top: '-125px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '610px',
    height: '200px',

    background: ' #FFFFFF',
    boxShadow: '0px 3.33535px 30px 13px rgba(59, 49, 174, 0.12)',
    borderRadius: '274px',
});

const CleoBubble = styled(Box)({
    zIndex: '4',
    position: 'relative',
    left: '610px',
    top: '-300px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '630px',
    height: '225px',

    background: ' #FFFFFF',
    boxShadow: '0px 3.33535px 30px 14px rgba(59, 49, 174, 0.15)',
    borderRadius: '274px',
});

const Bubbles = styled(Box)({
    overflowX: 'scroll',
});

const StyledTypography = styled(Typography)({
    fontSize: '2em',
    marginBottom: '1em',
});

const TypographyBox = styled(Box)({
    display: 'block',
});

const SocialProof = () => {
    return (
        <Box>
            <Title>What people say:</Title>
            <Bubbles>
                <MadisonBubble>
                    <TypographyBox>
                        <StyledTypography>“Once this gets going, why would you ever use<br/>just Google search as your go-to?”</StyledTypography>
                        <Typography>Madison - Student</Typography>
                    </TypographyBox>
                </MadisonBubble>
                <RileyBubble>
                    <TypographyBox>
                        <StyledTypography>“Finally, something to make the internet fun again.”</StyledTypography>
                        <Typography>Riley - Research Architect</Typography>
                    </TypographyBox>
                </RileyBubble>
                <KimberlyBubble>
                    <TypographyBox>
                        <StyledTypography>“I can now Marie Kondo my digital life, visually.”</StyledTypography>
                        <Typography>Kimberly - Remote Content Writer</Typography>
                    </TypographyBox>
                </KimberlyBubble>
                <CleoBubble>
                    <TypographyBox>
                        <StyledTypography>“Pinterest meets Chrome bookmarks meets FB!<br/>Soooo Gorgeous!”</StyledTypography>
                        <Typography>Cleo</Typography>
                    </TypographyBox>
                </CleoBubble>
            </Bubbles>
        </Box>
    );
}
export default SocialProof;