import React from "react";
import { connect } from "react-redux";
const Notifications = props => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Notifications</div>
          <ul className="notifications">
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
