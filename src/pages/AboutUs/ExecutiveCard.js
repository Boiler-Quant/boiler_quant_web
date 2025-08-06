const ExecutiveCard = ({ exec, index }) => {
  return (
    <div key={index} className={`flex flex-col mx-auto justify-between w-full`}>
      {/* Name and Position */}
      <div className="section-1">
        <h3 className="text-heading-sm font-bold font-catchy mb-1">
          {exec["fields"]["Full Name"]}
        </h3>
        <p className="text-body-md font-semibold font-catchy">
          {exec["fields"]["Role"]}
        </p>
      </div>

      {/* Image */}
      <div className="section-2">
        <hr className="my-2 border-gray-900 opacity-30" />

        <div
          className="mx-auto mb-4 px-2 w-full"
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
        <p className="text-body-md font-semibold font-catchy mb-2">
          {exec["fields"]["Major"]}
        </p>
        <p className="text-body-md font-catchy mb-2">
          Interests: {exec["fields"]["Interests"]}
        </p>
        <a
          href={exec["fields"]["LinkedIn"]}
          className="text-blue-400 hover:underline text-body-sm cursor-pointer font-catchy"
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
