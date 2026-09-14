"use client";


interface KPSPanelProps {


observation:string;


measurement:string;


analysis:string;


conclusion:string;



setObservation:(value:string)=>void;


setMeasurement:(value:string)=>void;


setAnalysis:(value:string)=>void;


setConclusion:(value:string)=>void;



}





export default function KPSPanel({

observation,

measurement,

analysis,

conclusion,

setObservation,

setMeasurement,

setAnalysis,

setConclusion


}:KPSPanelProps){





return(

<div

className="
bg-white
rounded-xl
shadow-lg
p-5
space-y-5
"

>



<h2

className="
text-xl
font-bold
text-purple-700
"

>

🔎 Keterampilan Proses Sains

</h2>







<p className="text-gray-700">

Catat hasil pengamatan selama melakukan eksperimen virtual.

</p>









{/* OBSERVASI */}



<div

className="
bg-green-100
p-4
rounded-xl
"

>


<h3 className="font-bold">

1. Observasi

</h3>



<p className="text-sm">

Apa yang terjadi ketika bola diberi impuls?

</p>



<textarea


value={observation}



onChange={(e)=>

setObservation(

e.target.value

)

}



className="
border
rounded-lg
p-3
w-full
mt-2
h-24
"



placeholder="Tuliskan hasil pengamatan..."

/>



</div>









{/* PENGUKURAN */}



<div

className="
bg-blue-100
p-4
rounded-xl
"

>


<h3 className="font-bold">

2. Mengukur

</h3>



<p className="text-sm">

Tuliskan data massa, kecepatan, momentum, atau impuls.

</p>



<textarea


value={measurement}



onChange={(e)=>

setMeasurement(

e.target.value

)

}



className="
border
rounded-lg
p-3
w-full
mt-2
h-24
"



placeholder="Contoh: massa bola biru 2 kg..."

/>



</div>









{/* ANALISIS */}



<div

className="
bg-yellow-100
p-4
rounded-xl
"

>


<h3 className="font-bold">

3. Menganalisis

</h3>



<p className="text-sm">

Jelaskan hubungan impuls dengan perubahan momentum.

</p>



<textarea


value={analysis}



onChange={(e)=>

setAnalysis(

e.target.value

)

}



className="
border
rounded-lg
p-3
w-full
mt-2
h-24
"



placeholder="Tuliskan analisis..."

/>



</div>









{/* KESIMPULAN */}



<div

className="
bg-purple-100
p-4
rounded-xl
"

>


<h3 className="font-bold">

4. Menyimpulkan

</h3>



<p className="text-sm">

Buat kesimpulan berdasarkan hasil eksperimen.

</p>



<textarea


value={conclusion}



onChange={(e)=>

setConclusion(

e.target.value

)

}



className="
border
rounded-lg
p-3
w-full
mt-2
h-24
"



placeholder="Tuliskan kesimpulan..."

/>



</div>









<div

className="
bg-slate-100
p-4
rounded-xl
"

>


<h3 className="font-bold">

Komponen KPS yang Dilatih

</h3>



<ul

className="
list-disc
ml-6
mt-2
space-y-1
"

>


<li>
Mengamati fenomena tumbukan.
</li>


<li>
Mengumpulkan data eksperimen.
</li>


<li>
Menginterpretasikan hubungan fisika.
</li>


<li>
Menyusun kesimpulan berdasarkan bukti.
</li>



</ul>


</div>









</div>


);



}