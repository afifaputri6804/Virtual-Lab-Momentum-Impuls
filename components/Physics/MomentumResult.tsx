"use client";


interface MomentumResultProps {


momentumBlue:number;


momentumRed:number;


systemMomentum:number;


initialMomentum:number;


finalMomentum:number;


collisionCount:number;


}





export default function MomentumResult({

momentumBlue,

momentumRed,

systemMomentum,

initialMomentum,

finalMomentum,

collisionCount


}:MomentumResultProps){





const deltaMomentum =

Number(

(
finalMomentum -
initialMomentum

).toFixed(2)

);






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

📊 Hasil Analisis Eksperimen

</h2>








<div

className="
grid
md:grid-cols-4
gap-4
"

>





<div

className="
bg-blue-100
p-4
rounded-xl
"

>


<p className="font-semibold">

Momentum Bola Biru

</p>


<h3 className="text-xl font-bold">

{momentumBlue}

</h3>


<p>

kg m/s

</p>


</div>







<div

className="
bg-red-100
p-4
rounded-xl
"

>


<p className="font-semibold">

Momentum Bola Merah

</p>


<h3 className="text-xl font-bold">

{momentumRed}

</h3>


<p>

kg m/s

</p>


</div>








<div

className="
bg-green-100
p-4
rounded-xl
"

>


<p className="font-semibold">

Momentum Sistem

</p>


<h3 className="text-xl font-bold">

{systemMomentum}

</h3>


<p>

kg m/s

</p>


</div>








<div

className="
bg-orange-100
p-4
rounded-xl
"

>


<p className="font-semibold">

Perubahan Momentum

</p>


<h3 className="text-xl font-bold">

{deltaMomentum}

</h3>


<p>

kg m/s

</p>


</div>







</div>









<div

className="
grid
md:grid-cols-2
gap-5
"

>



<div

className="
bg-slate-100
p-4
rounded-xl
"

>


<h3 className="font-bold">

📌 Data Tumbukan

</h3>



<p>

Jumlah tumbukan:

<b>

{" "}

{collisionCount}

kali

</b>

</p>



<p>

Momentum awal:

<b>

{" "}

{initialMomentum}

kg m/s

</b>

</p>




<p>

Momentum akhir:

<b>

{" "}

{finalMomentum}

kg m/s

</b>

</p>



</div>









<div

className="
bg-yellow-100
p-4
rounded-xl
"

>


<h3 className="font-bold">

🔬 Interpretasi

</h3>



<ul

className="
list-disc
ml-6
space-y-2
"

>


<li>

Momentum dihitung dari massa dikali kecepatan.

</li>


<li>

Perubahan momentum menunjukkan adanya impuls.

</li>


<li>

Data eksperimen digunakan untuk menguji konsep kekekalan momentum.

</li>


</ul>



</div>



</div>









</div>


);



}