import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const PersonList = (props) => {
    const { removeFromDom, people} = props;
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                people.map((person, index) => {
                return (
                    <div key={index}>
                        <Link to={"/people/" + person._id}>
                            {person.title}
                        </Link>
                        |
                        <Link to={"/people/" + person._id + "/edit"}>
                           Edit
                        </Link>
                        |
                        <button onClick={(e)=>{deletePerson(person._id)}}>
                            Delete
                        </button>
                    </div>
    )})
            }
        </div>
    )
}
export default PersonList;



