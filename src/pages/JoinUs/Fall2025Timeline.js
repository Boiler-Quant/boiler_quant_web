import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const events = [
  {
    date: "8/24",
    title: "APPLICATIONS OPEN",
    time: "@ 11:59 PM",
  },
  {
    date: "8/28",
    title: "FIRST CALLOUT",
    time: "@ 7:30 PM RAWL 2082",
  },
  {
    date: "9/2",
    title: "SECOND CALLOUT",
    time: "@ 7:30 PM RAWL 2082",
  },
  {
    date: "9/6",
    title: "APPLICATIONS DUE",
    time: "@ 11:59 PM",
  },
  {
    date: "9/9",
    title: "INTERVIEWS BEGIN",
    time: "",
  },
  {
    date: "9/12",
    title: "DECISIONS ANNOUNCEMENT",
    time: "",
  },
];

export default function Fall2025Timeline() {
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
                <h1 className="text-heading-sm lg:text-heading-lg lg:pb-2">
                  {event.date}
                </h1>
                <p className="text-body-sm lg:text-body-lg">{event.title}</p>
                <p className="text-body-sm lg:text-body-lg">{event.time}</p>
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
