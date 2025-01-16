import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const events = [
  {
    date: "1/19",
    title: "APPLICATIONS OPEN",
    time: "@ 11:59 PM",
  },
  {
    date: "1/22",
    title: "FIRST CALLOUT",
    time: "@ 7:30PM RAWL 1062",
  },
  {
    date: "1/24",
    title: "SECOND CALLOUT",
    time: "@ 7:30PM RAWL 1062",
  },
  {
    date: "1/25",
    title: "APPLICATIONS DUE",
    time: "@ 11:59 PM",
  },
  {
    date: "1/28",
    title: "INTERVIEWS BEGIN",
    time: "",
  },
];

export default function AlternateTimeline() {
  return (
    <Timeline position="alternate" className="w-full lg:space-y-8">
      {events.map((event, index) => (
        <TimelineItem key={index} className="w-full">
          <TimelineSeparator>
            <TimelineDot className="size-2 lg:size-10" />
            {index < events.length - 1 && (
              <TimelineConnector className="h-4 sm:border-2 lg:h-20" />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <div className="flex items-start">
              {/* Horizontal Line */}
              {index % 2 === 0 && (
                <hr className="hidden sm:block w-10 mt-3 lg:w-16 lg:mt-5 border-gray-100 border-t-2 " />
              )}

              {/* Content */}
              <div
                className={`px-1 sm:px-3 lg:px-5 ${
                  index % 2 === 1 ? "ml-auto text-right" : ""
                }`}
              >
                <h1 className="text-base sm:text-xl lg:text-4xl lg:pb-2">
                  {event.date}
                </h1>
                <p className="text-xs sm:text-base lg:text-xl">{event.title}</p>
                <p className="text-xs sm:text-base lg:text-xl">{event.time}</p>
              </div>

              {index % 2 === 1 && (
                <hr className="hidden sm:block w-10 mt-3 lg:w-16 lg:mt-5 border-gray-100 border-t-2 " />
              )}
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
