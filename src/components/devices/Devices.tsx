import * as S from "./styles";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { blueDark } from "@radix-ui/colors";
import {
  ArrowIcon,
  BulletIcon,
  CheckIcon,
  MicIcon,
  VideoIcon,
} from "../../svgs";

type Device = {
  id: number;
  label: string;
};

interface DevicesProps {
  micList: Device[];
  camList: Device[];
  selectedMicName: string;
  selectedCamName: string;
  onMicSelect: (mic: Device) => void;
  onCamSelect: (mic: Device) => void;
}

export function Devices({
  micList,
  camList,
  selectedMicName,
  selectedCamName,
  onMicSelect,
  onCamSelect,
}: DevicesProps) {
  const [showMicList, setShowMicList] = useState(false);
  const [showCamList, setShowCamList] = useState(false);
  const showMicListRef = useRef(false);
  const showCamListRef = useRef(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    showMicListRef.current = showMicList;
  }, [showMicList]);

  useEffect(() => {
    showCamListRef.current = showCamList;
  }, [showCamList]);

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (showMicListRef.current && !target.closest("#mic-list-btn")) {
      setShowMicList(false);
    }

    if (showCamListRef.current && !target.closest("#cam-list-btn")) {
      setShowCamList(false);
    }
  }, []);

  return (
    <S.Devices>
      <S.Wrapper>
        <S.ToggleDeviceListButton
          id="mic-list-btn"
          show={showMicList}
          onClick={() => setShowMicList((prevState) => !prevState)}
        >
          <S.IconContainer>
            <MicIcon color={blueDark.blue12} />
          </S.IconContainer>
          <S.SelectedDevice>{selectedMicName}</S.SelectedDevice>
          <S.IconContainer>
            <ArrowIcon
              direction={showMicList ? "up" : "down"}
              color={blueDark.blue12}
            />
          </S.IconContainer>
        </S.ToggleDeviceListButton>
        <S.MicList show={showMicList}>
          {micList.map((mic) => {
            const selected = mic.label === selectedMicName;
            return (
              <S.DeviceButton
                key={mic.id}
                selected={selected}
                onClick={() => onMicSelect(mic)}
              >
                <S.IconContainer2>
                  {selected ? (
                    <CheckIcon color={blueDark.blue12} />
                  ) : (
                    <BulletIcon color={blueDark.blue12} />
                  )}
                </S.IconContainer2>
                <S.DeviceName>{mic.label}</S.DeviceName>
              </S.DeviceButton>
            );
          })}
        </S.MicList>
      </S.Wrapper>
      <S.Wrapper>
        <S.ToggleDeviceListButton
          id="cam-list-btn"
          show={showCamList}
          onClick={() => setShowCamList((prevState) => !prevState)}
        >
          <S.IconContainer>
            <VideoIcon color={blueDark.blue12} />
          </S.IconContainer>
          <S.SelectedDevice>{selectedCamName}</S.SelectedDevice>
          <S.IconContainer>
            <ArrowIcon
              direction={showCamList ? "up" : "down"}
              color={blueDark.blue12}
            />
          </S.IconContainer>
        </S.ToggleDeviceListButton>
        <S.CamList show={showCamList}>
          {camList.map((cam) => {
            const selected = cam.label === selectedCamName;
            return (
              <S.DeviceButton
                key={cam.id}
                selected={selected}
                onClick={() => onCamSelect(cam)}
              >
                <S.IconContainer2>
                  {selected ? (
                    <CheckIcon color={blueDark.blue12} />
                  ) : (
                    <BulletIcon color={blueDark.blue12} />
                  )}
                </S.IconContainer2>
                <S.DeviceName>{cam.label}</S.DeviceName>
              </S.DeviceButton>
            );
          })}
        </S.CamList>
      </S.Wrapper>
    </S.Devices>
  );
}

// done
