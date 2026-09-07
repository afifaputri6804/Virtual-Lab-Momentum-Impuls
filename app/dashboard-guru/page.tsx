"use client";


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";




export default function DashboardGuru(){


const router = useRouter();



const [loading,setLoading] = useState(true);



const [namaGuru,setNamaGuru] = useState("");

const [namaSiswa,setNamaSiswa] = useState("");

const [nilai,setNilai] = useState(0);

const [status,setStatus] = useState("");

const [tanggal,setTanggal] = useState("");

const [eksperimen,setEksperimen] = useState<any>(null);








useEffect(()=>{


const role =
localStorage.getItem("role");



if(!role){


setLoading(false);

router.replace("/login");

return;


}



if(role !== "guru"){


setLoading(false);

router.replace("/login");

return;


}






setNamaGuru(

localStorage.getItem("nama")
||
"Guru Fisika"

);







// DATA SISWA


const dataSiswa =
localStorage.getItem(
"dataSiswa"
);



if(dataSiswa){


const siswa =
JSON.parse(dataSiswa);



setNamaSiswa(
siswa.nama || ""
);



setNilai(
siswa.nilai || 0
);



setStatus(
siswa.status || ""
);



setTanggal(
siswa.tanggal || ""
);



}









// DATA LAB


const dataLab =
localStorage.getItem(
"dataEksperimen"
);



if(dataLab){


setEksperimen(

JSON.parse(dataLab)

);


}






setLoading(false);




},[router]);









if(loading){


return (


<main className="flex min-h-screen items-center justify-center bg-blue-50">


<div className="rounded-2xl bg-white p-8 shadow-xl">


<p className="text-xl font-semibold text-blue-700">

Loading Dashboard Guru...

</p>


</div>


</main>


);


}








const grafik = [


{

nama:"Evaluasi",

nilai:nilai

}


];









return (


<main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 to-indigo-100 p-5 sm:p-8 lg:p-10">



<section className="mx-auto w-full max-w-6xl">







{/* HEADER */}



<div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-xl sm:p-10">


<h1 className="text-3xl font-bold sm:text-4xl">

Dashboard Guru MOMENTRACK

</h1>



<p className="mt-3 text-lg">

Halo, {namaGuru} 👋

</p>



<p className="mt-2 text-sm text-blue-100 sm:text-base">

Monitoring aktivitas pembelajaran siswa

</p>



</div>









{/* STATISTIK */}



<section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">





<div className="rounded-3xl bg-white p-6 shadow-xl">


<p className="font-semibold text-gray-600">

Total Siswa

</p>



<h2 className="mt-3 text-3xl font-bold text-blue-700 sm:text-4xl">

1

</h2>



</div>







<div className="rounded-3xl bg-white p-6 shadow-xl">


<p className="font-semibold text-gray-600">

Selesai Evaluasi

</p>



<h2 className="mt-3 text-3xl font-bold text-green-600 sm:text-4xl">

{status ? 1 : 0}

</h2>



</div>







<div className="rounded-3xl bg-white p-6 shadow-xl">


<p className="font-semibold text-gray-600">

Nilai Terakhir

</p>



<h2 className="mt-3 text-3xl font-bold text-purple-600 sm:text-4xl">

{nilai}

</h2>



</div>






</section>









{/* GRAFIK */}



<section className="mt-8 rounded-3xl bg-white p-6 shadow-xl sm:p-8">


<h2 className="text-xl font-bold sm:text-2xl">

📈 Perkembangan Nilai Siswa

</h2>





<div className="mt-6 h-64 sm:h-72">



<ResponsiveContainer

width="100%"

height="100%"

>


<LineChart data={grafik}>


<CartesianGrid />


<XAxis dataKey="nama" />


<YAxis domain={[0,100]} />


<Tooltip />



<Line

type="monotone"

dataKey="nilai"

strokeWidth={4}

/>



</LineChart>



</ResponsiveContainer>



</div>



</section>









{/* DATA SISWA */}



<section className="mt-8 rounded-3xl bg-white p-6 shadow-xl sm:p-8">


<h2 className="text-xl font-bold sm:text-2xl">

👨‍🎓 Aktivitas Evaluasi Siswa

</h2>





{

namaSiswa ?


<div className="mt-5 space-y-3 rounded-2xl bg-slate-50 p-5">


<p>

<b>Nama:</b> {namaSiswa}

</p>



<p>

<b>Status:</b> {status}

</p>



<p>

<b>Nilai:</b> {nilai}

</p>



<p>

<b>Tanggal:</b> {tanggal}

</p>



</div>



:


<p className="mt-5 text-gray-500">

Belum ada data siswa.

</p>



}



</section>









{/* VIRTUAL LAB */}



<section className="mt-8 rounded-3xl bg-white p-6 shadow-xl sm:p-8">


<h2 className="text-xl font-bold sm:text-2xl">

🧪 Riwayat Virtual Laboratory

</h2>






{

eksperimen ?


<div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">





<div className="rounded-2xl bg-blue-50 p-5">


<p className="font-semibold">

Massa

</p>



<p className="text-3xl font-bold text-blue-700">

{eksperimen.massa} kg

</p>


</div>







<div className="rounded-2xl bg-green-50 p-5">


<p className="font-semibold">

Kecepatan

</p>



<p className="text-3xl font-bold text-green-700">

{eksperimen.kecepatan} m/s

</p>


</div>







<div className="rounded-2xl bg-purple-50 p-5">


<p className="font-semibold">

Momentum

</p>



<p className="text-3xl font-bold text-purple-700">

{eksperimen.momentum} kg m/s

</p>


</div>







<div className="rounded-2xl bg-yellow-50 p-5">


<p className="font-semibold">

Status

</p>



<p className="mt-2">

{eksperimen.status}

</p>


</div>






</div>


:


<p className="mt-5 text-gray-500">

Belum ada hasil eksperimen.

</p>



}





</section>







</section>


</main>


);


}