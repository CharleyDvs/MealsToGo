import React from "react";
import styled from "styled-components/native";

const sizeVariants = {
  sm: "8px",
  md: "16px",
  lg: "32px",
};

const positionVariants = {
  top: "margin-top",
  left: "margin-left",
  bottom: "margin-bottom",
  right: "margin-right",
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const variant = `
  ${positionVariants[position]}: ${sizeVariants[size]};
  `;
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "sm",
};
