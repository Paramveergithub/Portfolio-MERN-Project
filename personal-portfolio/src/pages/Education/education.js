import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from 'react-icons/io5';
import './education.css';
import College_ID_Card from '../../assets/docs/College_ID_Card.pdf';
import MERN_Cert from '../../assets/docs/Certificate.pdf';
import ITI_certi from '../../assets/docs/ITI_certi.pdf';


const education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-5 mb-3 text-center">EDUCATION DETAILS</h2>
        <hr />
        <VerticalTimeline lineColor='black' className='vertical-timeline'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(239, 212, 177)", color: "black" }}
            contentArrowStyle={{ borderRight: "20px solid rgb(239, 212, 177)" }}
            date="2024 - 2027"
            iconStyle={{ background: "black", color: "#09e5da" }}
            icon={<IoSchool />}
          >
            <h4 className="vertical-timeline-element-title">BCA</h4>
            <h5 className="vertical-timeline-element-subtitle">
              Uttaranchal University, IN
              <a className='show' href={College_ID_Card}>View</a>
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(239, 212, 177)", color: "black" }}
            contentArrowStyle={{ borderRight: "20px solid rgb(239, 212, 177)" }}
            date="Dec, 2022 - March, 2024"
            iconStyle={{ background: "black", color: "#09e5da" }}
            icon={<IoSchool />}
          >
            <h4 className="vertical-timeline-element-title">Fullstack MERN Development</h4>
            <h5 className="vertical-timeline-element-subtitle">
              Coding Blocks pvt. ltd, IN
              <a className='show' href={MERN_Cert}>View</a>
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(239, 212, 177)", color: "black" }}
            contentArrowStyle={{ borderRight: "20px solid rgb(239, 212, 177)" }}
            date="Aug, 2021 - July, 2022"
            iconStyle={{ background: "black", color: "#09e5da" }}
            icon={<IoSchool />}
          >
            <h4 className="vertical-timeline-element-title">ITI COPA</h4>
            <h5 className="vertical-timeline-element-subtitle">
              National Trade Certificate, IN
              <a className='show' href={ITI_certi}>View</a>
            </h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default education;