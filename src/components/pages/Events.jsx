import {React, useState} from 'react';
import '../../App.css';
import {AnimatePresence, motion} from 'framer-motion';
import EventCalendar from '../EventCalendar';
import EventMap from '../EventMap';

function Events(){
    const [viewType, setViewType] = useState('calendar'); // 'calendar' or 'map'
    const [dataType, setDataType] = useState('upcoming'); // 'upcoming' or 'general'

    const handleViewChange = (e) => setViewType(e.target.value);
    const handleDataChange = (e) => setDataType(e.target.value);

    return (
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{
            type: "tween",
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.2
        }}
      >
        <div className="event-page-controls">
          <div className="radio-set">
            <label className="radio-label">
              <input
                type="radio"
                name="view"
                value="calendar"
                checked={viewType === 'calendar'}
                onChange={handleViewChange}
              />
              <span className="custom-radio" />
              Calendar
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="view"
                value="map"
                checked={viewType === 'map'}
                onChange={handleViewChange}
              />
              <span className="custom-radio" />
              Map
            </label>
          </div>

          <div className="radio-set">
            <label className="radio-label">
              <input
                type="radio"
                name="data"
                value="upcoming"
                checked={dataType === 'upcoming'}
                onChange={handleDataChange}
              />
              <span className="custom-radio" />
              Upcoming
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="data"
                value="general"
                checked={dataType === 'general'}
                onChange={handleDataChange}
              />
              <span className="custom-radio" />
              General
            </label>
          </div>
        </div>

        <div className="event-content">
          <AnimatePresence mode="wait">
            {viewType === 'calendar' ? (
              <motion.div
                key="calendar"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <EventCalendar dataType={dataType} />
              </motion.div>
            ) : (
              <motion.div
                key="map"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <EventMap dataType={dataType} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )
}

export default Events;