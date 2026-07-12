import React,{useEffect,useState} from "react";
import axios from "axios";


function FamilyTable({search}){


const [members,setMembers]=useState([]);


useEffect(()=>{

axios.get(
"https://first-project-o1rp.onrender.com/family"
)

.then(res=>{

setMembers(res.data);

});


},[]);



const deleteMember=(id)=>{


axios.delete(
`https://first-project-o1rp.onrender.com/family/${id}`
)

.then(()=>{

setMembers(
members.filter(
(member)=>member._id!==id
)
)

})


}



return(

<div
className="
bg-white
shadow-lg
rounded-xl
p-6
mt-6
overflow-x-auto
"
>


<h2
className="
text-2xl
font-bold
mb-5
"
>
Family Members
</h2>



<table
className="
w-full
min-w-[700px]
text-left
"
>


<thead
className="
bg-gray-100
"
>

<tr>

<th className="p-3">
Name
</th>

<th className="p-3">
Age
</th>

<th className="p-3">
Gender
</th>

<th className="p-3">
Relation
</th>

<th className="p-3">
Phone
</th>

<th className="p-3">
Action
</th>

</tr>

</thead>



<tbody>


{
members
.filter((m)=>
m.name
.toLowerCase()
.includes(
search.toLowerCase()
)
)
.map((m)=>(


<tr
key={m._id}
className="
border-b
hover:bg-gray-50
"
>


<td className="p-3">
{m.name}
</td>

<td className="p-3">
{m.age}
</td>

<td className="p-3">
{m.gender}
</td>

<td className="p-3">
{m.relation}
</td>


<td className="p-3">
{m.phone}
</td>


<td className="p-3">


<button

onClick={()=>deleteMember(m._id)}

className="
bg-red-500
text-white
px-4
py-2
rounded-lg
hover:bg-red-600
"

>

Delete

</button>


</td>


</tr>


))


}



</tbody>


</table>



</div>


)


}


export default FamilyTable;