import Image from "next/image";
import {Box} from "@mui/material";
import React from "react";
import {styled} from "@mui/material/styles";

const PlatstackMockup = styled(Box)({
    width: '1440px',
    height: '1002px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
});

const ImageContainer1 = styled(Box)({
    position: 'absolute',
    width: '1404px',
    height: '472px',
    left: '34px',
    top: '581px',
});

const ImageContainer2 = styled(Box)({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    position: 'absolute',
    width: '1313px',
    height: '519px',
    left: '64px',
    top: '1115px',
    background: '#FFFFFF',
    border: '3px solid #F9F9FB',
    boxShadow: '0px 4px 35px rgba(124, 93, 212, 0.35)',
    borderRadius: '24px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
});
const Mock = () => {
    return (
        <PlatstackMockup>
            <ImageContainer1>
                <Image src='/images/AppFavicons.svg' alt='App Favicons' width={1404} height={472}/>
            </ImageContainer1>
            <ImageContainer2>
                <Image src='/images/Browserbar.svg' alt='Browser Bar' width={1313} height={62}/>
                <Image src='/images/URLbar.svg' alt='URL Bar' width={1313} height={66}/>
                <Image src='/images/Line27.svg' alt='Line 27' width={1313} height={1}/>
                <Image src='/images/App.svg' alt='App' width={1313} height={391}/>
            </ImageContainer2>
        </PlatstackMockup>
    );
}

export default Mock;