import React from "react";
import "./TechStack.css";
import { techStackList } from "../../utility/techStackList";

import RubberBand from "react-reveal/RubberBand";
import Spin from "react-reveal/Spin";

const TechStack = () => {
  return (
    <div className="skills" id="skills">
      <div className="techstack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center">TECHNOLOGIES STACK</h2>
          <hr />
          <p className="pb-3 text-center">
            👉 Including programming languages, frameworks, databases, front-end
            and back-end tools, and APIs
          </p>
        </RubberBand>
      </div>
      <div className="row">
        {techStackList.map((tech, index) => (
          <Spin key={index}>
            <div
              key={tech._id}
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            >
              <div className="card m-1 ">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="alig-self-center">
                      <tech.icon className="tech-icon" />
                    </div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Spin>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
