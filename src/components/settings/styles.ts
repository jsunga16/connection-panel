import styled from "styled-components";
import { blueDark, slateDark } from "@radix-ui/colors";

export const DisplayName = styled.div`
  margin-top: 16px;
`;

export const DisplayNameTitle = styled.div`
  margin-bottom: 6px;
`;

export const ButtonContainer = styled.div`
  display: inline-flex;
  border-radius: 8px;

  // Theme
  filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
  border: 1px solid #313538;
  background-color: #1a1d1e;
`;

export const HideButton = styled.button<{ active: boolean }>`
  padding: 10px 16px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid #313538;
  ${(props) => !props.active && `font-weight: 600;`}

  // Theme
  color: ${(props) => (props.active ? slateDark.slate12 : slateDark.slate2)};
  background-color: ${(props) =>
    props.active ? slateDark.slate2 : blueDark.blue9};
`;

export const ShowButton = styled.button<{ active: boolean }>`
  padding: 10px 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid #313538;
  border-left: none;
  ${(props) => props.active && `font-weight: 600;`}

  // Theme
  color: ${(props) => (props.active ? slateDark.slate2 : slateDark.slate12)};
  background-color: ${(props) =>
    props.active ? blueDark.blue9 : slateDark.slate2};
`;
