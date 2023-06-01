import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../../styles/globalStyles";

const ModalContainer = styled.div`
  width: 832px;
  height: 468px;
  border-radius: 12px;
  backdrop-filter: blur(6px);
  padding: 27px 24px;

  // Theme
  background: rgba(0, 0, 0, 0.565);
`;

export function ConnectionPanel({
  children,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <ModalContainer>
      <GlobalStyles />
      {children}
    </ModalContainer>
  );
}

export const VideoContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 16/9;
  justify-content: center;
`;
