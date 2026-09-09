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


const role = localStorage.getItem("role");



if(!role){

router.replace("/login");

return;

}



if(role !== "siswa"){

router.replace("/login");

return;

}




setNama(

localStorage.getItem("nama")
||
"Siswa Fisika"

);





const materiStatus =
localStorage.getItem("materiSelesai");


if(materiStatus){

setMateri(true);

}





const dataEksperimen =
localStorage.getItem("dataEksperimen");


if(dataEksperimen){

setEksperimen(true);

}





const dataEvaluasi =
localStorage.getItem("dataSiswa");



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



<p className="mt-2 text-blue-100">

Virtual Laboratory Momentum dan Impuls

</p>



</div>









{/* PROGRESS */}



<section className="mt-8 rounded-3xl bg-white p-6 shadow-xl">


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

className="h-full rounded-full bg-blue-600 transition-all"

style={{

width:`${progress}%`

}}

/>


</div>


</section>









{/* STATISTIK */}



<section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">



<div className="rounded-3xl bg-white p-6 shadow-xl">

<div className="text-4xl">📚</div>

<h2 className="mt-4 text-xl font-bold text-blue-700">

Materi

</h2>

<p className="mt-3 text-gray-600">

{materi ? "Selesai" : "Belum selesai"}

</p>

</div>





<div className="rounded-3xl bg-white p-6 shadow-xl">

<div className="text-4xl">🧪</div>

<h2 className="mt-4 text-xl font-bold text-green-700">

Eksperimen

</h2>

<p className="mt-3 text-gray-600">

{eksperimen ? "Selesai" : "Belum dilakukan"}

</p>

</div>





<div className="rounded-3xl bg-white p-6 shadow-xl">

<div className="text-4xl">📝</div>

<h2 className="mt-4 text-xl font-bold text-purple-700">

Nilai

</h2>

<p className="mt-3 text-3xl font-bold text-purple-700">

{nilai}/100

</p>

</div>





<div className="rounded-3xl bg-white p-6 shadow-xl">

<div className="text-4xl">🏆</div>

<h2 className="mt-4 text-xl font-bold text-yellow-700">

Level

</h2>

<p className="mt-3 text-gray-600">

{progress >= 80 ? "Ahli Fisika" : "Pembelajar"}

</p>

</div>



</section>









{/* MENU */}



<section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">



<Card

icon="📘"

title="Materi"

desc="Pelajari konsep momentum dan impuls."

link="/materi"

color="bg-blue-600"

/>



<Card

icon="🧪"

title="Virtual Lab"

desc="Melakukan simulasi eksperimen."

link="/virtual-lab"

color="bg-green-600"

/>



<Card

icon="📝"

title="Evaluasi"

desc="Uji pemahaman materi."

link="/evaluasi"

color="bg-purple-600"

/>



<Card

icon="🏆"

title="Sertifikat"

desc="Lihat hasil akhir pembelajaran."

link="/completion"

color="bg-yellow-500"

/>



</section>









{/* HASIL EVALUASI */}



<section className="mt-8 rounded-3xl bg-white p-6 shadow-xl">


<h2 className="text-xl font-bold">

🏆 Hasil Evaluasi

</h2>


<div className="mt-5 rounded-2xl bg-blue-50 p-6">


<p>

Nilai terakhir

</p>


<h3 className="mt-2 text-4xl font-bold text-blue-700">

{nilai}/100

</h3>


</div>


</section>









{/* STATUS */}



<section className="mt-8 rounded-3xl bg-white p-6 shadow-xl">


<h2 className="text-xl font-bold">

✅ Status Pembelajaran

</h2>


<div className="mt-5 space-y-3">


<p>
{materi ? "✅ Materi selesai" : "⏳ Materi belum selesai"}
</p>


<p>
{eksperimen ? "✅ Virtual Lab selesai" : "⏳ Virtual Lab belum selesai"}
</p>


<p>
{evaluasi ? "✅ Evaluasi selesai" : "⏳ Evaluasi belum selesai"}
</p>


</div>


</section>









{/* AKTIVITAS TERAKHIR */}



<section className="mt-8 rounded-3xl bg-white p-6 shadow-xl">


<h2 className="text-xl font-bold sm:text-2xl">

📌 Aktivitas Terakhir

</h2>



<div className="mt-5 space-y-4">



<div className="rounded-2xl bg-blue-50 p-4">

<p className="font-bold text-blue-700">

📚 Materi Momentum

</p>

<p className="mt-1 text-gray-600">

{materi
?
"✅ Materi sudah dipelajari"
:
"⏳ Materi belum selesai"}

</p>

</div>





<div className="rounded-2xl bg-green-50 p-4">

<p className="font-bold text-green-700">

🧪 Virtual Lab

</p>

<p className="mt-1 text-gray-600">

{eksperimen
?
"✅ Eksperimen tumbukan telah dilakukan"
:
"⏳ Belum melakukan eksperimen"}

</p>

</div>





<div className="rounded-2xl bg-purple-50 p-4">

<p className="font-bold text-purple-700">

📝 Evaluasi

</p>

<p className="mt-1 text-gray-600">

{evaluasi
?
`✅ Nilai terakhir ${nilai}/100`
:
"⏳ Evaluasi belum dikerjakan"}

</p>

</div>



</div>


</section>





</section>


</main>


);


}






function Card({

icon,

title,

desc,

link,

color

}:{

icon:string;

title:string;

desc:string;

link:string;

color:string;

}){


return (

<div className="rounded-3xl bg-white p-6 shadow-xl">


<div className="text-5xl">

{icon}

</div>


<h2 className="mt-4 text-xl font-bold">

{title}

</h2>


<p className="mt-3 text-gray-600">

{desc}

</p>


<Link

href={link}

className={`mt-5 inline-block rounded-xl px-5 py-2 text-white ${color}`}

>

Buka

</Link>


</div>

);


}