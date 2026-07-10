import React,{useState} from "react";
import axios from "axios";


function EditMember({member}){


const [data,setData]=useState(member || {

name:"",
age:"",
gender:"",
relation:"",
phone:""

});



const handleChange=(e)=>{

setData({

...data,

[e.target.name]:e.target.value

});

};



const updateMember=()=>{


axios.put(

`http://localhost:5000/family/${data._id}`,

data

)

.then(()=>{

alert("Member Updated Successfully");

window.location.reload();

})

.catch(()=>{

alert("Update Failed");

});


}



return(

<div
className="
bg-white
shadow-lg
rounded-xl
p-6
mt-6
"
>


<h2
className="
text-2xl
font-bold
text-gray-800
mb-5
"
>
Edit Member
</h2>



<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-4
"
>



<input

className="inputStyle"

name="name"

value={data.name}

onChange={handleChange}

placeholder="Name"

/>



<input

className="inputStyle"

name="age"

value={data.age}

onChange={handleChange}

placeholder="Age"

/>



<select

className="inputStyle"

name="gender"

value={data.gender}

onChange={handleChange}

>


<option>
Male
</option>

<option>
Female
</option>


</select>



<input

className="inputStyle"

name="relation"

value={data.relation}

onChange={handleChange}

placeholder="Relation"

/>



<input

className="inputStyle"

name="phone"

value={data.phone}

onChange={handleChange}

placeholder="Phone"

/>



<button

onClick={updateMember}

className="
bg-green-600
hover:bg-green-700
text-white
rounded-lg
font-semibold
"

>

Update Member

</button>



</div>



</div>


)

}


export default EditMember;