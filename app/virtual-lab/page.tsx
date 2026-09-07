"use client";


import PhysicsSimulation from "@/components/PhysicsSimulation";
import Link from "next/link";



export default function VirtualLab(){



return (


<main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-5 sm:p-8 lg:p-10">



<section className="mx-auto w-full max-w-6xl">







{/* HEADER */}



<div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-xl sm:p-10">


<h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">

🧪 MOMENTRACK Virtual Lab

</h1>



<p className="mt-4 text-base text-blue-100 sm:text-lg">

Simulasi Momentum dan Impuls

</p>



<p className="mt-3 max-w-3xl text-sm text-blue-200 sm:text-base">

Laboratorium virtual untuk memahami hubungan
massa, kecepatan, dan momentum melalui simulasi interaktif.

</p>


</div>









{/* INFORMASI */}



<section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">





<div className="rounded-3xl bg-white p-6 shadow-xl">


<div className="text-5xl">

⚖️

</div>


<h2 className="mt-4 text-xl font-bold text-blue-700">

Massa

</h2>


<p className="mt-3 text-gray-600">

Mengatur besar massa benda yang bergerak.

</p>


</div>







<div className="rounded-3xl bg-white p-6 shadow-xl">


<div className="text-5xl">

🏃

</div>


<h2 className="mt-4 text-xl font-bold text-green-700">

Kecepatan

</h2>


<p className="mt-3 text-gray-600">

Mengatur kecepatan benda dalam simulasi.

</p>


</div>







<div className="rounded-3xl bg-white p-6 shadow-xl">


<div className="text-5xl">

📊

</div>


<h2 className="mt-4 text-xl font-bold text-purple-700">

Momentum

</h2>


<p className="mt-3 text-gray-600">

Mengamati perubahan momentum benda.

</p>


</div>






</section>









{/* SIMULASI */}



<section className="mt-10 rounded-3xl bg-white p-5 shadow-xl sm:p-8">



<div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">


<h2 className="text-2xl font-bold sm:text-3xl">

🚀 Area Simulasi

</h2>



<span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

● Laboratory Active

</span>



</div>





<PhysicsSimulation />





</section>









{/* NAVIGASI */}



<section className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">


<Link

href="/eksperimen"

className="rounded-xl bg-gray-200 px-6 py-3 text-center font-semibold text-gray-700"

>

← Eksperimen

</Link>





<Link

href="/evaluasi"

className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white"

>

Lanjut Evaluasi →

</Link>




</section>







</section>


</main>


);


}