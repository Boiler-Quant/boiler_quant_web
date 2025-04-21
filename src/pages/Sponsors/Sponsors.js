import { useTheme } from "../../theme-context";

const Sponsors = () => {
  const theme = useTheme();

  return (
    <>
      <div className={`${theme.dust} text-black py-12`}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 mt-6 lg:mt-24 ">
          <h2 className="text-2xl lg:text-3xl font-bold font-frank text-center mb-8">
            Sponsored by Old Mission
          </h2>
          <img
            src="/old_mission_logo.png"
            alt="Old Mission"
            className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto mx-auto object-contain"
          />
        </div>
      </div>

      <div
        className={`py-16 px-6 lg:pb-40 lg:px-10 ${theme.background} ${theme.text_white}`}
      >
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl lg:text-5xl font-frank font-bold mb-4">
            Partner with Boiler Quant
          </h1>
          <p className="text-md lg:text-xl font-serif mb-8">
            Support the next generation of quant finance talent at Purdue.
          </p>
        </div>

        {/* Why Sponsor Us */}
        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          <h2 className="text-xl lg:text-3xl font-bold font-frank mb-4">
            Why Sponsor Us
          </h2>
          <ul className="list-disc list-inside text-md lg:text-lg font-serif space-y-2">
            <li>Access to top talent in quantitative finance and CS</li>
            <li>Brand exposure on campus and social platforms</li>
            <li>Exclusive recruiting and networking opportunities</li>
          </ul>
        </div>

        {/* What We Offer */}
        <div className="max-w-3xl mx-auto mt-16 space-y-4">
          <h2 className="text-xl lg:text-3xl font-bold font-frank mb-4">
            What We Offer Sponsors
          </h2>
          <ul className="list-disc list-inside text-md lg:text-lg font-serif space-y-2">
            <li>Resume book access and recruiting sessions</li>
            <li>Brand visibility on our website, shirts, and events</li>
            <li>Opportunities to sponsor projects or host events</li>
          </ul>
          <p className="italic text-base text-white/70">
            Full tier benefits are shared upon request.
          </p>
        </div>

        {/* Project Highlights */}
        {/* <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl lg:text-3xl font-bold font-frank mb-4">
          Spring 2025 Project Highlights
        </h2>
        <ul className="list-disc list-inside text-lg font-serif space-y-2">
          <li>
            <strong>FPGA Options Engine</strong> – ultra-low latency options
            pricing on hardware
          </li>
          <li>
            <strong>ML Sentiment Analysis</strong> – trading signals from news &
            social data
          </li>
          <li>
            <strong>Crypto Arbitrage</strong> – real-time triangular arbitrage
            on Binance
          </li>
        </ul>
        <p className="italic text-base text-white/70 mt-2">
          Full project list available in the sponsorship package.
        </p>
      </div> */}

        {/* Contact CTA */}
        <div className="text-center mt-20">
          <p className="text-lg font-bold">
            Interested in Sponsoring? Email us at{" "}
            <a href="mailto:boilerquant@gmail.com" className="underline">
              boilerquant@gmail.com
            </a>
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 text-sm text-white/70 font-serif">
          <p>Email: boilerquant@gmail.com</p>
          <p>Website: https://www.boilerquant.com</p>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
