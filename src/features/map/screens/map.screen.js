import React, { useState, useContext, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { Search } from "../components/SearchComponent";
import { MapCallout } from "../components/MapCallout";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((currentRestaurant) => {
          return (
            <MapView.Marker
              key={currentRestaurant.name}
              title={currentRestaurant.name}
              coordinate={{
                latitude: currentRestaurant.geometry.location.lat,
                longitude: currentRestaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantsDetail", {
                    restaurant: currentRestaurant,
                  })
                }
              >
                <MapCallout restaurant={currentRestaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
