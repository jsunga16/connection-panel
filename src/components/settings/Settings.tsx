import styled from "styled-components";
import * as S from "./styles";
import React, { useRef, useEffect, useCallback } from "react";
import { ExitIcon, GearIcon } from "../../svgs";
import { QuestionMarkIcon } from "../../svgs";
import { TermsIcon } from "../../svgs";
import { blueDark } from "@radix-ui/colors";

interface SettingsMenuProps extends React.ComponentPropsWithoutRef<"div"> {
  show: boolean;
  onHide: () => void;
}

interface MenuItemButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  icon: "settings" | "ts" | "tos";
  label: string;
}

interface SelectDeviceProps {
  label: string;
  devices: any[];
}

const Container = styled.div<{ show: boolean }>`
  position: absolute;
  transform: translate(0%, -100%);
  top: -5px;
  right: -133px;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  white-space: nowrap;

  > button:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  > button:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 12px 16px;
  text-align: left;
  color: ${blueDark.blue12};

  &:hover {
    background-color: #0091ff;
  }
  background-color: #0f1b2d;
  > svg {
    margin-right: 10px;
  }
`;

const Modal = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};

  z-index: 3;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 616px;
  height: 335px;
  border-radius: 4px;
  font-family: "Open Sans";
  font-size: 14px;

  // Theme
  background-color: #151718;
  color: #ecedee;
`;

const Title = styled.div`
  position: relative;
  padding: 8px 16px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  background-color: #1a1d1e;
  > button {
    background: none;
    border: none;
    position: absolute;
    top: 8px;
    right: 16px;
    padding: 0;
    padding-left: 5px;
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const Label = styled.label`
  font-weight: normal;
`;

const Select = styled.select`
  width: 100%;
  font-size: 16px;
  padding: 8px 32px 8px 12px;
  margin-top: 6px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;

  //Theme
  color: #ecedee;
  border: 1px solid #313538;
  background-color: #1a1d1e;
`;

export function SettingsMenu({ show, onHide, ...props }: SettingsMenuProps) {
  const showRef = useRef(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    showRef.current = show;
  }, [show]);

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (showRef.current && !target.closest("#more-btn")) {
      onHide();
    }
  }, []);

  return <Container show={show} {...props} />;
}

export function MenuItemButton({ icon, label, ...props }: MenuItemButtonProps) {
  const renderIcon = () => {
    if (icon === "settings") {
      return <GearIcon />;
    } else if (icon === "ts") {
      return <QuestionMarkIcon />;
    } else if (icon === "tos") {
      return <TermsIcon />;
    }
  };

  return (
    <Button {...props} id={icon === "settings" ? "settings-btn" : undefined}>
      {renderIcon()}
      {label}
    </Button>
  );
}

interface SettingsModalProps extends React.ComponentPropsWithoutRef<"div"> {
  show: boolean;
  label: string;
  onHide: () => void;
}

export function SettingsModal({
  show,
  label,
  children,
  onHide,
}: SettingsModalProps) {
  const showRef = useRef(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    showRef.current = show;
  }, [show]);

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (
      showRef.current &&
      !target.closest("#settings-btn") &&
      !target.closest("#settings-modal")
    ) {
      onHide();
    }
  }, []);

  return (
    <Modal show={show} id="settings-modal">
      <Title>
        {label}
        <button onClick={onHide}>
          <ExitIcon />
        </button>
      </Title>
      <Content>{children}</Content>
    </Modal>
  );
}

export function SelectDevice(props: SelectDeviceProps) {
  return (
    <div>
      <Label htmlFor={props.label}>{props.label}</Label>
      <Select>
        {props.devices.map((device) => (
          <option key={device.id} value={device.id}>
            {device.label}
          </option>
        ))}
      </Select>
    </div>
  );
}

interface DisplayNameProps {
  titleLabel: string;
  hideLabel: string;
  showLabel: string;
  active: boolean;
  onSelect: (state: boolean) => void;
}

export function DisplayName({
  titleLabel,
  hideLabel,
  showLabel,
  active,
  onSelect,
}: DisplayNameProps) {
  return (
    <S.DisplayName>
      <S.DisplayNameTitle>{titleLabel}</S.DisplayNameTitle>
      <S.HideButton active={active} onClick={() => onSelect(false)}>
        {hideLabel}
      </S.HideButton>
      <S.ShowButton active={active} onClick={() => onSelect(true)}>
        {showLabel}
      </S.ShowButton>
    </S.DisplayName>
  );
}
