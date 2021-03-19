import React, { useContext } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../../components/safeArea/SafeArea";
import { Text } from "../../../components/textComponent/TextComponent";
import { Spacer } from "../../../components/spacer/Spacer";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182bd" />
      </AvatarContainer>
      <Spacer position="bottom" size="md" />
      <Text variant="label">{user.name}</Text>
      <List.Section>
        <SettingsItem
          title="Favourites"
          left={(props) => (
            <List.Icon
              {...props}
              color="black"
              icon="heart"
              onPress={() => navigation.navigate("Favourites")}
            />
          )}
        />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon
              {...props}
              color="black"
              icon="door"
              onPress={onLogout}
            />
          )}
        />
      </List.Section>
    </SafeArea>
  );
};
