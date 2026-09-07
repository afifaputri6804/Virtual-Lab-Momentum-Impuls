"use client";


import { useEffect, useState } from "react";
import Link from "next/link";



export default function Materi(){


const [selesai,setSelesai] = useState(false);





useEffect(()=>{


const status =
localStorage.getItem(
"materiSelesai"
);



if(status){

setSelesai(true);

}


},[]);







function selesaiMateri(){


localStorage.setItem(

"materiSelesai",

"true"

);



setSelesai(true);



}







return (


<main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-10">



<section className="mx-auto max-w-6xl">





{/* HEADER */}


<div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-white shadow-xl">


<h1 className="text-4xl font-bold">

📘 MOMENTRACK Learning Module

</h1>



<p className="mt-3 text-blue-100">

Materi Momentum dan Impuls

</p>



</div>









{/* PROGRESS */}


<section className="mt-8 rounded-2xl bg-white p-8 shadow">


<h2 className="text-2xl font-bold">

Progress Materi

</h2>



<div className="mt-5 h-5 overflow-hidden rounded-full bg-gray-200">


<div

className="h-full rounded-full bg-blue-600"

style={{

width:
selesai
?
"100%"
:
"50%"

}}


/>


</div>



<p className="mt-3 font-semibold text-blue-700">


{

selesai

?

"100% Materi selesai"

:

"50% Materi dipelajari"

}



</p>



</section>









{/* KARTU MATERI */}



<section className="mt-8 grid gap-6 md:grid-cols-2">







<div className="rounded-3xl bg-white p-8 shadow-xl">


<div className="text-5xl">

⚽

</div>



<h2 className="mt-5 text-2xl font-bold text-blue-700">

Bab 1 — Momentum

</h2>




<p className="mt-4 text-gray-600">


Momentum adalah ukuran jumlah gerakan
suatu benda yang dipengaruhi oleh massa
dan kecepatannya.


</p>




<div className="mt-5 rounded-xl bg-blue-50 p-5">


<p className="font-bold">

Rumus Momentum

</p>


<p className="mt-2 text-2xl font-bold">

p = m × v

</p>


</div>



</div>









<div className="rounded-3xl bg-white p-8 shadow-xl">


<div className="text-5xl">

💥

</div>




<h2 className="mt-5 text-2xl font-bold text-purple-700">

Bab 2 — Impuls

</h2>




<p className="mt-4 text-gray-600">


Impuls merupakan perubahan momentum
akibat gaya yang bekerja dalam interval waktu tertentu.


</p>




<div className="mt-5 rounded-xl bg-purple-50 p-5">


<p className="font-bold">

Rumus Impuls

</p>


<p className="mt-2 text-2xl font-bold">

I = F × Δt

</p>


</div>



</div>







</section>









{/* SELESAI */}


<section className="mt-10 rounded-3xl bg-white p-8 shadow-xl text-center">



{

!selesai

?

<button

onClick={selesaiMateri}

className="rounded-xl bg-green-600 px-8 py-3 text-white hover:bg-green-700"

>

✅ Tandai Materi Selesai

</button>


:

<div>


<p className="text-xl font-bold text-green-700">

✅ Materi berhasil diselesaikan

</p>



<Link

href="/eksperimen"

className="mt-5 inline-block rounded-xl bg-blue-600 px-8 py-3 text-white"

>

Lanjut Eksperimen →

</Link>



</div>


}



</section>







</section>


</main>


);


}