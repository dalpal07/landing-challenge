import {Box, Grid, Typography} from "@mui/material";
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
    background: 'linear-gradient(291.03deg, rgba(5, 168, 205, 0.09) 1.82%, rgba(5, 168, 205, 0.02) 98.62%)',
    boxShadow: '0px 16px 16px rgba(220, 242, 255, 0.25), inset 0px 0px 4px #F5F2FF',
    filter: 'drop-shadow(0px 16px 16px rgba(228, 220, 255, 0.25))',
    borderRadius: '24px',
});

const BannerItem = styled(Grid)({
    position: 'relative',
    top: '-0.15em',
    fontSize: '5em',
    fontWeight: 'bolder',
    background: 'linear-gradient(180deg, rgba(5, 168, 205, 0.42) 0%, rgba(5, 168, 205, 0.06) 100%)',
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
    background: 'linear-gradient(180deg, #05A8CD 0%, rgba(5, 168, 205, 0.24) 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
});

const SaveBanner = () => {
    return (
        <BannerGrid container spacing={2}>
            <BannerItem item xs={4}>Search</BannerItem>
            <ActiveBannerItem item xs={4}>Save</ActiveBannerItem>
            <BannerItem item xs={4}>Share</BannerItem>
        </BannerGrid>
    )
}

export default SaveBanner;