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
    background: 'linear-gradient(180deg, #F3F0FF 0%, rgba(243, 240, 255, 0) 100%)',
    boxShadow: 'inset 0px 0px 4px #F5F2FF',
    filter: 'drop-shadow(0px 16px 16px rgba(228, 220, 255, 0.25))',
    borderRadius: '24px',
});

const BannerItem = styled(Grid)({
    position: 'relative',
    top: '-0.15em',
    fontSize: '5em',
    fontWeight: 'bolder',
    background: 'linear-gradient(180deg, rgba(74, 49, 174, 0.11) 46.88%, rgba(64, 5, 139, 0.0627) 100%)',
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
    background: 'linear-gradient(180deg, #8439EE 0%, rgba(132, 57, 238, 0.24) 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
});

const SearchBanner = () => {
    return (
        <BannerGrid container spacing={2}>
            <ActiveBannerItem item xs={4}>Search</ActiveBannerItem>
            <BannerItem item xs={4}>Save</BannerItem>
            <BannerItem item xs={4}>Share</BannerItem>
        </BannerGrid>
    )
}

export default SearchBanner;