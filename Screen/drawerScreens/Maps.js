import React from "react";
import MapView, { PROVIDER_GOOGLE, Callout, Marker } from "react-native-maps";
import { View, Text, StyleSheet, Image, Alert, Platform } from "react-native";
import { useTheme } from "@react-navigation/native";
// import Geolocation from "@react-native-community/geolocation";
// import { request, PERMISSIONS } from "react-native-permissions";

const mapDarkStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
];

const mapStandardStyle = [
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

// componentDidMount();
// {
//   this.requestLocationPermission();
// }

// requestLocationPermission = async () => {
//   if (Platform.OS === "ios") {
//     var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
//     console.log("iPhone: " + response);

//     if (response === "granted") {
//       this.locateCurrentPosition();
//     }
//   } else {
//     var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     console.log("Android: " + response);

//     if (response === "granted") {
//       this.locateCurrentPosition();
//     }
//   }
// };

// locateCurrentPosition = () => {
//   Geolocation.getCurrentPosition(
//     (position) => {
//       console.log(JSON.stringify(position));

//       let region = {
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//         latitudeDelta: 0.015,
//         longitudeDelta: 0.0121,
//       };
//       this.setState({ initialPosition });
//     },
//     (error) => Alert.alert(error.message),
//     { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
//   );
// };

getLocation = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === "granted") {
    try {
      const result = await Location.getCurrentPositionAsync({});
      if (result) {
        this.props.onSend({
          location: {
            longitude: result.coords.longitude,
            latitude: result.coords.latitude,
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const Maps = () => {
  const theme = useTheme();

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        // image={require("../assets/map_marker.png")}
        title="Test Title"
        description="This is the test description"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>Favourite Restaurant</Text>
              {/* <Text>A short description</Text> */}
              {/* <Image
                style={styles.image}
                source={require("../assets/banners/food-banner1.jpg")}
              /> */}
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};
export default Maps;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
