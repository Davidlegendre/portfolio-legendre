import { useState } from "react";
import { ActionIcon, Box, Flex, Text } from "@mantine/core";
import {
  IconExternalLink,
} from "@tabler/icons-react";
import Link from "next/link";

interface FluentLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  showIcon?: boolean;
  iconPosition?: "left" | "right";
  color?: string;
  skin?: "link" | "button";
  underline?: boolean;
}

export function FluentLink({
  href,
  children,
  target,
  rel,
  showIcon = false,
  iconPosition = "right",
  color = "#007bff",
  underline = true,
  skin = "link",
}: FluentLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isActive = isHovered || isFocused;

  const isButton = skin === "button";

  const buttonStyles = isButton
    ? {
      padding: "6px 12px",
      borderRadius: "6px",
      backgroundColor: color, // 👈 SIEMPRE rojo
      color: "#fff",
      border: "none",
      transition: "all 0.2s ease",
      opacity: isActive ? 0.9 : 1, // hover effect suave
    }
    : {};



  return (
    <Flex gap={4} align={"flex-start"}>
      <Link
        href={href}
        target={target}
        rel={rel}
        style={{
          textDecoration: "none",
          color,
          outline: "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <Box
          style={{
            display: isButton ? "flex" : "inline-flex",
            width: isButton ? "100%" : "auto",
            alignItems: "center",
            justifyContent: isButton ? "center" : "flex-start",
            gap: 4,
            position: "relative",
            cursor: "pointer",
            ...buttonStyles,
          }}
        >
          {showIcon && (
            <IconExternalLink
              size={12}
              stroke={2}
            />
          )}

          <Text
            component="span"
            fz="xs"
            fw={600}
            style={{
              position: "relative",
              transition: "color 0.15s ease",
            }}
          >
            {children}
            {underline && !isButton && (
              <Box
                component="span"
                style={{
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  width: "100%",
                  height: 2,
                  backgroundColor: color,
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.25s ease",
                  display: "block",
                }}
              />
            )}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
}
