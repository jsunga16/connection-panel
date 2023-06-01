import React from "react";
import styled from "styled-components";
import { grayDark } from "@radix-ui/colors";

interface AccessCodeInputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 32px;
  padding: 4px;
  border-radius: 56px;
  backdrop-filter: blur(6px);

  // Theme
  background-color: rgba(0, 0, 0, 0.22);
`;

const Input = styled.input`
  font-family: "Open Sans";
  font-size: 14px;
  border-radius: 56px;
  padding: 8px 16px;
  width: 130px;

  //Theme
  color: ${grayDark.gray12};
  background-color: ${grayDark.gray3};
  border: 1px solid ${grayDark.gray6};
`;

export function AccessCodeInput({ label, ...props }: AccessCodeInputProps) {
  return (
    <Container>
      <Input placeholder={label} {...props} />
    </Container>
  );
}

// done
