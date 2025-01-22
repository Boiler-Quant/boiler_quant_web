const ExecutiveCard = ({ exec, index }) => {
  return (
    <div key={index} className={`flex flex-col mx-auto justify-between w-full`}>
      {/* Name and Position */}
      <div className="section-1">
        <h3 className="text-r-base font-bold font-frank pb-r-0-5">
          {exec["fields"]["Full Name"]}
        </h3>
        <p className="text-r-sm font-semibold font-frank">
          {exec["fields"]["Role"]}
        </p>
      </div>

      {/* Image */}
      <div className="section-2">
        <hr className="my-r-1 border-gray-900 opacity-30" />

        <div
          className="mx-auto my-r-1 px-r-1 w-full"
          style={{
            aspectRatio: "1/1",
            backgroundImage: `url(${exec["fields"]["Photo"][0]["url"]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Description */}
      <div className="section-3">
        <p className="text-r-sm font-semibold font-serif mb-r-1 ">
          {exec["fields"]["Major"]}
        </p>
        <p className="text-r-sm font-serif mb-r-1">
          Interests: {exec["fields"]["Interests"]}
        </p>
        <a
          href={exec["fields"]["LinkedIn"]}
          className="text-blue-400 hover:underline text-r-sm cursor-pointer"
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
