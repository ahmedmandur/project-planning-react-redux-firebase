import React from 'react';
import moment from 'moment';

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Notifications</div>
          <ul className="notifications">
            {notifications ? (
              notifications.map(a => {
                return (
                  <li key={a.id}>
                    <span className="pink-text">{a.user} </span>
                    <span>{a.content}</span>
                    <div className="grey-text note-date">
                      {moment(a.time.toDate()).format('DD/MM/YYYY hh:mm A')}
                    </div>
                  </li>
                );
              })
            ) : (
              <li>No notifications to display</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
