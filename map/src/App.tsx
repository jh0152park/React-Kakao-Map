import React, { useEffect } from "react";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function App() {
    return (
        <VStack>
            <Heading>kakao map test</Heading>
            <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "100%", height: "500px" }}
                level={3}
            >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{ color: "#000" }}>Not easy</div>
                </MapMarker>
            </Map>
        </VStack>
    );
}

export default App;
