"use client";


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";



export default function DashboardSiswa(){


const router = useRouter();



const [loading,setLoading] = useState(true);


const [nama,setNama] = useState("");

const [nilai,setNilai] = useState(0);


const [materi,setMateri] = useState(false);

const [eksperimen,setEksperimen] = useState(false);

const [evaluasi,setEvaluasi] = useState(false);






useEffect(()=>{


const role =
localStorage.getItem("role");



if(!role){

setLoading(false);

router.replace("/login");

return;

}




if(role !== "siswa"){

setLoading(false);

router.replace("/login");

return;

}





setNama(

localStorage.getItem("nama")
||
"Siswa Fisika"

);







// CEK MATERI


const materiStatus =
localStorage.getItem(
"materiSelesai"
);



if(materiStatus){

setMateri(true);

}







// CEK EKSPERIMEN


const dataEksperimen =
localStorage.getItem(
"dataEksperimen"
);



if(dataEksperimen){

setEksperimen(true);

}







// CEK EVALUASI


const dataEvaluasi =
localStorage.getItem(
"dataSiswa"
);



if(dataEvaluasi){


const data =
JSON.parse(dataEvaluasi);



setEvaluasi(true);



setNilai(

data.nilai || 0

);


}





setLoading(false);



},[router]);









if(loading){


return (


<main className="flex min-h-screen items-center justify-center bg-blue-50">


<div className="rounded-2xl bg-white p-8 shadow-xl">


<p className="text-xl font-semibold text-blue-700">

Loading MOMENTRACK...

</p>


</div>


</main>


);


}








let progress = 0;



if(materi){

progress += 33;

}



if(eksperimen){

progress += 33;

}



if(evaluasi){

progress += 34;

}








return (


<main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-5 sm:p-8 lg:p-10">



<section className="mx-auto w-full max-w-6xl">






{/* HEADER */}



<div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-xl sm:p-10">


<h1 className="text-3xl font-bold sm:text-4xl">

Halo, {nama} 👋

</h1>



<p className="mt-3 text-lg">

Selamat datang di MOMENTRACK

</p>



<p className="mt-2 text-sm text-blue-100 sm:text-base">

Virtual Laboratory Momentum dan Impuls

</p>



</div>









{/* PROGRESS */}



<section className="mt-8 rounded-3xl bg-white p-6 shadow-xl sm:p-8">


<h2 className="text-xl font-bold sm:text-2xl">

📊 Progress Pembelajaran

</h2>




<div className="mt-5 flex justify-between">


<span>

Penyelesaian

</span>



<span className="font-bold text-blue-700">

{progress}%

</span>



</div>





<div className="mt-3 h-5 overflow-hidden rounded-full bg-gray-200">


<div

className="h-full rounded-full bg-blue-600 transition-all duration-700"

style={{

width:`${progress}%`

}}


/>


</div>



</section>









{/* MENU */}



<section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">





<div className="rounded-3xl bg-white p-6 shadow-xl">


<div className="text-5xl">

📘

</div>


<h2 className="mt-4 text-xl font-bold text-blue-700">

Materi

</h2>


<p className="mt-3 text-gray-600">

Pelajari konsep momentum dan impuls.

</p>



<Link

href="/materi"

className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-2 text-white"

>

Buka

</Link>


</div>









<div className="rounded-3xl bg-white p-6 shadow-xl">


<div className="text-5xl">

🧪

</div>



<h2 className="mt-4 text-xl font-bold text-green-700">

Virtual Lab

</h2>



<p className="mt-3 text-gray-600">

Melakukan simulasi eksperimen.

</p>



<Link

href="/virtual-lab"

className="mt-5 inline-block rounded-xl bg-green-600 px-5 py-2 text-white"

>

Mulai

</Link>


</div>









<div className="rounded-3xl bg-white p-6 shadow-xl">


<div className="text-5xl">

📝

</div>



<h2 className="mt-4 text-xl font-bold text-purple-700">

Evaluasi

</h2>



<p className="mt-3 text-gray-600">

Uji pemahaman materi.

</p>



<Link

href="/evaluasi"

className="mt-5 inline-block rounded-xl bg-purple-600 px-5 py-2 text-white"

>

Kerjakan

</Link>


</div>









<div className="rounded-3xl bg-white p-6 shadow-xl">


<div className="text-5xl">

🏆

</div>



<h2 className="mt-4 text-xl font-bold text-yellow-700">

Sertifikat

</h2>



<p className="mt-3 text-gray-600">

Lihat hasil akhir pembelajaran.

</p>



<Link

href="/completion"

className="mt-5 inline-block rounded-xl bg-yellow-500 px-5 py-2 text-white"

>

Lihat

</Link>


</div>







</section>









{/* NILAI */}



<section className="mt-8 rounded-3xl bg-white p-6 shadow-xl sm:p-8">


<h2 className="text-xl font-bold sm:text-2xl">

🏆 Hasil Evaluasi

</h2>



<div className="mt-5 rounded-2xl bg-blue-50 p-6">


<p>

Nilai terakhir

</p>



<h3 className="mt-2 text-4xl font-bold text-blue-700 sm:text-5xl">

{nilai}

<span className="text-xl">

/100

</span>


</h3>



</div>



</section>









{/* STATUS */}



<section className="mt-8 rounded-3xl bg-white p-6 shadow-xl sm:p-8">


<h2 className="text-xl font-bold sm:text-2xl">

✅ Status Pembelajaran

</h2>



<div className="mt-5 space-y-3">


<p>

{materi
?
"✅ Materi selesai"
:
"⏳ Materi belum selesai"}

</p>



<p>

{eksperimen
?
"✅ Virtual Lab selesai"
:
"⏳ Virtual Lab belum selesai"}

</p>



<p>

{evaluasi
?
"✅ Evaluasi selesai"
:
"⏳ Evaluasi belum selesai"}

</p>



</div>



</section>







</section>


</main>


);


}