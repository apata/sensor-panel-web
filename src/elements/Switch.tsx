import React from "react";
import styled from "styled-components";

interface SwitchProps {
  checked: boolean;
  label: string;
  onChange: () => void;
}

const HiddenSwitch = styled.input.attrs({
  type: "checkbox",
})`
  left: -100%;
  opacity: 0;
  position: absolute;
  margin: 0;
  padding: 0;
`;

const SwitchContainer = styled.label`
  position: relative;
  display: inline-flex;
  flex-flow: row nowrap;
  flex-grow: 0;
  overflow: hidden;
  padding-top: ${({ theme }) => theme.spacing.d1}px;
  padding-bottom: ${({ theme }) => theme.spacing.d1}px;
`;

const SwitchLabel = styled.span`
  display: block;
  margin-left: ${({ theme }) => theme.spacing.d1}px;
`;

const SwitchBackground = styled.span<Pick<SwitchProps, "checked">>`
  display: block;
  width: ${({ theme }) => theme.spacing.d4 + theme.spacing.d2}px;
  height: ${({ theme }) => theme.spacing.d2}px;
  border-radius: ${({ theme }) => theme.shapes.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
`;

const SwitchBullet = styled.span<Pick<SwitchProps, "checked">>`
  display: block;
  position: absolute;
  left: ${({ theme, checked }) => (!checked ? "0" : theme.spacing.d4 + "px")};
  transition: all 0.1s ease-in-out;
  height: ${({ theme }) => theme.spacing.d2}px;
  width: ${({ theme }) => theme.spacing.d2}px;
  border-radius: ${({ theme }) => theme.shapes.borderRadius}px;
  background-color: ${({ theme, checked }) =>
    !checked ? theme.palette.grey[400] : theme.palette.primary.main};
`;

const Switch = ({ checked, label, onChange }: SwitchProps) => (
  <SwitchContainer>
    <SwitchBackground checked={checked}>
      <SwitchBullet checked={checked} />
      <HiddenSwitch checked={checked} onChange={onChange} />
    </SwitchBackground>
    <SwitchLabel>{label}</SwitchLabel>
  </SwitchContainer>
);

export default Switch;
