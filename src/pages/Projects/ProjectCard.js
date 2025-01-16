import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { useTheme } from "../../theme-context";

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        onClick={handleExpandClick}
        sx={{
          cursor: "pointer",
          position: "relative",
          backgroundColor: "transparent",
          border: "1px solid white",
        }}
        className="!text-white"
      >
        <CardContent>
          <h2 className="text-xl py-2 lg:text-4xl lg:py-4 font-frank font-bold">
            {project["fields"]["Title"]}
            <a
              href={project["fields"]["GitHub"]}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <GitHubIcon sx={{ fontSize: "1.5rem", color: "white" }} />
            </a>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project["fields"]["Tags"].map((tag, index) => (
              <span
                key={index}
                className={`text-xs lg:text-sm px-3 py-1 rounded-full ${theme.dust} ${theme.text_black}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm lg:text-2xl font-serif py-2">
            {project["fields"]["Summary"]}
          </p>
          <p className="text-xs py-1 lg:text-lg sm:py-2 font-serif">
            Contributors: {project["fields"]["Contributors"]}
          </p>
          <IconButton
            sx={{
              visibility: "hidden",
              position: "absolute",
              top: "16px",
              right: "16px",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
            disableRipple
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardContent>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          </CardContent>
        </Collapse> */}
      </Card>
    </Box>
  );
};

export default ProjectCard;
