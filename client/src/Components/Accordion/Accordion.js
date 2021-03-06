import React from "react";
import StatusOpen from "../Images/project-open.svg";
import StatusNew from "../Images/project-accepting-new.svg";
import StatusDev from "../Images/project-in-development.png";
import StatusCompleted from "../Images/project-completed.svg";
export default function Accordion({ project, children }) {
  const [isOpen, setOpen] = React.useState(false);
  const getStatusImage = (status) => {
    let statusImage = "";
    let statusText = "";
    switch (status) {
      case "open vote":
        statusImage = StatusOpen;
        statusText = "Open Vote";
        break;
      case "sign up":
        statusImage = StatusNew;
        statusText = "Sign Up";
        break;
      case "active":
        statusImage = StatusDev;
        statusText = "Active";
        break;
      case "completed":
        statusImage = StatusCompleted;
        statusText = "Completed";
        break;
      default:
        statusImage = "";
        break;
    }
    return (
      <>
        <img src={statusImage} alt={statusText} />
        {statusText}
      </>
    );
  };
  // ClassNames
  let titleOpen = isOpen ? "open" : "";
  let projectDev =
    project.status === "active" ? "accordion__title-project-dev" : "";
  let projectComplete =
    project.status === "completed" ? "accordion__title-project-complete" : "";
    
  return (
    <div className="accordion__wrapper">
      <div
        className={`
        accordion__title ${titleOpen} 
        ${projectDev}
        ${projectComplete}
        `}
        onClick={() => setOpen(!isOpen)}
      >
        <div>
          <div>
            Project:{" "}
            <span className="accordion__title-project">
              {project.project_name}
            </span>
          </div>
          <div className="accordion__title-status">
            <span className="accordion__title-status-title">Status</span>
            {"\u00a0"} {getStatusImage(project.status)}
          </div>
        </div>
        <div className="accordion__title-more">More Details{"\u00a0"}</div>
      </div>
      <div className={`accordion__item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
}
