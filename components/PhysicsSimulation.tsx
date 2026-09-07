"use client";


import { useState } from "react";



export default function PhysicsSimulation(){



const [massa,setMassa] = useState(2);

const [kecepatan,setKecepatan] = useState(5);

const [momentum,setMomentum] = useState(0);







function hitungMomentum(){


const hasil =

Number(massa) *

Number(kecepatan);



setMomentum(hasil);




localStorage.setItem(

"dataEksperimen",

JSON.stringify({

massa,

kecepatan,

momentum:hasil,

status:"Selesai"

})

);


}







function reset(){


setMassa(2);

setKecepatan(5);

setMomentum(0);



}








return (


<div className="space-y-6">







{/* INPUT */}



<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">





<div className="rounded-3xl bg-blue-50 p-6">


<h3 className="text-xl font-bold text-blue-700">

⚖️ Massa Benda

</h3>



<input


type="number"


value={massa}


onChange={(e)=>

setMassa(Number(e.target.value))

}


className="mt-5 w-full rounded-xl border bg-white p-3"


/>


<p className="mt-2 text-gray-600">

Satuan: kg

</p>


</div>









<div className="rounded-3xl bg-green-50 p-6">


<h3 className="text-xl font-bold text-green-700">

🏃 Kecepatan

</h3>



<input


type="number"


value={kecepatan}


onChange={(e)=>

setKecepatan(Number(e.target.value))

}


className="mt-5 w-full rounded-xl border bg-white p-3"


/>



<p className="mt-2 text-gray-600">

Satuan: m/s

</p>


</div>






</div>









{/* HASIL */}



<div className="rounded-3xl bg-gradient-to-r from-indigo-50 to-blue-50 p-6 text-center">


<h3 className="text-xl font-bold">

Momentum

</h3>



<p className="mt-4 text-5xl font-bold text-blue-700">


{momentum}


</p>



<p className="mt-2">

kg m/s

</p>


</div>









{/* BUTTON */}



<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">



<button


onClick={hitungMomentum}


className="rounded-xl bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700"


>

Hitung Momentum

</button>






<button


onClick={reset}


className="rounded-xl bg-gray-200 px-8 py-3 font-bold text-gray-700"


>

Reset

</button>




</div>







</div>


);


}