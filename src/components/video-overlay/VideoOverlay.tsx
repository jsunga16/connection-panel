import React from "react";
import { blueDark, grayDark } from "@radix-ui/colors";
import styled from "styled-components";
import {
  ConnectingIcon,
  ErrorConnectingIcon,
  SwitchingIcon,
  VideoOffIcon,
} from "../../svgs";
import { JoinButton } from "../join-button/JoinButton";

interface VideoOverlayProps {
  type: "connecting" | "video-off" | "switching" | "error";
  label: string;
  buttonLabel?: string;
}

const Container = styled.div<{ type: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;

  ${(props) =>
    (props.type === "connecting" ||
      props.type === "error" ||
      props.type === "switching") &&
    `z-index: 1;`}

  // Theme
  background-color: ${grayDark.gray6};
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 600;
  > svg {
    margin-bottom: 12px;
  }

  // Theme
  color: ${grayDark.gray9};
`;

const ButtonWrapper = styled.div`
  border-radius: 56px;
  backdrop-filter: blur(6px);
  padding: 4px;
  margin-top: 16px;

  // Theme
  background-color: rgba(0, 0, 0, 0.22);
`;

const ConnectButton = styled.button`
  font-weight: 600;
  border: none;
  background-color: ${blueDark.blue9};
  border-radius: 56px;
  padding: 8px 12px;
`;

export function VideoOverlay({ type, label, buttonLabel }: VideoOverlayProps) {
  const renderIcon = () => {
    switch (type) {
      case "connecting": {
        return (
          <>
            <ConnectingIcon />
            {label}
          </>
        );
      }
      case "video-off": {
        return (
          <>
            <VideoOffIcon />
            {label}
          </>
        );
      }
      case "error": {
        return (
          <>
            <ErrorConnectingIcon />
            <span>{label}</span>
            <ButtonWrapper>
              <ConnectButton>{buttonLabel}</ConnectButton>
            </ButtonWrapper>
          </>
        );
      }
      case "switching": {
        return (
          <>
            <SwitchingIcon />
            {label}
          </>
        );
      }
      default:
        return null;
    }
  };

  return (
    <Container type={type}>
      <LabelContainer>{renderIcon()}</LabelContainer>
    </Container>
  );
}
