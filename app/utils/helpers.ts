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
  // 1. Split by '### ' to isolate each company block
  const companyBlocks = bodyText.split(/(?=###\s+)/);
  const timelineData: CompanyTimeline[] = [];

  for (const block of companyBlocks) {
    if (!block.trim()) continue;

    const lines = block.split(/\r?\n/);

    // Extract company name from the ### header (removing markdown formatting)
    const companyHeaderLine = lines.shift() || "";
    const companyName = companyHeaderLine
      .replace(/^###\s+/, "")
      .replace(/\*\*/g, "")
      .trim();

    const events: WorkEvent[] = [];
    let currentEvent: WorkEvent | null = null;

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      // Detect a Role Line: **Role Name** | _Date Range_
      if (trimmed.startsWith("**") && trimmed.includes("|")) {
        // Save the previous event if there was one
        if (currentEvent) {
          events.push(currentEvent);
        }

        const [rolePart, datePart] = trimmed.split("|");
        const title = rolePart.replace(/\*\*/g, "").trim();
        const subtitle = datePart
          ? datePart.replace(/[_*]/g, "").trim()
          : undefined;

        currentEvent = {
          title,
          subtitle,
          bullets: [],
        };
      }
      // Detect a Bullet Line: - bullet text
      else if (trimmed.startsWith("-") && currentEvent) {
        const bulletText = trimmed.replace(/^-\s+/, "").trim();
        currentEvent.bullets.push(bulletText);
      }
    }

    // Push the final event of the company block
    if (currentEvent) {
      events.push(currentEvent);
    }

    if (companyName && events.length > 0) {
      timelineData.push({
        company: companyName,
        events,
      });
    }
  }

  return timelineData;
}
