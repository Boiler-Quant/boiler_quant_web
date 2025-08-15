import { Link } from "react-router-dom";
import { useTheme } from "../../theme-context";

const HighlightGroup = () => {
  const theme = useTheme();

  return (
    <section className="section-container bg-white">
      <h2 className="text-heading-sm xl:text-heading-md font-bold font-frank mb-section-sm text-center">
        Spring 2025 Highlights
      </h2>
      <div className="section-content px-8 xl:px-12">
        <Highlight
          theme={theme}
          image="/2025_spring/chicago_trek.jpeg"
          title="Chicago Office Tours"
          content="We visited Old Mission, Akuna Capital, PEAK6, and Gelber Group LLC during our Spring 2025 Trek, exploring options theory, trading simulations, and each firm’s unique culture."
        />
        {/* Highlight 2 */}
        <Highlight
          theme={theme}
          image="/2025_spring/poker_tournament.jpeg"
          title="Poker Tournament"
          content="We hosted a weekend poker tournament and other games like trading simulations and the Estimathon to sharpen strategic thinking and decision-making."
          reverse
        />
        {/* Highlight 3 */}
        <Highlight
          theme={theme}
          image="/2025_spring/jeremy_wien.jpeg"
          title="Guest Speaker Session"
          content="Welcomed Jeremy Wien, poker player and quant trader, for insights on career, strategy, and high-stakes decision-making."
        />
      </div>

      {/* Spring 2025 Projects Call-to-Action */}
      <div className="text-center mt-8 xl:mt-12">
        <p className="text-body-sm xl:text-body-md font-serif text-gray-600 mb-4 xl:mb-6">
          Want to see more of what we accomplished this semester?
        </p>
        <Link
          to="/projects"
          className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-body-sm xl:text-body-md font-semibold py-2 xl:py-3 px-4 xl:px-6 rounded-lg transition-colors`}
        >
          Check Out Our Spring 2025 Projects!
        </Link>
      </div>
    </section>
  );
};

const Highlight = ({ theme, image, title, content, reverse, button }) => {
  return (
    <div
      className={`card-container ${
        reverse ? "flex-responsive-reverse" : "flex-responsive"
      }`}
    >
      <div className="flex-1">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        {button ? (
          <div className="flex justify-center">
            <Link
              to="/projects"
              className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-body-xs xl:text-body-sm font-semibold py-1.5 xl:py-2 px-3 xl:px-4 rounded-lg transition-colors`}
            >
              Learn More
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HighlightGroup;
