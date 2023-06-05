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

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        bio: "",
    })

    const numbers = "0123456789"

    const validate = () => {
        let errorsObj = {};
        
        
        if(user.name.length === 0){
            // console.log('invalid name');
            // setErrors({...errors, name: "Name can't be blank"});
            // console.log(errors['name']);
            errorsObj.name = "Name can't be blank";
        }
        if(!user.email.includes("@")){
            // setErrors({...errors, email: "Email is invalid"});
            // errors.email = "Email is invalid";
            errorsObj.email = "Email is invalid";
        }
        if(user.phoneNumber.length === 0){
            // setErrors({...errors, phoneNumber: "No phone number provided"});
            // errors.phoneNumber = "No phone number provided";
            errorsObj.phoneNumber = "No phone number provided";
        }
        for (let i = 0; i < user.phoneNumber.length; i++) {
            const num = user.phoneNumber[i];
            
            if(!numbers.includes(num)){
                // setErrors({...errors, phoneNumber: "Phone # can only include numbers"});
                // errors.phoneNumber = "Phone # can only include numbers";
                errorsObj.phoneNumber = "Phone # can only include numbers";
                break
            }
        }
        if(user.bio.length > 280){
            // setErrors({...errors, bio: "Bio is too long"});
            errorsObj.bio = "Bio is too long";
            // errorsObj.phoneNumber = "Phone # can only include numbers";
        }
        return errorsObj;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let err = validate();
        setErrors(err);
    }

    // const showErrors = () => {
    //     console.log(errors);
    //     if (!errors.length) {
    //         return null
    //     }
    //     return (
    //         <ul>
    //             {errors.map(err => <li>{err}</li>)}
    //         </ul>
    //     )
    // }

    const handleChange = (field) => {
        return (e) => {
            setUser({...user, [field]: e.target.value})
        }
    } 

    return (
        <>
            <h1>Sign Up</h1>
            {/* {showErrors()} */}
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" onChange={handleChange("name")} value={user.name}/>
                </label>
                {errors.name.length ? (<p>{errors.name}</p>) : null}
                {/* {errors.bio.length ? (<p>{errors.bio}</p>) : null} */}
                <br/>
                <label>Email:
                    <input type="text" onChange={handleChange("email")} value={user.email}/>
                </label>
                {errors.email.length ? (<p>{errors.email}</p>) : null}
                <br/>
                <label>Phone Number:
                    <input type="text" onChange={handleChange("phoneNumber")} value={user.phoneNumber}/>
                </label>
                {errors.phoneNumber.length ? (<p>{errors.phoneNumber}</p>) : null}
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