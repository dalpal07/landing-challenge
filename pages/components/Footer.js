import {Box, Grid, Input, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {styled} from "@mui/material/styles";
import theme from "../../src/theme";

const MarginedFooter = styled('footer')({
    marginTop: '10em',
    marginBottom: '5em',
});

const LeftGridItem = styled(Grid)({
   textAlign: 'left',
});

const MarginedTypography = styled(Typography)({
    marginTop: '1em',
    marginBottom: '1em',
});

const InlineTypography = styled(Typography)({
    display: 'inline-block',
    marginRight: '2em',
});

const PurpleTypography = styled(Typography)({
    color: theme.palette.primary.main,
    marginBottom: '1em',
});

const Line = styled('hr')({
    marginTop: '7em',
    marginBottom: '3em',
    border: 'none',
    borderTop: '1px solid #D3D3D3',
    width: '100%',
});

const BottomLeftGridItem = styled(Grid)({
   textAlign: 'left',
});

const BottomRightGridItem = styled(Grid)({
    textAlign: 'right',
});

const IconContainer = styled(Box)({
    display: 'inline-block',
    marginLeft: '2em',
});

const Footer = () => {
    return (
        <MarginedFooter>
            <Grid container>
                <LeftGridItem item xs={8}>
                    <Image src='/images/Logo.svg' alt='Logo' height={40} width={171}/>
                    <MarginedTypography>On a mission to connect ideas & people across<br/>the internet :)</MarginedTypography>
                    <Box>
                        <InlineTypography><u>Get in touch</u></InlineTypography>
                        <InlineTypography><u>Feedback</u></InlineTypography>
                        <InlineTypography><u>Terms & Conditions</u></InlineTypography>
                        <InlineTypography><u>Privacy Policy</u></InlineTypography>
                    </Box>
                </LeftGridItem>
                <Grid item xs={4}>
                    <PurpleTypography>Get the app</PurpleTypography>
                    <Image src='/images/AppStoreBadgeDark.svg' alt='App Store Badge Dark' height={40} width={121}/>
                    <MarginedTypography>(coming soon to Android!)</MarginedTypography>
                </Grid>
            </Grid>
            <Line/>
            <Grid container>
                <BottomLeftGridItem item xs={4}>
                    <Typography>© 2023 Platstack. All rights reserved.</Typography>
                </BottomLeftGridItem>
                <Grid item xs={4}>
                    <Typography>Made with <Image src='/images/Lightning.svg' alt='Lightning' height={22} width={20}/> in Salt Lake City</Typography>
                </Grid>
                <BottomRightGridItem item xs={4}>
                    <IconContainer>
                        <Image src='/images/Twitter.svg' alt='Twitter' height={20} width={24}/>
                    </IconContainer>
                    <IconContainer>
                        <Image src='/images/Linkdin.svg' alt='Linkdin' height={24} width={24}/>
                    </IconContainer>
                    <IconContainer>
                        <Image src='/images/Facebook.svg' alt='Facebook' height={24} width={24}/>
                    </IconContainer>
                </BottomRightGridItem>
            </Grid>
        </MarginedFooter>
    );
}

export default Footer;