import React from "react";
import styled, { css } from "styled-components";
import { red, blueDark, slateDark, redDark } from "@radix-ui/colors";
import {
  MicOnIcon,
  MicOffIcon,
  CamOnIcon,
  CamOffIcon,
  VBIcon,
  MoreIcon,
} from "../../svgs";

export const VideoActions = styled.div`
  position: absolute;
  left: 0;
  bottom: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const VideoControls = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  border-radius: 56px;
  backdrop-filter: blur(6px);
  padding: 5px;

  // Theme
  background-color: rgba(0, 0, 0, 0.141);
`;

const baseBtnStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  margin-right: 16px;
  :last-of-type {
    margin-right: 0;
  }
`;

const MuteButton = styled.button<MuteButtonProps>`
  ${baseBtnStyles}
  ${(props) =>
    !props.disabled &&
    `
      &:hover {
        > svg {
          > rect {
            fill: ${props.muted ? red.red10 : blueDark.blue10};
          }
        }
      }
    `}
`;

const SelectButton = styled.button`
  ${baseBtnStyles}
  &:hover {
    > svg {
      > rect {
        fill: ${slateDark.slate12};
      }
    }
  }
`;

interface MuteButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  muted: boolean;
}

interface SelectButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  selected: boolean;
}

export function MicButton(props: MuteButtonProps) {
  return (
    <MuteButton {...props}>
      {props.muted ? (
        <MicOffIcon
          bgColor={props.disabled ? redDark.red7 : red.red9}
          color={slateDark.slate2}
        />
      ) : (
        <MicOnIcon bgColor={blueDark.blue9} color={slateDark.slate2} />
      )}
    </MuteButton>
  );
}

export function CamButton(props: MuteButtonProps) {
  return (
    <MuteButton {...props}>
      {props.muted ? (
        <CamOffIcon bgColor={red.red9} color={slateDark.slate2} />
      ) : (
        <CamOnIcon bgColor={blueDark.blue9} color={slateDark.slate2} />
      )}
    </MuteButton>
  );
}

export function VBButton({ selected, ...props }: SelectButtonProps) {
  return (
    <SelectButton id="vb-btn" {...props}>
      <VBIcon
        bgColor={selected ? slateDark.slate12 : slateDark.slate11}
        color={slateDark.slate2}
      />
    </SelectButton>
  );
}

export function MoreButton({ selected, ...props }: SelectButtonProps) {
  return (
    <SelectButton {...props} id="more-btn">
      <MoreIcon
        bgColor={selected ? slateDark.slate12 : slateDark.slate11}
        color={slateDark.slate2}
      />
    </SelectButton>
  );
}
