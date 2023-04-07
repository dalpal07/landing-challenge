import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {styled} from "@mui/material/styles";
import theme from "../../src/theme";

const ExtraPaddingBox = styled(Box)({
    height: '15em',
});

const RightAlignedBox = styled(Box)({
    display: 'block',
    justifyContent: 'right',
    textAlign: 'right',
});

const BigBlackText = styled(Typography)({
    fontSize: '3em',
    fontWeight: 'bold',
    lineHeight: '1.2em',
    display: 'inline',
});

const BigRedText = styled(Typography)({
    fontSize: '3em',
    fontWeight: 'bold',
    lineHeight: '1.2em',
    color: '#FF4444',
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

const LeftGridItem = styled(Grid)({
    justifyContent: 'left',
    textAlign: 'left',
});

const RightGridItem = styled(Grid)({

});

const ImageGridItem = styled(Grid)({

});

const Share = () => {

    return (
        <Box>
            <ExtraPaddingBox/>
            <RightAlignedBox>
                <BigBlackText>Share all the best content on a topic with a single link</BigBlackText>
                <LittleThinText>Whether it’s sharing great content with friends or building an engaged audience,<br/>Platstack makes sharing
                    the internet faster & easier than you’ve ever experienced.</LittleThinText>
            </RightAlignedBox>
            <TwoColumnGrid container spacing={2}>
                <LeftGridItem item xs={6}>
                    <LittleBoldText>All in one place</LittleBoldText>
                    <Box>
                        <BigRedText>No more digging around for things you’ve shared </BigRedText>
                        <BigBlackText>in message threads</BigBlackText>
                    </Box>
                    <LittleThinText>Platstack keeps content you’ve shared organized in one place,<br/>so what you’re looking for doesn’t get buried
                        in threads or<br/>separated across multiple apps.</LittleThinText>
                </LeftGridItem>
                <ImageGridItem item xs={6}>
                    <Image src='/images/SharedPost.svg' alt='Shared Post' height={360} width={576}/>
                </ImageGridItem>
            </TwoColumnGrid>
            <TwoColumnGrid container spacing={2}>
                <LeftGridItem item xs={6}>
                    <LittleBoldText>Stack it forward!</LittleBoldText>
                    <Box>
                        <BigBlackText>Share the best content. </BigBlackText>
                        <BigRedText>Stack your knowledge forward.</BigRedText>
                    </Box>
                    <LittleThinText>You spend a lot of time uncovering the gems of the internet...<br/>Platstack helps you capture and seamlessly
                        share them - with<br/>friends, colleagues, or the world.</LittleThinText>
                </LeftGridItem>
                <ImageGridItem item xs={6}>
                    <Image src='/images/StackForward.svg' alt='Stack Forward' height={437} width={594}/>
                </ImageGridItem>
            </TwoColumnGrid>
        </Box>
    )
}

export default Share;