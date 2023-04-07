import {Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const BannerGrid = styled(Grid)({
  position: 'sticky',
  top: '2em',
  marginTop: '5em',
  marginBottom: '20em',
  alignContent: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1em 6em',
  height: '7em',
  background: 'transparent',
  boxShadow: 'transparent',
  filter: 'transparent',
  borderRadius: '24px',
});

const BannerItem = styled(Grid)({
  position: 'relative',
  top: '-0.15em',
  fontSize: '5em',
  fontWeight: 'bolder',
  background: 'transparent',
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
  background: 'transparent',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
});

const NoBanner = () => {
  return (
      <BannerGrid container spacing={2}>
        <BannerItem item xs={4}>Search</BannerItem>
        <ActiveBannerItem item xs={4}>Save</ActiveBannerItem>
        <BannerItem item xs={4}>Share</BannerItem>
      </BannerGrid>
  )
}

export default NoBanner;