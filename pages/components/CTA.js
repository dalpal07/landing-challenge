import {Box, Button, Grid, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {styled} from "@mui/material/styles";

const ItemCenterGrid = styled(Grid)({
    marginTop: '-20em',
    position: 'static',
    alignItems: 'center',
    textAlign: 'left',
});

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

const StickyGridItem = styled(Grid)({
    position: 'sticky',
    top: '10em',
    marginBottom: '8em',
});

const CTA = () => {
    return (
        <ItemCenterGrid container spacing={2}>
            <StickyGridItem item xs={6}>
                <BigBlackText>Start stacking <i>your</i> internet</BigBlackText>
                <LittleBoldText>Free. Fun. In your pocket.</LittleBoldText>
                <LittleThinText>Save the best links you’re finding online and share what you<br/>know with others.</LittleThinText>
                <LittleThinText>Sign up and start stacking content - it’s free!</LittleThinText>
                <StartButton>Start stacking!</StartButton>
            </StickyGridItem>
            <Grid item xs={6}>
                <Image src='/images/Phone.svg' alt='Phone' height={933} width={736}/>
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
                <Image src='/images/PlatstackDesktopAndMobile.svg' alt='Platstack Desktop And Mobile' height={712} width={687}/>
            </Grid>
        </ItemCenterGrid>
    );
}

export default CTA;