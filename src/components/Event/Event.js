import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Event = (props) => {
    const {name, img, bgColour, _id} = props.event;
    const history = useHistory();

    const handleOnClick = () => {
        history.push(`/event/${_id}`);
    }
    return (
        <div>
            <Col onClick={handleOnClick}>
                <Card style={{backgroundColor: `${bgColour}`}} className="rounded-3 border-0">
                    <Card.Img variant="top img-fluid rounded-3" src={img} />
                    <Card.Body>
                    <Card.Title className="text-white mt-lg-3"><h5>{name}</h5></Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Event;