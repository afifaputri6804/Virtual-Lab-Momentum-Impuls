"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Completion(){


const router = useRouter();



const [nama,setNama] = useState("");

const [nilai,setNilai] = useState(0);

const [selesai,setSelesai] = useState(false);





useEffect(()=>{


const role =
localStorage.getItem("role");



if(role !== "siswa"){


router.push("/login");


return;


}



setNama(

localStorage.getItem("nama")
||
"Siswa"

);





const materi =
localStorage.getItem(
"materiSelesai"
);



const eksperimen =
localStorage.getItem(
"dataEksperimen"
);



const evaluasi =
localStorage.getItem(
"dataSiswa"
);






if(
materi &&
eksperimen &&
evaluasi
){


setSelesai(true);



const data =
JSON.parse(evaluasi);



setNilai(
data.nilai
);



}




},[router]);








return (


<main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-10">


<section className="mx-auto max-w-4xl">





{

selesai ? (



<div className="rounded-3xl bg-white p-10 text-center shadow-2xl">





<div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-5xl text-white">


🏆


</div>





<h1 className="mt-8 text-4xl font-bold text-blue-700">


MOMENTRACK


</h1>




<h2 className="mt-3 text-2xl font-bold">


Certificate of Completion


</h2>







<p className="mt-8 text-gray-600">


Diberikan kepada


</p>




<h3 className="mt-3 text-3xl font-bold text-gray-800">


{nama}


</h3>







<p className="mt-8">


Telah menyelesaikan pembelajaran:


</p>






<div className="mx-auto mt-6 max-w-md rounded-xl bg-blue-50 p-6 text-left">


<p>

✅ Materi Momentum dan Impuls

</p>


<p className="mt-3">

✅ Virtual Laboratory

</p>



<p className="mt-3">

✅ Evaluasi Pembelajaran

</p>



</div>







<div className="mt-8 rounded-2xl bg-green-100 p-6">


<p className="text-gray-600">

Nilai Akhir

</p>


<h2 className="mt-2 text-5xl font-bold text-green-700">


{nilai}

<span className="text-2xl">

/100

</span>


</h2>



</div>







<div className="mt-8">


<span className="rounded-full bg-green-600 px-8 py-3 font-bold text-white">


STATUS: SELESAI


</span>


</div>







<Link

href="/dashboard-siswa"

className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-3 text-white"

>

Kembali Dashboard

</Link>






</div>



)

:

(



<div className="rounded-3xl bg-white p-10 text-center shadow-xl">


<h1 className="text-3xl font-bold text-blue-700">


Pembelajaran Belum Selesai


</h1>



<p className="mt-5 text-gray-600">


Selesaikan materi, eksperimen,
dan evaluasi terlebih dahulu.

</p>



<Link

href="/dashboard-siswa"

className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3 text-white"

>

Kembali Dashboard

</Link>


</div>


)

}




</section>


</main>


);


}