import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;

export const StyledBackground = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountContainer = styled.View`
  flex: 0.5;
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  justify-content: center;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountInput = styled(TextInput)`
  width: 300px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;
