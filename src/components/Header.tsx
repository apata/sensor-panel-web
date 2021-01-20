import React from "react";
import styled from "styled-components";
import { Heading1 } from "../elements/Typography";
import SourceLink from "./SourceLink";

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${({ theme }) => theme.spacing.d1}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 0 ${({ theme }) => theme.spacing.d2}px;
  }

  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};

  box-shadow: ${({ theme }) =>
    `0 0 ${theme.spacing.d1}px ${theme.spacing.d0_5}px ${theme.palette.grey[400]}66`};
`;

const MobileHeading1 = styled(Heading1)`
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

const DesktopHeading1 = styled(Heading1)`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;

const Header = () => (
  <HeaderContainer>
    <MobileHeading1>SP</MobileHeading1>
    <DesktopHeading1>Sensor Panel</DesktopHeading1>
    <SourceLink />
  </HeaderContainer>
);

export default Header;
