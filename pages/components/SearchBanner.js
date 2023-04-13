import {Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useEffect, useState} from "react";

const BannerContainer = styled(Box)(({ scrollPosition }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scrollPosition >= 1770 ? '0px 96px' : '16px 96px',
    gap: '73px',
    width: scrollPosition >= 1770 ? '1406px' : '1313px',
    height: scrollPosition >= 1770? '82px' : '114px',
    background: 'linear-gradient(180deg, #F3F0FF 0%, rgba(243, 240, 255, 0) 100%)',
    boxShadow: 'inset 0px 0px 4px #F5F2FF',
    filter: 'drop-shadow(0px 16px 16px rgba(228, 220, 255, 0.25))',
    borderRadius: '24px',
    flex: 'none',
    order: 2,
    flexGrow: 0,
    position: 'sticky',
    top: '0px',
}));

const RightBannerItem = styled(Box)(({ scrollPosition }) => ({
    width: '250px',
    height: '82px',
    fontFamily: 'Aeonik',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '64px',
    lineHeight: '82px',
    textAlign: 'right',
    letterSpacing: '-0.02em',
    background: 'linear-gradient(180deg, rgba(74, 49, 174, 0.11) 46.88%, rgba(64, 5, 139, 0.0627) 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    flex: 'none',
    order: 1,
    flexGrow: 0
}));

const MiddleBannerItem = styled(Box)(({ scrollPosition }) => ({
    width: '250px',
    height: '82px',
    fontFamily: 'Aeonik',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '64px',
    lineHeight: '82px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    background: 'linear-gradient(180deg, rgba(74, 49, 174, 0.11) 46.88%, rgba(64, 5, 139, 0.0627) 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    flex: 'none',
    order: 1,
    flexGrow: 0
}));

const LeftBannerItem = styled(Grid)({
    width: '250px',
    height: '82px',
    fontFamily: 'Aeonik',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '64px',
    lineHeight: '82px',
    textAlign: 'left',
    letterSpacing: '-0.02em',
    background: 'linear-gradient(180deg, #8439EE 0%, rgba(132, 57, 238, 0.24) 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    flex: 'none',
    order: 1,
    flexGrow: 0
});

const SearchBanner = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <BannerContainer>
            <LeftBannerItem>Search</LeftBannerItem>
            <MiddleBannerItem>Save</MiddleBannerItem>
            <RightBannerItem>Share</RightBannerItem>
        </BannerContainer>
    )
}

export default SearchBanner;