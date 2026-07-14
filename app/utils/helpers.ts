const HEADING_REGEX = /^#{1,6}[ \t]+([^\r\n]+)/m;

export function formatFileForRendering(file: string): SplitSection[] {
  const cleanedFile = file.replace(/^[ \t]*-{3,}[ \t]*$/gm, "");
  const sections = cleanedFile.split(/\n(?=##[ \t]+)/);
  const headerSplitSections = sections.map(splitHeaderAndContent);
  return headerSplitSections;
}

// Helper function to generate a stable slug from section content
export function getSectionKey(content: string, fallbackIndex: number): string {
  const headingMatch = HEADING_REGEX.exec(content);

  const heading = headingMatch?.[1];

  if (heading) {
    return headingMatch[1]
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  // Fallback: If no heading exists, use a safe slice of the text
  return `section-${fallbackIndex}-${content.slice(0, 15).trim().replace(/\s+/g, "-")}`;
}

// Matches a Level 2 header at the absolute start of the string
const LEVEL_2_HEADER_REGEX = /^##[ \t]+([^\r\n]+)/;

export interface SplitSection {
  header: {
    raw: string; // e.g. "## **Professional Experience**"
    title: string; // e.g. "**Professional Experience**"
    level: number;
  } | null;
  body: string; // Everything else (subheaders, descriptions, etc.)
}

export function splitHeaderAndContent(section: string): SplitSection {
  const trimmedSection = section.trim();
  const match = LEVEL_2_HEADER_REGEX.exec(trimmedSection);

  if (match) {
    const [fullHeader, title] = match;

    // Slice off the header line and trim the remainder
    const body = trimmedSection.slice(fullHeader.length).trim();

    return {
      header: {
        raw: fullHeader,
        title: title.trim(),
        level: 2,
      },
      body,
    };
  }

  // Fallback if the block doesn't start with a Level 2 header
  return {
    header: null,
    body: trimmedSection,
  };
}

interface WorkEvent {
  title: string; // e.g., "Senior Frontend Developer (Contracted to AB-InBev)"
  subtitle?: string; // e.g., "April 2025 – Present"
  bullets: string[]; // Array of achievement strings
}

interface CompanyTimeline {
  company: string; // e.g., "ACT Digital"
  events: WorkEvent[];
}

export function formatProfessionalTimeline({ body }: SplitSection) {
  const structuredData = adaptExperienceToTimeline(body);

  // Flattens the list so we have an absolute index for each role/event
  const flatEvents = structuredData.flatMap((companyData) =>
    companyData.events.map((event) => ({
      ...event,
      company: companyData.company,
    })),
  );

  return flatEvents;
}

function adaptExperienceToTimeline(bodyText: string): CompanyTimeline[] {
  const blocks = bodyText
    .split(/(?=###\s+)/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks
    .map(parseCompanyBlock)
    .filter((timeline): timeline is CompanyTimeline => timeline !== null);
}

function parseCompanyBlock(block: string): CompanyTimeline | null {
  const lines = block.split(/\r?\n/);
  const companyName = extractCompanyName(lines.shift() || "");

  if (!companyName) {
    return null;
  }

  const events = buildCompanyEvents(lines);
  return events.length > 0 ? { company: companyName, events } : null;
}

function extractCompanyName(companyHeaderLine: string): string {
  return companyHeaderLine
    .replace(/^###\s+/, "")
    .replaceAll(/\*\*/g, "")
    .trim();
}

function buildCompanyEvents(lines: string[]): WorkEvent[] {
  const events: WorkEvent[] = [];
  let currentEvent: WorkEvent | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (isRoleLine(trimmed)) {
      pushCurrentEvent(events, currentEvent);
      currentEvent = parseRoleLine(trimmed);
    } else if (isBulletLine(trimmed) && currentEvent) {
      currentEvent.bullets.push(parseBulletLine(trimmed));
    }
  }

  pushCurrentEvent(events, currentEvent);
  return events;
}

function isRoleLine(trimmed: string): boolean {
  return trimmed.startsWith("**") && trimmed.includes("|");
}

function isBulletLine(trimmed: string): boolean {
  return trimmed.startsWith("-");
}

function parseRoleLine(trimmed: string): WorkEvent {
  const [rolePart, datePart] = trimmed.split("|");
  const title = rolePart.replaceAll(/\*\*/g, "").trim();
  const subtitle = datePart?.replace(/[_*]/g, "").trim();

  return {
    title,
    subtitle: subtitle || undefined,
    bullets: [],
  };
}

function parseBulletLine(trimmed: string): string {
  return trimmed.replace(/^-\s+/, "").trim();
}

function pushCurrentEvent(events: WorkEvent[], currentEvent: WorkEvent | null) {
  if (currentEvent) {
    events.push(currentEvent);
  }
}

export const normalizeAndCreateKey = (text: string) => {
  return text.slice(0, 12).trim().replace(/\s+/g, "-");
};
