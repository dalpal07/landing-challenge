import Image from "next/image";
import {Box} from "@mui/material";
import React from "react";
import {styled} from "@mui/material/styles";

const ImageContainer1 = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '450px',
});

const ImageContainer2 = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '550px',
});
const Mock = () => {
    return (
        <Box>
            <ImageContainer1>
                <Image src='/images/AppFavicons.svg' alt='App Favicons' layout={'fill'}/>
            </ImageContainer1>
            <ImageContainer2>
                <Image src='/images/PlatstackApp.svg' alt='Platstack App' layout={'fill'}/>
            </ImageContainer2>
        </Box>
    );
}

export default Mock;