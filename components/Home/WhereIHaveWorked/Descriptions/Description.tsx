import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Description({tasks, dates, jobTitle, companyTitle}) {
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          {jobTitle} <span className="text-AAsecondary">@ {companyTitle}</span>
        </span>
        {/* Date */}
        <span className="font-mono text-sm text-gray-300">{dates[0] + " - " + dates[1]}</span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
      {tasks?.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-400 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
