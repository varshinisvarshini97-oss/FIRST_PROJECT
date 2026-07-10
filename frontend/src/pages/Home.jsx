import React,{useState} from "react";

import FamilyForm from "../components/FamilyForm";

import SearchBar from "../components/SearchBar";

import FamilyTable from "../components/FamilyTable";



function Home(){


const [search,setSearch]=useState("");



return(


<div
className="
min-h-screen
bg-gray-100
px-4
sm:px-6
lg:px-10
py-8
"
>


<div
className="
max-w-7xl
mx-auto
"
>



{/* Header */}

<div
className="
bg-gradient-to-r
from-blue-600
to-purple-600
rounded-xl
p-6
text-white
shadow-lg
"
>


<h1
className="
text-3xl
sm:text-4xl
font-bold
"
>

Family Record Management

</h1>


<p
className="
mt-2
text-gray-100
"
>

Manage your family details easily

</p>


</div>





{/* Add Form */}

<FamilyForm/>





{/* Search */}

<SearchBar

search={search}

setSearch={setSearch}

/>





{/* Table */}

<FamilyTable

search={search}

/>





</div>



</div>


)

}


export default Home;