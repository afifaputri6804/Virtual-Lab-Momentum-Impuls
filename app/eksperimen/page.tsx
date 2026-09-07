"use client";


import Link from "next/link";
import { useEffect, useState } from "react";



export default function Eksperimen(){


const [nama,setNama] = useState("");




useEffect(()=>{


setNama(

localStorage.getItem("nama")
||
"Siswa Fisika"

);


},[]);






return (


<main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-100 p-10">



<section className="mx-auto max-w-6xl">






{/* HEADER */}



<div className="rounded-3xl bg-gradient-to-r from-green-600 to-blue-700 p-10 text-white shadow-xl">


<h1 className="text-4xl font-bold">

🧪 Eksperimen MOMENTRACK

</h1>



<p className="mt-4 text-lg">

Halo, {nama}

</p>



<p className="mt-2 text-green-100">

Persiapkan eksperimen sebelum masuk Virtual Laboratory

</p>



</div>









{/* TUJUAN */}



<section className="mt-8 rounded-3xl bg-white p-8 shadow-xl">


<h2 className="text-2xl font-bold">

🎯 Tujuan Eksperimen

</h2>



<p className="mt-4 text-gray-600 leading-relaxed">


Menganalisis hubungan antara massa,
kecepatan, dan momentum benda melalui
simulasi digital.


</p>



</section>









{/* VARIABEL */}



<section className="mt-8 grid gap-6 md:grid-cols-3">





<div className="rounded-3xl bg-white p-6 shadow">


<div className="text-5xl">

⚖️

</div>



<h3 className="mt-4 text-xl font-bold text-blue-700">

Massa

</h3>


<p className="mt-3 text-gray-600">

Mengatur besar massa benda yang bergerak.

</p>


</div>







<div className="rounded-3xl bg-white p-6 shadow">


<div className="text-5xl">

🏃

</div>



<h3 className="mt-4 text-xl font-bold text-green-700">

Kecepatan

</h3>


<p className="mt-3 text-gray-600">

Mengubah kecepatan gerak benda.

</p>


</div>







<div className="rounded-3xl bg-white p-6 shadow">


<div className="text-5xl">

📊

</div>



<h3 className="mt-4 text-xl font-bold text-purple-700">

Momentum

</h3>


<p className="mt-3 text-gray-600">

Mengamati perubahan momentum.

</p>


</div>






</section>









{/* LANGKAH */}



<section className="mt-8 rounded-3xl bg-white p-8 shadow-xl">


<h2 className="text-2xl font-bold">

📋 Langkah Eksperimen

</h2>




<div className="mt-5 space-y-4">



<p>

1️⃣ Pelajari konsep momentum dan impuls.

</p>



<p>

2️⃣ Masukkan nilai massa benda.

</p>



<p>

3️⃣ Atur nilai kecepatan.

</p>



<p>

4️⃣ Jalankan simulasi dan analisis hasil.

</p>



<p>

5️⃣ Simpan hasil eksperimen.

</p>



</div>



</section>









{/* BUTTON */}



<section className="mt-10 text-center">


<Link

href="/virtual-lab"

className="rounded-xl bg-green-600 px-10 py-4 text-lg font-bold text-white shadow hover:bg-green-700"

>

🚀 Mulai Virtual Laboratory

</Link>



</section>







</section>


</main>


);


}