// Write a Form with Two Input Fields. 
import React,{useState} from 'react'; 

function Form()
{
    const [inputs,setInputs] = useState({});

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Enter your Name: 
                <input type="text" name="username" value={inputs.username||""} onChange={handleChange} />
            </label>

            <label>
                Enter your Age: 
                <input type="number" name="age" value={inputs.age || ''} onChange = {handleChange} />
            </label>

            <label>
                <input type="submit" />
            </label>
        </form>
    )

}

export default Form;