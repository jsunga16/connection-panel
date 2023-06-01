import styled, { css } from "styled-components";
import { blueDark } from "@radix-ui/colors";

export const VirtualBgSlider = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  backdrop-filter: blur(6px);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 8px 0;
  z-index: 3;

  background: rgba(0, 0, 0, 0.22);
`;

export const SliderContainer = styled.div`
  width: 680px;
  height: 68px;
  position: relative;
  overflow-x: hidden;
`;

export const Slider = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  transition: 0.4s ease-in-out;
`;

export const SelectButton = styled.button<{ selected: boolean }>`
  position: relative;
  display: flex;
  background: none;
  padding: 0;
  border-radius: 4px;
  margin-right: 20px;

  .image-container {
    aspect-ratio: 16/9;
    width: 118px;
    border-radius: 4px;
  }
  > svg {
    position: absolute;
    display: none;
    top: 8px;
    right: 8px;
  }
  border: 1px solid ${(props) => (props.selected ? blueDark.blue9 : "#fff")};
  ${(props) => {
    if (props.selected) {
      return "> svg {display: block;}";
    }
  }}
`;

export const ImageContainer = styled.img`
  aspect-ratio: 16/9;
  width: 118px;
  border-radius: 4px;
`;

export const baseBtnStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background: none;
  border: none;
  padding: 0;
`;

export const PrevButton = styled.button`
  ${baseBtnStyles}
  left: 25px;
`;

export const NextButton = styled.button`
  ${baseBtnStyles}
  right: 25px;
`;
