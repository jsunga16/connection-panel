import React, { useRef, useState, useEffect, useCallback } from "react";
import { blueDark, slateDark } from "@radix-ui/colors";
import { Check2Icon, NextIcon, PreviousIcon } from "../../svgs";
import * as S from "./styles";

type Background = {
  id: number;
  name: string;
  location: string;
};

interface VirtualBgSliderProps {
  show: boolean;
  backgrounds: Background[];
  selectedBgId: number;
  onSelectBg: (id: number) => void;
  onHide: () => void;
}

export function VirtualBgSlider({
  show,
  backgrounds,
  selectedBgId,
  onSelectBg,
  onHide,
}: VirtualBgSliderProps) {
  const [disablePrevBtn, setPrevBtn] = useState(true);
  const [disableNextBtn, setNextBtn] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
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
      !target.closest("#vb-btn") &&
      !target.closest("#vb-slider")
    ) {
      onHide();
    }
  }, []);

  const handlePrevSlider = () => {
    if (sliderRef.current === null) return;
    const sliderWidth = sliderRef.current.clientWidth;
    const sliderPosition =
      sliderRef.current.style.left === ""
        ? 0
        : parseInt(sliderRef.current.style.left, 10);

    if (sliderPosition === -700) setPrevBtn(true);
    if (Math.abs(sliderPosition) + 700 >= sliderWidth) setNextBtn(false);

    if (sliderPosition === 0) return;
    sliderRef.current.style.left = `${sliderPosition + 700}px`;
  };

  const handleNextSlider = () => {
    if (sliderRef.current === null) return;
    const sliderWidth = sliderRef.current.clientWidth;
    const sliderPosition =
      sliderRef.current.style.left === ""
        ? 0
        : parseInt(sliderRef.current.style.left, 10);

    if (sliderPosition === 0) setPrevBtn(false);
    if (Math.abs(sliderPosition - 1400) >= sliderWidth) setNextBtn(true);

    if (Math.abs(sliderPosition - 700) >= sliderWidth) return;
    sliderRef.current.style.left = `${sliderPosition - 700}px`;
  };

  return (
    <S.VirtualBgSlider show={show} id="vb-slider">
      <S.SliderContainer>
        <S.Slider ref={sliderRef}>
          {backgrounds.map(({ id, name, location }) => {
            return (
              <S.SelectButton
                key={id}
                selected={id === selectedBgId}
                onClick={() => onSelectBg(id)}
              >
                <S.ImageContainer src={location} alt={name} />
                <Check2Icon />
              </S.SelectButton>
            );
          })}
        </S.Slider>
      </S.SliderContainer>
      <S.PrevButton onClick={handlePrevSlider}>
        <PreviousIcon
          bgColor={disablePrevBtn ? "rgba(0, 0, 0, 0.439)" : blueDark.blue9}
          color={
            disablePrevBtn ? "rgba(255, 255, 255, 0.446)" : slateDark.slate1
          }
        />
      </S.PrevButton>
      <S.NextButton onClick={handleNextSlider}>
        <NextIcon
          bgColor={disableNextBtn ? "rgba(0, 0, 0, 0.439)" : blueDark.blue9}
          color={
            disableNextBtn ? "rgba(255, 255, 255, 0.446)" : slateDark.slate1
          }
        />
      </S.NextButton>
    </S.VirtualBgSlider>
  );
}

// done
