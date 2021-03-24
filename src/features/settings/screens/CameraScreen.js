import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeArea } from "../../../components/safeArea/SafeArea";
import { Text } from "../../../components/textComponent/TextComponent";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CameraView = styled(Camera)`
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
`;

const CameraButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  margin: 0 5px;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <SafeArea>
        <Text variant="label">No acces to camera</Text>
      </SafeArea>
    );
  }

  return (
    <CameraView
      ref={(node) => (cameraRef.current = node)}
      type={type}
      ratio={"16:9"}
    >
      <ButtonContainer>
        <CameraButton
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <ButtonText>Flip</ButtonText>
        </CameraButton>
        <CameraButton onPress={snap}>
          <ButtonText>Snap</ButtonText>
        </CameraButton>
      </ButtonContainer>
    </CameraView>
  );
};
