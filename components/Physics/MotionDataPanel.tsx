"use client";


interface MotionDataPanelProps {


handX:number;


movement:number;


velocity:number;


acceleration:number;


force:number;


impulse:number;


}



export default function MotionDataPanel({

handX,

movement,

velocity,

acceleration,

force,

impulse


}:MotionDataPanelProps){



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

📷 Interactive Motion Tracking

</h2>





<div

className="
grid
md:grid-cols-2
gap-4
"

>



<div

className="
bg-green-100
p-4
rounded-xl
"

>


<p className="font-semibold">

Posisi Tangan

</p>


<h3 className="text-2xl font-bold">

{handX.toFixed(3)}

</h3>


</div>








<div

className="
bg-yellow-100
p-4
rounded-xl
"

>


<p className="font-semibold">

Perubahan Posisi

</p>


<h3 className="text-2xl font-bold">

{movement.toFixed(4)}

</h3>


</div>



</div>









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


<p>

Kecepatan

</p>


<h3 className="font-bold text-xl">

{velocity}

<span className="text-sm">

 m/s

</span>

</h3>


</div>








<div

className="
bg-purple-100
p-4
rounded-xl
"

>


<p>

Percepatan

</p>


<h3 className="font-bold text-xl">

{acceleration}

<span className="text-sm">

 m/s²

</span>

</h3>


</div>








<div

className="
bg-orange-100
p-4
rounded-xl
"

>


<p>

Gaya Impuls

</p>


<h3 className="font-bold text-xl">

{force}

<span className="text-sm">

 N

</span>

</h3>


</div>








<div

className="
bg-red-100
p-4
rounded-xl
"

>


<p>

Impuls

</p>


<h3 className="font-bold text-xl">

{impulse}

<span className="text-sm">

 Ns

</span>

</h3>


</div>





</div>







<div

className="
bg-slate-100
p-4
rounded-xl
"

>


<h3 className="font-bold">

Interpretasi Fisika

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

Gerakan tangan menghasilkan perubahan posisi.

</li>


<li>

Perubahan posisi terhadap waktu menghasilkan kecepatan.

</li>


<li>

Percepatan menghasilkan gaya impuls pada bola.

</li>


<li>

Impuls menyebabkan perubahan momentum.

</li>



</ul>



</div>







</div>


);



}