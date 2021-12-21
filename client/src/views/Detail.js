import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail = (props) => {
    const [people, setPeople] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPeople({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <h1>{people.title}</h1>
            <p>Price: $ {people.price}</p>
            <p>Description: {people.description}</p>
        </div>
    )
}
export default Detail;

