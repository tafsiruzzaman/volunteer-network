import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import UserEvent from '../UserEvent/UserEvent';

const UsersEvents = () => {
    const {user} = useAuth();
    const [events, setEvents] = useState([])
    const url = `https://safe-everglades-72679.herokuapp.com/userevents/${user.email}`;
    
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    const handleDeleteEvent = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://safe-everglades-72679.herokuapp.com/userevents/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUsers = events.filter(event => event._id !== id);
                    setEvents(remainingUsers);
                }
            });
        }
    }
    return (
        <div className="container my-5">
            <div className="row gy-4 gx-md-3 gx-lg-4">
                {
                    events.map(event => <UserEvent key={event._id} handleDeleteEvent={handleDeleteEvent} event={event}></UserEvent>)
                }
            </div>
        </div>
    );
};

export default UsersEvents;