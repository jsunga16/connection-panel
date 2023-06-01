import React from "react";
import styled from "styled-components";
import { ConnectedIcon } from "../../svgs";

const Container = styled.div`
  z-index: 2;
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  backdrop-filter: blur(6px);
  padding: 6px;

  font-family: "Open Sans";
  font-size: 12px;
  > svg {
    margin-right: 6px;
  }

  // Theme
  color: rgba(255, 255, 255, 0.923);
  background: rgba(0, 0, 0, 0.565);
`;

export function ConnectionSignal({ label }: { label: string }) {
  return (
    <Container>
      <ConnectedIcon />
      {label}
    </Container>
  );
}

// done
