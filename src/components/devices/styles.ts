import styled from "styled-components";
import { blueDark } from "@radix-ui/colors";

export const Devices = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  backdrop-filter: blur(6px);

  // Theme
  background-color: rgba(0, 0, 0, 0.22);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 4px 0;
`;

export const ToggleDeviceListButton = styled.button<{ show: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  border: none;
  background: none;
  border-radius: 4px;
  padding: 8px 16px;

  color: ${blueDark.blue12};
  background-color: ${(props) => (props.show ? blueDark.blue2 : "none")};
  &:hover {
    background-color: ${blueDark.blue4};
  }
`;

export const IconContainer = styled.span`
  display: inline-flex;
`;

export const SelectedDevice = styled.span`
  margin: 0 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const MicList = styled.div<{ show: boolean }>`
  position: absolute;
  transform: translate(-100%, -100%);
  top: -8px;
  width: 250px;
  left: 308px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const CamList = styled.div<{ show: boolean }>`
  position: absolute;
  transform: translate(-100%, -100%);
  top: -8px;
  width: 250px;
  left: 358px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const DeviceButton = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  width: 100%;
  padding: 10px 18px;
  text-align: left;
  :first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  :last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  &:hover {
    background-color: ${(props) =>
      props.selected ? blueDark.blue9 : blueDark.blue4};
  }

  color: ${blueDark.blue12};
  background-color: ${(props) =>
    props.selected ? blueDark.blue9 : blueDark.blue2};
`;

export const IconContainer2 = styled.span`
  display: inline-flex;
  margin-right: 10px;
`;

export const DeviceName = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
