import type { SplitSection } from "~/utils/helpers";

export interface DefaultSectionProps {
  readonly section: SplitSection;
  readonly index?: number;
  readonly key: string;
}
