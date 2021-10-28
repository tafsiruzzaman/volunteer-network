import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup, Row } from 'react-bootstrap';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);
    
    useEffect( () => {
        fetch('https://safe-everglades-72679.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, []);

    return (
        <div className="container my-5">
            <h1 className="fw-bolder">I GROW BY HELPING PEOPLE IN NEED.</h1>
            <InputGroup size="lg" className="my-4 w-75 mx-auto">
                <FormControl placeholder="Search..."/>
                <Button variant="primary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            <div>
            <Row xs={1} md={2} lg={4} className="gy-4 gx-md-2 gx-lg-4">
                {
                    events.map(event => <Event key={event._id} event={event}></Event>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Home;