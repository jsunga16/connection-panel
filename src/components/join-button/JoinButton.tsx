import styled from "styled-components";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { blueDark, slateDark } from "@radix-ui/colors";
import { ArrowIcon, BulletIcon, CheckIcon } from "../../svgs";

type Role = {
  id: number;
  label: string;
};

interface JoinButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  roles?: Role[];
  selectedRoleId?: number;
  onSelectRole?: (role: Role) => void;
}

const Container = styled.div`
  display: inline-flex;
  backdrop-filter: blur(6px);
  border-radius: 56px;
  padding: 4px;
  margin-left: 32px;

  // Theme
  background-color: rgba(0, 0, 0, 0.22);
`;

const Button = styled.button`
  position: relative;
  border: none;
  border-radius: 56px;
  padding: 8px 12px;
  font-weight: 600;

  // Theme
  color: ${slateDark.slate1};
  background-color: ${blueDark.blue9};
`;

const IconContainer = styled.span`
  padding-left: 8px;
  > svg {
    padding-bottom: 2px;
  }
`;

const Roles = styled.div`
  transform: translate(0%, -100%);
  position: absolute;
  top: -8px;
  left: 0;
  min-width: 180px;
`;

const RoleButton = styled.button<{ selected: boolean }>`
  display: flex;
  border: none;
  width: 100%;
  padding: 10px 18px;
  white-space: nowrap;
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
  > svg {
    margin-right: 10px;
  }

  // Theme
  color: ${blueDark.blue12};
  background-color: ${(props) =>
    props.selected ? blueDark.blue9 : blueDark.blue2};
`;

export function JoinButton({
  label,
  roles,
  selectedRoleId,
  onSelectRole,
  onClick,
  ...props
}: JoinButtonProps) {
  const [showRoleList, setShowRoleList] = useState(false);
  const showRoleListRef = useRef(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    showRoleListRef.current = showRoleList;
  }, [showRoleList]);

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (showRoleListRef.current && !target.closest("#role-list-btn")) {
      setShowRoleList(false);
    }
  }, []);

  const handleJoin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.closest("#role-list-btn")) return;

    if (onClick) onClick(e);
  };

  return (
    <Container>
      <Button onClick={handleJoin} {...props}>
        {label}
        {roles && (
          <IconContainer
            id="role-list-btn"
            onClick={() => setShowRoleList((prevState) => !prevState)}
          >
            <ArrowIcon
              direction={showRoleList ? "up" : "down"}
              color={slateDark.slate1}
            />
          </IconContainer>
        )}
      </Button>
      {roles && showRoleList && (
        <Roles>
          {roles.map((role) => {
            return (
              <RoleButton
                key={role.id}
                selected={role.id === selectedRoleId}
                onClick={() => {
                  if (onSelectRole) onSelectRole(role);
                }}
              >
                {role.id === selectedRoleId ? (
                  <CheckIcon color={blueDark.blue12} />
                ) : (
                  <BulletIcon color={blueDark.blue12} />
                )}
                {role.label}
              </RoleButton>
            );
          })}
        </Roles>
      )}
    </Container>
  );
}

// done
