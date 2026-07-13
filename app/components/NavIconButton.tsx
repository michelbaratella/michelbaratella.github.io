import React from "react";
import { Button, Center, Tooltip } from "@mantine/core";

const DEFAULT_ICON_SIZE = 32;

interface IconProps {
  readonly size: number | string;
  readonly alt?: string;
}

interface NavIconButtonProps {
  readonly alt: string;
  readonly icon: React.ComponentType<IconProps>;
  readonly onClick?: () => void;
  readonly props?: React.ComponentProps<typeof Button>;
}

export default function NavIconButton({
  alt,
  icon: IconComponent,
  onClick,
  props,
}: NavIconButtonProps) {
  return (
    <Center maw={400} h={100}>
      <Tooltip label={alt} position="right" withArrow>
        <Button
          onClick={onClick}
          variant="subtle"
          color="gray"
          size="xl"
          radius="xl"
          p={0}
          style={{ width: "60px", height: "60px" }}
          {...props}
        >
          <IconComponent size={DEFAULT_ICON_SIZE} alt={alt} />
        </Button>
      </Tooltip>
    </Center>
  );
}
