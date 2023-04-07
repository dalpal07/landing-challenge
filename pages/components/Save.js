import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {styled} from "@mui/material/styles";
import theme from "../../src/theme";

const ExtraPaddingBox = styled(Box)({
   height: '15em',
});

const BigBlackText = styled(Typography)({
    fontSize: '3em',
    fontWeight: 'bold',
    lineHeight: '1.2em',
    display: 'inline',
});

const BigBlueText = styled(Typography)({
    fontSize: '3em',
    fontWeight: 'bold',
    lineHeight: '1.2em',
    color: '#05A8CD',
    display: 'inline',
});

const LittleBoldText = styled(Typography)({
    fontSize: '1.75em',
    fontWeight: 'bold',
    marginBottom: '0.5em',
});

const LittleThinText = styled(Typography)({
    fontSize: '1.75em',
    fontWeight: 'thin',
    marginTop: '0.5em',
});

const TwoColumnGrid = styled(Grid)({
    marginTop: '20em',
    marginBottom: '20em',
    alignItems: 'center',
});

const RightGridItem = styled(Grid)({
    textAlign: 'left',
});

const ImageGridItem = styled(Grid)({

});

const Save = () => {
    return (
        <Box>
            <ExtraPaddingBox/>
            <BigBlackText>Finally, a simple way to capture your digital<br/>experience without ever leaving the moment</BigBlackText>
            <LittleThinText>Platstack helps you distill the messy overwhelm of the internet down to only the best<br/>content, so you can
                         always find exactly what you're looking for.</LittleThinText>
            <TwoColumnGrid container spacing={6}>
                <ImageGridItem item xs={6}>
                    <Image src='/images/DigitalHome.svg' alt='Digital Home' height={360} width={576}/>
                </ImageGridItem>
                <RightGridItem item xs={6}>
                    <LittleBoldText>No more “browser tab FOMO”</LittleBoldText>
                    <Box>
                        <BigBlueText>Save the internets’ greatest hits. </BigBlueText>
                        <BigBlackText>Create your own digital home.</BigBlackText>
                    </Box>
                    <LittleThinText>Platstack helps you turn your time spent browsing, learning,<br/>and collecting ideas into a digital library you can keep.</LittleThinText>
                </RightGridItem>
            </TwoColumnGrid>
            <TwoColumnGrid container spacing={6}>
                <ImageGridItem item xs={6}>
                    <Image src='/images/Questions.svg' alt='Questions' height={360} width={576}/>
                </ImageGridItem>
                <RightGridItem item xs={6}>
                    <LittleBoldText>You should only have to find something once</LittleBoldText>
                    <Box>
                        <BigBlueText>Easily find anything you’ve ever<br/>come across </BigBlueText>
                        <BigBlackText>in seconds</BigBlackText>
                    </Box>
                    <LittleThinText>Great idea? Awesome resource? Epic meme? Platstack will remember exactly where you found it.</LittleThinText>
                </RightGridItem>
            </TwoColumnGrid>
        </Box>
    )
}

export default Save;