import "../app.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Form() {
    const navigate = useNavigate();
    //m-1
    interface FormData {
        firstName: string;
        lastName: string;
        email: string;
        contact: string;
        gender: 'Male' | 'Female' | 'Other';
        subject: string[];
        resume: File | null;
        url: string;
        choice: string;
        about: string;
    }

    function search(data: FormData) {
        localStorage.setItem('formData', JSON.stringify(data));
        navigate("/home");
    }

    //m-2
    const [data, setData] = useState<{
        firstName: string;
        lastName: string;
        email: string;
        contact: string;
        gender: string;
        subject: string[];
        resume: File | null;
        url: string;
        choice: string;
        about: string;
    }>({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        gender: "",
        subject: [],
        resume: null,
        url: "",
        choice: "",
        about: "",
    });

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setData((prevState) => {
            if (checked) {
                return {
                    ...prevState,
                    subject: [...prevState.subject, value]
                };
            } else {
                return {
                    ...prevState,
                    subject: prevState.subject.filter((subject) => subject !== value)
                };
            }
        });
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setData((prevState) => ({
            ...prevState,
            choice: value
        }));
    };

    return (
        <div className="bg-gray-200 pb-4">
            {/* <h1>{JSON.stringify(data)}</h1> */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const data: FormData = {
                        firstName: formData.get('firstName') as string,
                        lastName: formData.get('lastName') as string,
                        email: formData.get('email') as string,
                        contact: formData.get('contact') as string,
                        gender: formData.get('gender') as 'Male' | 'Female' | 'Other',
                        subject: formData.getAll('subject') as string[],
                        resume: formData.get('resume') as File | null,
                        url: formData.get('url') as string,
                        choice: formData.get('choice') as string,
                        about: formData.get('about') as string,
                    };
                    search(data);
                }}
                className="bg-white max-w-fit m-auto px-14 py-5 border-[1px] border-gray-500 rounded-lg">
                <fieldset className="indent-2 bg-white border-[2px] border-gray-500 rounded-lg overflow-hidden">
                <legend id="firstName" className="relative ">First Name<span>*</span></legend>
                    <input required type="text" id="firstName" name="firstName" onChange={onChangeHandler}/>
                </fieldset>
                <fieldset className="indent-2 bg-white border-[2px] border-gray-500 rounded-lg overflow-hidden">
                <legend id="lastName">Last Name<span>*</span></legend>
                <input required  type="text" id="lastName" name="lastName" onChange={onChangeHandler}/>
                </fieldset>

                <fieldset className="indent-2 bg-white border-[2px] border-gray-500 rounded-lg overflow-hidden">
                <legend id="email">Enter Email<span>*</span></legend>
                    <input required type="email" id="email" name="email" onChange={onChangeHandler} />
                </fieldset>

                <fieldset className="indent-2 bg-white border-[2px] border-gray-500 rounded-lg overflow-hidden">
                <legend id="contact">Contact<span>*</span></legend>
                    <input required type="phone" id="contact" name="contact" onChange={onChangeHandler} />
                </fieldset>
                
                <div>
                <label htmlFor="gender">Gender<span>*</span></label>
                    <input className="inline" required type="radio" id="male" name="gender" value="Male" onChange={onChangeHandler} />
                <label className="inline" htmlFor="male">Male</label>
                    <input className="inline" required type="radio" id="female" name="gender" value="Female" onChange={onChangeHandler} />
                <label className="inline" htmlFor="female">Female</label>  
                    <input className="inline" required type="radio" id="other" name="gender" value="Other" onChange={onChangeHandler} />
                <label className="inline" htmlFor="other">Other</label>    
                </div>
                
                <div>
                <label htmlFor="subject">Your best Subject/s<span>*</span></label>
                    <input className="inline" type="checkbox" id="maths" name="subject" value="Maths" onChange={handleCheckboxChange} />
                <label className="inline" htmlFor="maths">Maths</label>
                    <input className="inline" type="checkbox" id="physics" name="subject" value="physics" onChange={handleCheckboxChange} />
                <label className="inline" htmlFor="physics">physics</label>
                    <input className="inline" type="checkbox" id="english" name="subject" value="English" onChange={handleCheckboxChange} />
                <label className="inline" htmlFor="english">English</label>
                </div>
                
                <div>
                <label htmlFor="resume">Upload Resume</label>
                <input  type="file" id="resume" onChange={onChangeHandler}/>
                </div>
                
                <fieldset className="indent-2 bg-white border-[2px] border-gray-500 rounded-lg overflow-hidden">
                    <legend id="url">Enter URL<span>*</span></legend>
                    <input required type="text" id="url" name="url" placeholder="Enter Url" onChange={onChangeHandler} />
                </fieldset>
                
                <div>
                <label htmlFor="choice">Select your favorite brand</label>
                    <select name="choice" id="choice" onChange={handleSelectChange}>
                    <option value="op_0" selected disabled>select your choice</option>
                    <option value="op_2">Audi</option>
                    <option value="op_3">Ford</option>
                    <option value="op_4">Hundai</option>
                    <option value="op_5">Rolls Royce</option>
                </select>
                </div>
                
                <div>
                <label htmlFor="about">About</label>
                    <textarea name="about" id="about" rows={4} cols={30} placeholder="About your self" className="px-1 rounded-lg" onChange={onChangeHandler}></textarea>
                </div>
                
                <label htmlFor="action" className="underline">Submit or Reset</label>
                <div className="flex justify-between">
                    <button type="reset" className="border-[1px] border-gray-400 px-4 py-1 rounded bg-[#328429] text-white" onClick={() => setData({ 
                        firstName: "",
                        lastName: "",
                        email: "",
                        contact: "",
                        gender: "",
                        subject: [],
                        resume: null,
                        url: "",
                        choice: "",
                        about: ""
                    })}>Reset</button>
                    <button type="submit" className="border-[1px] border-gray-400 px-4 py-1 rounded bg-[#328429] text-white" >Submit</button>
                </div>
            </form>
            </div>
    )
}

export default Form;

/* onSubmit={(e) => {
e.preventDefault();
const formData = new FormData(e.currentTarget);
const data: FormData = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    contact: formData.get('contact') as string,
    gender: formData.get('gender') as 'Male' | 'Female' | 'Other',
    subject: formData.getAll('subject') as string[],
    resume: formData.get('resume') as File | null,
    url: formData.get('url') as string,
    choice: formData.get('choice') as string,
    about: formData.get('about') as string,
};
search(data);
                }} */