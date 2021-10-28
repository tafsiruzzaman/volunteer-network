import React from 'react';
import { Button } from 'react-bootstrap';

const UserEvent = (props) => {
    const {img, event, date, _id} = props.event;
    const {handleDeleteEvent} = props;
    
    return (
        <div className="col-md-6">
            <div className="row">
                <div className="col-6">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-6 my-auto">
                    <div className="text-start">
                        <h2>{event}</h2>
                        <h5 className="mt-2">Date: {date}</h5>
                        <Button onClick={() => handleDeleteEvent(_id)} variant="info text-white px-5 mt-md-3 mt-lg-5">Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserEvent;