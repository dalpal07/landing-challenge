import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {styled} from "@mui/material/styles";
import theme from "../../src/theme";

const LeftAlignedBox = styled(Box)({
    display: 'flex',
    justifyContent: 'left',
    textAlign: 'left',
});

const BigBlackText = styled(Typography)({
    fontSize: '3em',
    fontWeight: 'bold',
    lineHeight: '1.2em',
    display: 'inline',
});

const BigPurpleText = styled(Typography)({
    fontSize: '3em',
    fontWeight: 'bold',
    lineHeight: '1.2em',
    color: theme.palette.primary.main,
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

const ImageGridItem = styled(Grid)({

});

const Search = () => {
    return (
        <Box>
            <LeftAlignedBox>
                <BigBlackText>Find hand-picked stacks of content gathered and<br/>approved by real people, not algorithms.</BigBlackText>
            </LeftAlignedBox>
            <TwoColumnGrid container spacing={2}>
                <LeftGridItem item xs={6}>
                    <LittleBoldText>Let others help you find the good stuff</LittleBoldText>
                    <Box>
                        <BigPurpleText>Save time & reduce overwhelm</BigPurpleText>
                        <BigBlackText>searching the internet</BigBlackText>
                    </Box>
                    <LittleThinText>Crowdsource your internet results by searching topic-based<br/>collections from people you know and trust.</LittleThinText>
                </LeftGridItem>
                <ImageGridItem item xs={6}>
                    <Image src='/images/Squiggles.svg' alt='Squiggles' height={360} width={576}/>
                </ImageGridItem>
            </TwoColumnGrid>
            <TwoColumnGrid container spacing={2}>
                <LeftGridItem item xs={6}>
                    <LittleBoldText>Social network based search engine</LittleBoldText>
                    <Box>
                        <BigBlackText>Search results with </BigBlackText>
                        <BigPurpleText>social reviews<br/>built in</BigPurpleText>
                    </Box>
                    <LittleThinText>Only spend your time looking at what other people find<br/>helpful.</LittleThinText>
                </LeftGridItem>
                <ImageGridItem item xs={6}>
                    <Image src='/images/Reviews.svg' alt='Reviews' height={360} width={576}/>
                </ImageGridItem>
            </TwoColumnGrid>
        </Box>
    )
}

export default Search;