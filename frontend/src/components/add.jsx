import { useState } from 'react'
import './add.css'

export function AddCard() {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [interests, setInterests] = useState([]);
    const [linkedin, setLinkedIn] = useState("");
    const [x, setX] = useState("");

    const handler = (e) => {
        const value = e.target.value;
        const array = value.split(",");
        setInterests(array);
    }
    
    return <div id='addcard'>
        <h1>Input your details</h1>
        <input type='text' placeholder='Name' onChange={function(e){
            const value = e.target.value;
            setName(e.target.value);
        }}></input>
        <input type='text' placeholder='Bio'onChange={function(e){
            const value = e.target.value;
            setBio(e.target.value);
        }}></input>
        <input type='text' placeholder='Comma seperated Interests'onChange={handler}></input>
        <input type='text' placeholder='LinkedIn Link'onChange={function(e){
            const value = e.target.value;
            setLinkedIn(e.target.value);
        }}></input>
        <input type='text' placeholder='X Link'onChange={function(e){
            const value = e.target.value;
            setX(e.target.value);
        }}></input>
        <button className='addButton' onClick={() =>{
            fetch("http://localhost:3000/add-team", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    bio,
                    interests,
                    linkedin,
                    x
                }),
                headers:{
                    "Content-type": "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("User added");
                })
        }}>Add card</button>
    </div>
}