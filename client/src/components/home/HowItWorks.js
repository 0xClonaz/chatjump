import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../utils/assetMapping";
import FeatureItem from "../shared/FeatureItem";
import FeatureItems from "../shared/FeatureItems";
import FlexColumn from "../shared/FlexColumn";
import Clouds from "../shared/Clouds";
import SectionTitle from "../shared/SectionTitle";
import SectionSubtitle from "../shared/SectionSubtitle";

const HowItWorks = () => {
    const { coins, chest, singleJumper } = assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    return (
        <FlexColumn>
            <Clouds lowestAltitude={40} count={7} />
            <FlexColumn justify="center" minHeight="100vh">
                <SectionTitle>ide majd szöveg</SectionTitle>
                <SectionSubtitle>
                    játék leírás majd
                </SectionSubtitle>
            </FlexColumn>
            <FlexColumn justify="space-around" minHeight="100vh">
                <FlexColumn>
                    <SectionTitle>játék leírás</SectionTitle>
                    <SectionSubtitle>
                    játék leírás
                    </SectionSubtitle>
                </FlexColumn>
                <FlexColumn>
                    <SectionSubtitle color="#505050">
                        - Hogyan játsz? -
                    </SectionSubtitle>
                    <FeatureItems>
                
                
                        
                    </FeatureItems>
                </FlexColumn>
            </FlexColumn>
        </FlexColumn>
    );
};

export default HowItWorks;
