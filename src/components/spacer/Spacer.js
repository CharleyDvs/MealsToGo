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

export const Spacer = styled.View`
  ${({ position, size }) => `
    ${positionVariants[position]}: ${sizeVariants[size]};
  `}
`;

Spacer.defaultProps = {
  position: "top",
  size: "sm",
};
