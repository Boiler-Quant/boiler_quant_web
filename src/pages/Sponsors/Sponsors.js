import { useTheme } from "../../theme-context";

const Sponsors = () => {
  const theme = useTheme();

  return (
    <>
      <div className={`${theme.dust} text-black section-container-sm`}>
        <div className="container-responsive mt-6">
          <h2 className="section-title font-frank">Sponsors</h2>
          <div className="flex flex-col items-center space-y-responsive">
            <img
              src="/old_mission_logo.png"
              alt="Old Mission"
              className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto object-contain"
            />
            <img
              src="/peak6_logo.png"
              alt="Peak 6"
              className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div
        className={`section-container ${theme.background} ${theme.text_white}`}
      >
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-heading-lg font-frank font-bold mb-section-sm">
            Partner with Boiler Quant
          </h1>
          <p className="text-body-lg font-serif mb-section-sm">
            Support the next generation of quant finance talent at Purdue.
          </p>
        </div>

        {/* Why Sponsor Us and What We Offer Sponsors */}
        <div className="max-w-3xl mx-auto mt-12 space-y-responsive-sm">
          <h2 className="text-heading-md font-bold font-frank mb-section-sm text-left">
            Why Sponsor Us
          </h2>
          <ul className="list-disc list-inside text-body-md font-serif space-y-responsive-sm text-left">
            <li>
              Access to top talent in computer science, statistics, math, and
              finance
            </li>
            <li>Brand exposure on campus and social platforms</li>
            <li>Exclusive recruiting and networking opportunities</li>
          </ul>

          <h2 className="text-heading-md font-bold font-frank mb-section-sm text-left">
            What We Offer Sponsors
          </h2>
          <ul className="list-disc list-inside text-body-md font-serif space-y-responsive-sm text-left">
            <li>Resume book access and recruiting sessions</li>
            <li>Brand visibility on our website, shirts, and events</li>
            <li>Opportunities to sponsor projects or host events</li>
          </ul>
          <p className="italic text-body-sm text-white/70 text-left">
            Full tier benefits are shared upon request.
          </p>
        </div>

        {/* Project Highlights */}
        {/* <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-heading-md font-bold font-frank mb-section-sm text-left">
          Spring 2025 Project Highlights
        </h2>
        <ul className="list-disc list-inside text-body-md font-serif space-y-responsive-sm text-left">
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
        <p className="italic text-body-sm text-white/70 mt-2 text-left">
          Full project list available in the sponsorship package.
        </p>
      </div> */}

        {/* Contact CTA */}
        <div className="text-center mt-20">
          <p className="text-body-lg font-bold">
            Interested in Sponsoring? Email us at{" "}
            <a href="mailto:boilerquant@gmail.com" className="underline">
              boilerquant@gmail.com
            </a>
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 text-body-sm text-white/70 font-serif">
          <p>Email: boilerquant@gmail.com</p>
          <p>Website: https://www.boilerquant.com</p>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
