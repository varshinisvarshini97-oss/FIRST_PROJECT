import React from "react";


function SearchBar({search,setSearch}){


return(

<div
className="
bg-white
shadow-md
rounded-xl
p-5
mt-6
flex
flex-col
sm:flex-row
gap-4
items-center
">


<h2
className="
text-xl
font-bold
text-gray-700
"
>
Search Member
</h2>


<input

type="text"

placeholder="Search by name..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
border
rounded-lg
p-3
w-full
sm:w-96
"

/>


</div>


)


}


export default SearchBar;