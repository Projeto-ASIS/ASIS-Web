import React from 'react';
import './Summary.css';

function Summary({ appointments }) {
  return (
    <div className="summary-container">
      <h2 className='text-blue'>Sumário</h2>
      <div className="appointments-list">
        {appointments.map((appoinments, index) => (
          <div key={index} className="appoinments-row">
            <div className={`${appoinments.color}`}></div>
            <div className="appoinments-info">
              <div className="appoinments-type">{appoinments.type}</div>
              <div className="appoinments-location">{appoinments.location}</div>
            </div>
            <div className={`appoinments-status ${appoinments.status.toLowerCase()}`}>
              {appoinments.status}
            </div>
            <div className="appoinments-date">{`${appoinments.day}/02/2025`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summary;