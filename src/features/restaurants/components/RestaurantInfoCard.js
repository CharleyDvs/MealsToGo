import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/Spacer";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Addres = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  height: 20px;
  width: auto;
`;

const ClosedText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.sizes[1]};
  color: ${(props) => props.theme.colors.text.error};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const CardContent = styled(Card.Content)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <CardContent>
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map((item) => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <ClosedText>Closed Temporarily</ClosedText>
              )}
              <Spacer position="left" size="md" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </SectionEnd>
          </Section>
          <Addres>{address}</Addres>
        </Info>
      </CardContent>
    </Card>
  );
};
