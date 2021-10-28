import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/Group 1329.png';

const SingleEvent = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const [event, setEvent] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();

    const url = `https://safe-everglades-72679.herokuapp.com/event/${id}`;

    useState( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setEvent(data));
    }, []);

    const onSubmit = data => {
        data.img = event.img;
        fetch('https://safe-everglades-72679.herokuapp.com/setevent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                reset();
                alert('Successfully added your event')
                history.push('/')
            }
        })
    };
    
    return (
        <div className="container d-flex justify-content-center my-5">
            <div>
                <div>
                    <img className="w-50" src={logo} alt="" />
                </div>
                <Form  onSubmit={handleSubmit(onSubmit)} className="w-75 mt-4 mx-auto">
                    <h1 className="text-center">Register as a Volunteer</h1>
                    <Form.Group className="my-3 text-start">
                        <Form.Label className="">Name</Form.Label>
                        <Form.Control defaultValue={user.displayName} type="text" placeholder="Enter your name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </Form.Group>
                    <Form.Group className="my-3 text-start">
                        <Form.Label className="">Email</Form.Label>
                        <Form.Control defaultValue={user.email} type="text" placeholder="Enter your Email" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </Form.Group>
                    <Form.Group className="my-3 text-start">
                        <Form.Label className="">Date</Form.Label>
                        <Form.Control type="date" {...register("date", { required: true })} />
                        {errors.date && <span className="text-danger">This field is required</span>}
                    </Form.Group>
                    <Form.Group className="my-3 text-start">
                        <Form.Label className="">Desicription</Form.Label>
                        <Form.Control type="text" placeholder="Desicription" {...register("desicription")} />
                    </Form.Group>
                    <Form.Group className="my-3 text-start">
                        <Form.Label className="">Event name</Form.Label>
                        <Form.Control type="text" defaultValue={event.name} placeholder="Event name" {...register("event", { required: true })} />
                        {errors.event && <span className="text-danger">This field is required</span>}
                    </Form.Group>

                    <Button variant="primary" type="submit">Register</Button>
                </Form>
            </div>
        </div>
    );
};

export default SingleEvent;