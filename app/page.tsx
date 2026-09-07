"use client";


import Link from "next/link";
import { useEffect, useState } from "react";



export default function Home(){


const [role,setRole] = useState<string | null>(null);

const [nama,setNama] = useState("");





useEffect(()=>{


const userRole =
localStorage.getItem("role");


const userNama =
localStorage.getItem("nama");



setRole(userRole);

setNama(

userNama || ""

);



},[]);







return (


<main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-5 sm:p-10">



<section className="mx-auto max-w-6xl">





{

!role ? (



<div className="flex min-h-screen flex-col items-center justify-center text-center">





<div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-700 text-4xl font-bold text-white shadow-xl sm:h-32 sm:w-32">


MT


</div>








<h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-700">


MOMENTRACK


</h1>






<h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-800">


Virtual Laboratory

<br/>

Momentum dan Impuls


</h2>







<p className="mt-6 max-w-2xl text-sm text-gray-600 sm:text-base">


Laboratorium virtual fisika interaktif
untuk mempelajari konsep momentum dan impuls
melalui materi, simulasi, eksperimen,
dan evaluasi.


</p>







<div className="mt-8 flex flex-col gap-4 sm:flex-row">



<Link

href="/login"

className="rounded-xl bg-blue-600 px-8 py-3 text-white shadow hover:bg-blue-700"

>

Mulai Pembelajaran

</Link>





<Link

href="/materi"

className="rounded-xl bg-white px-8 py-3 text-blue-700 shadow"

>

Lihat Materi

</Link>





</div>






</div>





)





:

(



<div className="pt-5 sm:pt-10">





<div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-xl sm:p-10">



<h1 className="text-3xl sm:text-4xl font-bold">


Halo, {nama} 👋


</h1>





<p className="mt-3 text-lg">


Selamat datang kembali di MOMENTRACK


</p>




<p className="mt-2 text-blue-100">


Virtual Laboratory Momentum dan Impuls


</p>



</div>









<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">







{

role === "siswa" && (


<>



<Link

href="/dashboard-siswa"

className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 sm:p-8"

>


<h2 className="text-xl sm:text-2xl font-bold text-blue-700">

📊 Dashboard Siswa

</h2>



<p className="mt-3 text-gray-600">

Lihat progress dan hasil belajar.

</p>



</Link>







<Link

href="/virtual-lab"

className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 sm:p-8"

>


<h2 className="text-xl sm:text-2xl font-bold text-green-700">

🧪 Virtual Lab

</h2>



<p className="mt-3 text-gray-600">

Lakukan eksperimen momentum.

</p>



</Link>







<Link

href="/evaluasi"

className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 sm:p-8"

>


<h2 className="text-xl sm:text-2xl font-bold text-purple-700">

📝 Evaluasi

</h2>



<p className="mt-3 text-gray-600">

Uji pemahaman materi.

</p>



</Link>



</>


)

}





{

role === "guru" && (


<>



<Link

href="/dashboard-guru"

className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 sm:p-8"

>


<h2 className="text-xl sm:text-2xl font-bold text-blue-700">

👨‍🏫 Dashboard Guru

</h2>



<p className="mt-3 text-gray-600">

Monitoring aktivitas siswa.

</p>



</Link>







<Link

href="/profil"

className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 sm:p-8"

>


<h2 className="text-xl sm:text-2xl font-bold text-purple-700">

👤 Profil

</h2>



<p className="mt-3 text-gray-600">

Kelola informasi akun.

</p>



</Link>



</>


)

}





</div>







</div>


)


}




</section>



</main>


);


}