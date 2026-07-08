import React from "react";
import { Button, Center, Tooltip } from "@mantine/core";

const DEFAULT_ICON_SIZE = 32;

interface IconProps {
  size: number | string;
  alt?: string;
}

interface NavIconButtonProps {
  alt: string;
  icon: React.ComponentType<IconProps>;
  onClick?: () => void;
  props?: React.ComponentProps<typeof Button>;
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
        <Button onClick={onClick} variant="subtle" color="gray" {...props}>
          <IconComponent size={DEFAULT_ICON_SIZE} alt={alt} />
        </Button>
      </Tooltip>
    </Center>
  );
}
