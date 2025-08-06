import { Link } from "react-router-dom";
import { useTheme } from "../../theme-context";

const HighlightGroup = () => {
  const theme = useTheme();

  return (
    <section className="section-container bg-white">
      <h2 className="section-title">Fall `24 Highlights</h2>
      <div className="section-content">
        <Highlight
          theme={theme}
          image="/project_presentation_day.jpg"
          title="Project Presentation Day"
          content="This past semester we had 6 total projects, see more information below."
          button
        />
        {/* Highlight 2 */}
        <Highlight
          theme={theme}
          image="/chicago_office_tours.jpg"
          title="Chicago Office Tours"
          content="On our Chicago Trek, we were fortunate to visit Old Mission, WH Trading, Belvedere, and Akuna Capital."
          reverse
        />
        {/* Highlight 3 */}
        <Highlight
          theme={theme}
          image="/competitive_games.jpg"
          title="Competitive Games"
          content="Throughout the semester, we played various games to improve probabilistic thinking and decision making under uncertainty."
        />
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
              className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-body-sm font-semibold py-2 px-4 rounded-lg transition-colors`}
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
