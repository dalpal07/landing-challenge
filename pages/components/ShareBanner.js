import {Accordion, Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const BannerGrid = styled(Grid)({
    zIndex: 9999,
    position: 'sticky',
    top: '2em',
    marginTop: '5em',
    marginBottom: '20em',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em 6em',
    height: '7em',
    background: 'linear-gradient(291.03deg, #FFF3F3 1.82%, rgba(255, 220, 220, 0.04) 98.62%)',
    boxShadow: '0px 16px 16px rgba(255, 220, 220, 0.25), inset 0px 0px 4px #F5F2FF',
    filter: 'drop-shadow(0px 16px 16px rgba(228, 220, 255, 0.25))',
    borderRadius: '24px',
});

const BannerItem = styled(Grid)({
    position: 'relative',
    top: '-0.15em',
    fontSize: '5em',
    fontWeight: 'bolder',
    background: 'linear-gradient(180deg, rgba(139, 5, 5, 0.11) 53.65%, rgba(174, 109, 49, 0.0583) 96.87%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
});

const ActiveBannerItem = styled(Grid)({
    position: 'relative',
    top: '-0.15em',
    fontSize: '5em',
    fontWeight: 'bolder',
    background: 'linear-gradient(180deg, rgba(196, 0, 0, 0.67) 0%, rgba(255, 68, 68, 0.22) 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
});

const ShareBanner = () => {
    return (
        <BannerGrid container spacing={2}>
            <BannerItem item xs={4}>Search</BannerItem>
            <BannerItem item xs={4}>Save</BannerItem>
            <ActiveBannerItem item xs={4}>Share</ActiveBannerItem>
        </BannerGrid>
    )
}

export default ShareBanner;