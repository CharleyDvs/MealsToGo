import React from "react";
import styled from "styled-components";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const centeredLabel = (theme) => `
    font-family: ${theme.fonts.body};
    text-align: center;
`;

const centeredTitle = (theme) => `
    font-family: ${theme.fonts.body};
    text-align: center;
    font-weight: ${theme.fontWeights.bold};
    font-size: 32px;
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  centeredLabel,
  centeredTitle,
};

const StyledText = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ theme, variant }) => variants[variant](theme)}
`;

export const Text = ({ variant, children }) => {
  return <StyledText variant={variant}>{children}</StyledText>;
};

Text.defaultProps = {
  variant: "body",
};
