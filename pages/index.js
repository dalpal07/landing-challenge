import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import Navbar from "./components/Navbar";
import HeadContent from "./components/HeadContent";
import Mock from "./components/Mock";
import SearchBanner from "./components/SearchBanner";
import Search from "./components/Search";
import SaveBanner from "./components/SaveBanner";
import ShareBanner from "./components/ShareBanner";
import Save from "./components/Save";
import Share from "./components/Share";
import NoBanner from "./components/NoBanner";
import SocialProof from "./components/SocialProof";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import {styled} from "@mui/material/styles";

const HomeContainer = styled(Box)({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px',
      width: '1440px',
      height: 'fit-content',
      background: '#FFFFFF',
});

const HeroSection = styled(Box)({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '96px 0px 0px',
      gap: '64px',
      width: '1440px',
      height: '11611px',
      flex: 'none',
      order: 1,
      alignSelf: 'stretch',
      flexGrow: 0,
      zIndex: 0,
});

const LandingPage = () => {
      const [activeComponent, setActiveComponent] = useState(0)

      useEffect(() => {
            const handleScroll = () => {
                  const position = window.scrollY
                  if (position < 3150) {
                        setActiveComponent(0)
                  } else if (position >= 3150 && position < 4775) {
                        setActiveComponent(1)
                  } else if (position >= 4775 && position < 6425) {
                        setActiveComponent(2)
                  } else {
                        setActiveComponent(3)
                  }
            }

            window.addEventListener('scroll', handleScroll)
            return () => {
                  window.removeEventListener('scroll', handleScroll)
            }
      }, []);

  return (
    <HomeContainer>
          <Navbar/>
          <HeroSection>
                <HeadContent/>
                <Mock/>
                <SearchBanner/>
                {/*{activeComponent === 0 && <SearchBanner/>}*/}
                {/*{activeComponent === 1 && <SaveBanner/>}*/}
                {/*{activeComponent === 2 && <ShareBanner/>}*/}
                {/*{activeComponent === 3 && <NoBanner/>}*/}
                {/*<Search/>*/}
                {/*<Save/>*/}
                {/*<Share/>*/}
                {/*<SocialProof/>*/}
                {/*<CTA/>*/}
                {/*<Footer/>*/}
          </HeroSection>
    </HomeContainer>
  )
}

export default LandingPage;
