import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const PlayerForm = () => {
    const [name, setName] = useState("");
    const [prefPos, setPrefPos] = useState("");
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', {
            name,
            prefPos
        })
            .then(response=>{
                console.log(response.data)
                navigate(`/players/list`);
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                };
                setErrors(errorArr);
            })
           // .then((response) => {
             //   if(response.data.errors) {
               //     console.log(response.data.errors);
                 //   setErrors(response.data.errors);

       //         } else {
         //           console.log(response.data);
           //         navigate(`/players/list`);
        //        }
          //  })
         //   .catch(err=>{
           //     console.log(err);
          //  })
            
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>
                    <label>Name</label>
                    <br/>
                    <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                
                </p>
                <p>
                    <label>Preferred Position</label>
                    <br/>
                    <input type="text" onChange = {(e)=>setPrefPos(e.target.value)}/>
                </p>
                <input type="submit" name="add"/>
            </form>
            </div>
    )
};

export default PlayerForm;