"use client";


interface ExperimentControlProps {

  massBlue:number;

  massRed:number;

  velocityBlue:number;

  velocityRed:number;

  collisionType:string;


  setMassBlue:(value:number)=>void;

  setMassRed:(value:number)=>void;

  setVelocityBlue:(value:number)=>void;

  setVelocityRed:(value:number)=>void;

  setCollisionType:(value:string)=>void;

}





export default function ExperimentControl({

  massBlue,

  massRed,

  velocityBlue,

  velocityRed,

  collisionType,

  setMassBlue,

  setMassRed,

  setVelocityBlue,

  setVelocityRed,

  setCollisionType


}:ExperimentControlProps){



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


<h2 className="
text-xl
font-bold
text-purple-700
">

🧪 Pengaturan Eksperimen

</h2>





<div className="
grid md:grid-cols-2
gap-5
">



{/* Bola Biru */}


<div

className="
bg-blue-100
p-4
rounded-xl
"

>


<h3 className="
font-bold
mb-3
">

🔵 Bola Biru

</h3>



<label>

Massa (kg)

</label>


<input

type="number"

value={massBlue}

onChange={(e)=>

setMassBlue(

Number(e.target.value)

)

}

className="
border
rounded-lg
p-2
w-full
"

/>




<label className="
block mt-3
">

Kecepatan Awal (m/s)

</label>


<input

type="number"

value={velocityBlue}

onChange={(e)=>

setVelocityBlue(

Number(e.target.value)

)

}

className="
border
rounded-lg
p-2
w-full
"

/>


</div>








{/* Bola Merah */}



<div

className="
bg-red-100
p-4
rounded-xl
"

>


<h3 className="
font-bold
mb-3
">

🔴 Bola Merah

</h3>




<label>

Massa (kg)

</label>


<input

type="number"

value={massRed}

onChange={(e)=>

setMassRed(

Number(e.target.value)

)

}

className="
border
rounded-lg
p-2
w-full
"

/>





<label className="
block mt-3
">

Kecepatan Awal (m/s)

</label>


<input

type="number"

value={velocityRed}

onChange={(e)=>

setVelocityRed(

Number(e.target.value)

)

}

className="
border
rounded-lg
p-2
w-full
"

/>



</div>


</div>









<div

className="
bg-slate-100
p-4
rounded-xl
"

>


<h3 className="
font-bold
mb-3
">

Jenis Tumbukan

</h3>



<select

value={collisionType}

onChange={(e)=>

setCollisionType(

e.target.value

)

}

className="
border
rounded-lg
p-2
w-full
"

>


<option value="elastis">

Tumbukan Elastis

</option>


<option value="tidak-elastis">

Tumbukan Tidak Elastis

</option>


<option value="sebagian">

Tumbukan Sebagian Elastis

</option>



</select>



</div>








<div

className="
bg-green-100
p-4
rounded-xl
"

>


<h3 className="font-bold">

📌 Parameter Saat Ini

</h3>



<p>

Massa Biru:
<b> {massBlue} kg</b>

</p>


<p>

Massa Merah:
<b> {massRed} kg</b>

</p>


<p>

Kecepatan Biru:
<b> {velocityBlue} m/s</b>

</p>


<p>

Kecepatan Merah:
<b> {velocityRed} m/s</b>

</p>


<p>

Jenis:
<b> {collisionType}</b>

</p>



</div>






</div>


);


}