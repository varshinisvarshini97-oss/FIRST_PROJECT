import React, { useState } from "react";
import axios from "axios";

function FamilyForm() {

    const [member, setMember] = useState({
        name:"",
        age:"",
        gender:"",
        relation:"",
        phone:""
    });


    const handleChange=(e)=>{
        setMember({
            ...member,
            [e.target.name]:e.target.value
        });
    };


    const addMember=(e)=>{

        e.preventDefault();

        axios.post(
            "https://first-project-o1rp.onrender.com/family",
            member
        )
        .then(()=>{
            alert("Member Added Successfully");

            setMember({
                name:"",
                age:"",
                gender:"",
                relation:"",
                phone:""
            });
        })
        .catch(()=>{
            alert("Error adding member");
        });

    };


    return(

        <div className="
        bg-white shadow-lg rounded-xl 
        p-6 mt-6
        w-full
        ">

            <h2 className="
            text-2xl font-bold 
            text-gray-800 mb-5
            ">
                Add Family Member
            </h2>


            <form 
            onSubmit={addMember}
            className="
            grid 
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            ">


                <input
                type="text"
                name="name"
                placeholder="Name"
                value={member.name}
                onChange={handleChange}
                className="inputStyle"
                />


                <input
                type="number"
                name="age"
                placeholder="Age"
                value={member.age}
                onChange={handleChange}
                className="inputStyle"
                />


                <select
                name="gender"
                value={member.gender}
                onChange={handleChange}
                className="inputStyle"
                >

                    <option>
                    Select Gender
                    </option>

                    <option>
                    Male
                    </option>

                    <option>
                    Female
                    </option>

                </select>


                <input
                type="text"
                name="relation"
                placeholder="Relation"
                value={member.relation}
                onChange={handleChange}
                className="inputStyle"
                />


                <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={member.phone}
                onChange={handleChange}
                className="inputStyle"
                />


                <button
                className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                rounded-lg
                font-semibold
                "
                >

                    Add Member

                </button>


            </form>


        </div>

    )

}


export default FamilyForm;