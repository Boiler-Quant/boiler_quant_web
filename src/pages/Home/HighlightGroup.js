import { Link } from "react-router-dom";
import { useTheme } from "../../theme-context";

const HighlightGroup = () => {
  const theme = useTheme();

  return (
    <section className="py-r-10 px-r-5 flex flex-col items-center bg-white">
      <h2 className="text-r-lg font-bold mb-r-3 font-frank">
        Fall `24 Highlights
      </h2>
      <div className="container space-r-y-4">
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
          content="On our Chicago Trek, we were fortune to visit Old Mission, WH Trading, Belvedere, and Akuna Capital."
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
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-r-2`}
    >
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="highlight-image rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 space-r-y-1">
        <h3 className="text-r-base-4xl font-semibold font-frank">{title}</h3>
        <p className="text-r-sm-3xl font-serif">{content}</p>
        {button ? (
          <div className="flex justify-center">
            <Link
              to="/projects"
              className={`inline-block ${theme.dust} ${theme.text_black} ${theme.hover_dust} text-r-sm font-semibold py-r-1 px-r-2 rounded-lg transition-colors`}
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
