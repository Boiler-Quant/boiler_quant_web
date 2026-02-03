const ExecutiveCard = ({ exec, index, compact = false }) => {
  const section1Class = compact ? "" : "section-1";
  const section2Class = compact ? "" : "section-2";
  const section3Class = compact ? "" : "section-3";

  return (
    <div key={index} className={`flex flex-col mx-auto justify-between w-full`}>
      {/* Name and Position */}
      <div className={section1Class}>
        <h3
          className={`font-bold font-catchy mb-1 ${
            compact
              ? "text-body-lg xl:text-body-xl leading-tight min-h-[5rem]"
              : "text-heading-sm"
          }`}
        >
          {exec["Full Name"]}
        </h3>
        <p
          className={`font-semibold font-catchy ${
            compact
              ? "text-body-sm xl:text-body-md leading-tight h-[3.25rem]"
              : "text-body-md"
          }`}
        >
          {exec["Role"]}
        </p>
      </div>

      {/* Image */}
      <div className={section2Class}>
        <hr className={`${compact ? "my-1" : "my-2"} border-gray-900 opacity-30`} />

        <div
          className={`mx-auto ${compact ? "mb-2 px-1" : "mb-4 px-2"} w-full`}
          style={{
            aspectRatio: "1/1",
            backgroundImage: `url(${exec["Photo"]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Description */}
      <div className={section3Class}>
        <p
          className={`font-semibold font-catchy mb-2 ${
            compact ? "text-body-sm xl:text-body-md" : "text-body-md"
          }`}
        >
          {exec["Major"]}
        </p>
        <p className={`${compact ? "text-body-sm" : "text-body-md"} font-catchy mb-2`}>
          Interests: {exec["Interests"]}
        </p>
        <a
          href={exec["LinkedIn"]}
          className={`text-blue-400 hover:underline cursor-pointer font-catchy ${
            compact ? "text-body-xs xl:text-body-sm" : "text-body-sm"
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ExecutiveCard;
