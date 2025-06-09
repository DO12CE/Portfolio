import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";

export const Skills = () => {
  const events = [
    { status: "DCG1 (Diplôme de Comptabilité et de Gestion)", date: "2018/2019", color: "#a7feb5" },
    { status: "Licence informatique (L2)", date: "2019/2022", color: "#a7feb5" },
    { status: "Médiateur Numérique", date: "2022/2023", color: "#a7feb5" },
    { status: "BTS SIO SLAM (Brevet de Technicien Supérieur , Services Informatiques aux Organisations , Solutions Logicielles et Applications Métiers)", date: "2023-2025", color: "#a7feb5" },
    { status: "Stage 1ère année - Golfy", date: "2023-2024", color: "#a7feb5" },
    { status: "Stage 2ème année - Infoboost", date: "2024-2025", color: "#a7feb5" },
    { status: "Bachelor/Licence Professionnelle alternance IA (Intelligence Artificielle)", date: "à venir", color: "#607D8B" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="skill-bx">
          <Typography variant="h4" align="center" className="skill-title">
            Mon parcours
          </Typography>
          <Timeline >
            {events.map((event, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  className="timeline-date"
                  align="right"
                  variant="body2"
                >
                  {event.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: event.color }} />
                  {index !== events.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" className="timeline-status">
                    {event.status}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  );
};