import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "1/19",
      title: "Applications Open",
      time: "@ 11:59 PM",
    },
    {
      date: "1/22",
      title: "First Callout",
      time: "7:30 PM RAWL 1062",
    },
    {
      date: "1/24",
      title: "Second Callout",
      time: "7:30 PM RAWL 1062",
    },
    {
      date: "1/25",
      title: "Applications Due",
      time: "@ 11:59 PM",
    },
    {
      date: "1/28",
      title: "Interviews Begin",
      time: "",
    },
  ];

  return (
    <div className="bg-black text-white p-8">
      <div className="flex flex-col items-center">
        {events.map((event, index) => (
          <div key={index} className="flex items-center">
            {/* Line and Circle */}
            <div className="flex flex-col items-center">
              {index !== 0 && <div className="h-10 w-1 bg-white"></div>}
              <div className="h-4 w-4 rounded-full bg-white"></div>
              {index !== events.length - 1 && (
                <div className="h-10 w-1 bg-white"></div>
              )}
            </div>

            {/* Event Box */}
            <div className="ml-4 mb-4">
              <div className="text-xl font-semibold">{event.date}</div>
              <div className="text-md">{event.title}</div>
              {event.time && <div className="text-sm">{event.time}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
