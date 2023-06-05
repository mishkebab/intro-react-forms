import { useState } from "react";
import { useEffect } from "react";


const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        bio: "",
    })

    const [errors, setErrors] = useState([])

    const numbers = "0123456789"

    const validate = () => {
        let errors = [];
        // console.log(user)
        // console.log(user.name)
        // console.log(user.email)
        console.log(user.phoneNumber)
        if(user.name.length === 0){
            errors.push("Name can't be blank")
        }
        if(!user.email.includes("@")){
            errors.push("Email is invalid")
        }
        if(user.phoneNumber.length === 0){
            errors.push("No phone number provided")
        }
        for (let i = 0; i < user.phoneNumber.length; i++) {
            const num = user.phoneNumber[i];
            console.log(num)
            if(!numbers.includes(num)){
                console.log("not a number")
                errors.push("Phone # can only include numbers")
                break
            }
        }
        if(user.bio.length > 280){
            errors.push("Bio is too long")
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate();

        if (errors.length > 0) {
            setErrors(errors);
        }
    }

    const showErrors = () => {
        if (!errors.length) {
            return null
        }
        return (
            <ul>
                {errors.map(err => <li>{err}</li>)}
            </ul>
        )
    }

    const handleChange = (field) => {
        return (e) => {
            setUser({...user, [field]: e.target.value})
        }
    } 

    return (
        <>
            <h1>Sign Up</h1>
            {showErrors()}
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" onChange={handleChange("name")} value={user.name}/>
                </label>
                <br/>
                <label>Email:
                    <input type="text" onChange={handleChange("email")} value={user.email}/>
                </label>
                <br/>
                <label>Phone Number:
                    <input type="text" onChange={handleChange("phoneNumber")} value={user.phoneNumber}/>
                </label>
                <br/>
                <label>Phone Type
                    <select>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </label>
                <br/>
                <p>Staff</p>
                <input type="radio" id="instructor"/>
                <label>Instructor</label>
                <input type="radio" id="student"/>
                <label>Student</label>
                <br/>
                <h3>Bio</h3>
                <textarea name="" id="" cols="30" rows="10" onChange={handleChange("bio")} value={user.bio}></textarea>
                <p>Sign up for Email Notifications</p>
                <input type="checkbox" />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form