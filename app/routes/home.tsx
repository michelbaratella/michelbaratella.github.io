import myMarkdownFile from "../assets/curriculum.md?raw";
import Card from "~/components/Card";
import DefaultPageAnimation from "~/components/DefaultPageAnimation";
import GreetingSection from "~/components/GreetingSection/GreetingSection";
import ProfessionalTimeline from "~/components/ProfessionalTimeline/ProfessionalTimeline";

import { formatFileForRendering, getSectionKey } from "~/utils/helpers";

export default function Home() {
  const formattedFile = formatFileForRendering(myMarkdownFile);

  const renderSection = formattedFile.map((section, index) => {
    const sectionKey = getSectionKey(section.body, index);
    if (index === 0) {
      return <GreetingSection section={section} key={sectionKey} />;
    }
    if (index === 3) {
      return (
        <div className="my-[25vh]" key={sectionKey}>
          <ProfessionalTimeline section={section} key={sectionKey} />
        </div>
      );
    }
    return <Card section={section} index={index} key={sectionKey} />;
  });

  return (
    <DefaultPageAnimation>
      <div className="flex flex-col">
        {renderSection}
        <div className="w-full h-[35vh] flex flex-col justify-end">
          <p className="text-gray-600 text-center text-sm">
            made by @michelbaratella
          </p>
        </div>
      </div>
    </DefaultPageAnimation>
  );
}
