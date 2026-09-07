"use client";


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



export default function Profil(){



const router = useRouter();



const [nama,setNama] = useState("");

const [role,setRole] = useState("");

const [nilai,setNilai] = useState(0);

const [progress,setProgress] = useState(30);

const [eksperimen,setEksperimen] = useState(false);

const [evaluasi,setEvaluasi] = useState(false);





useEffect(()=>{


const userRole =
localStorage.getItem("role");


const userNama =
localStorage.getItem("nama");




if(!userRole){


router.push("/login");


return;


}





setRole(userRole);

setNama(

userNama || "Pengguna"

);





const nilaiData =
localStorage.getItem("nilai");



if(nilaiData){


setNilai(

Number(nilaiData)

);


}







const dataLab =
localStorage.getItem("dataEksperimen");



if(dataLab){


setEksperimen(true);


}





const dataEvaluasi =
localStorage.getItem("dataSiswa");



if(dataEvaluasi){


setEvaluasi(true);


}





let hasil = 30;



if(dataLab){

hasil += 35;

}



if(dataEvaluasi){

hasil += 35;

}



setProgress(hasil);





},[router]);








return (


<main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-10">



<section className="mx-auto max-w-4xl">






<div className="rounded-3xl bg-white p-10 shadow-xl">






{/* HEADER PROFIL */}



<div className="flex flex-col items-center text-center">



<div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-5xl text-white shadow-lg">


{

role === "guru"

?

"👨‍🏫"

:

"👨‍🎓"

}


</div>





<h1 className="mt-5 text-3xl font-bold text-blue-700">


{nama}


</h1>




<p className="mt-2 capitalize text-gray-600">


{role}


</p>



</div>









{/* INFORMASI AKUN */}



<div className="mt-10 rounded-2xl bg-slate-50 p-6">



<h2 className="text-xl font-bold">

Informasi Akun

</h2>



<div className="mt-5 space-y-3">


<p>

<b>Nama:</b> {nama}

</p>



<p>

<b>Peran:</b> {role}

</p>





{

role === "siswa" && (


<p>

<b>Kelas:</b> XI IPA

</p>


)

}





{

role === "guru" && (


<p>

<b>Tugas:</b> Pengelola Virtual Laboratory

</p>


)

}




</div>



</div>









{/* KHUSUS SISWA */}


{

role === "siswa" && (



<>



<section className="mt-8">


<h2 className="text-xl font-bold">

📊 Progress Pembelajaran

</h2>



<div className="mt-4 h-5 overflow-hidden rounded-full bg-gray-200">


<div

className="h-full rounded-full bg-blue-600"

style={{

width:`${progress}%`

}}

/>


</div>



<p className="mt-3 font-semibold text-blue-700">

{progress}% selesai

</p>


</section>









<section className="mt-8 rounded-xl bg-blue-50 p-6">


<h2 className="text-xl font-bold">

🏆 Hasil Belajar

</h2>



<p className="mt-4 text-gray-600">

Nilai Evaluasi Terakhir

</p>



<p className="mt-2 text-5xl font-bold text-blue-700">


{nilai}

<span className="text-2xl">

/100

</span>


</p>



</section>







<section className="mt-8">


<h2 className="text-xl font-bold">

Aktivitas

</h2>



<div className="mt-4 space-y-3">


<p>

{

eksperimen

?

"✅ Eksperimen Virtual Lab selesai"

:

"⏳ Eksperimen belum selesai"

}

</p>



<p>

{

evaluasi

?

"✅ Evaluasi selesai"

:

"⏳ Evaluasi belum selesai"

}

</p>



</div>



</section>



</>

)

}







</div>





</section>


</main>


);


}