import { Timeline, Text, Stack, Title, List } from "@mantine/core";
import { CheckIcon } from "@phosphor-icons/react";
import { formatProfessionalTimeline } from "~/utils/helpers";
import {
  containerVariants,
  itemVariants,
  MotionSettings,
} from "./MotionSettings";
import type { DefaultSectionProps } from "~/types/DefaultSectionProps";
import { useColorScheme } from "@mantine/hooks";

export default function ProfessionalTimeline({ section }: DefaultSectionProps) {
  const flatEvents = formatProfessionalTimeline(section);

  const osScheme = useColorScheme();
  const resolvedScheme = osScheme === "light" ? "light" : "dark";
  const textColor =
    resolvedScheme === "dark" ? "text-gray-200" : "text-gray-800";

  return (
    <Stack gap="xl">
      <Title order={2}>Professional Experience</Title>

      <MotionSettings variants={containerVariants}>
        <Timeline bulletSize={24} lineWidth={2}>
          {flatEvents.map((event, index) => {
            const isPreviousJob = index > 0;

            return (
              <Timeline.Item
                key={`${event.company}-${event.title}-${index}`}
                bullet={isPreviousJob ? <CheckIcon size={14} /> : undefined}
              >
                <MotionSettings variants={itemVariants}>
                  <Text fw={700} size="md">
                    {event.title}{" "}
                    <Text span fw={400} c="dimmed">
                      at {event.company}
                    </Text>
                  </Text>

                  {/* Date / Subtitle */}
                  {event.subtitle && (
                    <Text size="xs" mt={4} c="blue" fw={500}>
                      {event.subtitle}
                    </Text>
                  )}

                  {/* Bullet Points */}
                  <List size="sm" mt="sm" spacing="xs" withPadding>
                    {event.bullets.map((bullet, bIndex) => (
                      <List.Item key={bIndex}>
                        <Text size="sm" className={textColor}>
                          {bullet}
                        </Text>
                      </List.Item>
                    ))}
                  </List>
                </MotionSettings>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </MotionSettings>
    </Stack>
  );
}
