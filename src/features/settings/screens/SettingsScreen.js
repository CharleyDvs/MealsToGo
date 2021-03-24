import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/safeArea/SafeArea";
import { Text } from "../../../components/textComponent/TextComponent";
import { Spacer } from "../../../components/spacer/Spacer";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user);
      console.log(user);
    }, [user])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182bd" />
          ) : (
            <Avatar.Image size={180} uri={photo} />
          )}
        </TouchableOpacity>
        <Spacer position="bottom" size="md" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          onPress={() => navigation.navigate("Favourites")}
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
        />
        <SettingsItem
          title="Logout"
          onPress={onLogout}
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
        />
      </List.Section>
    </SafeArea>
  );
};
