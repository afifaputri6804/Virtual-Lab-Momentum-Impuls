"use client";


import {
  useEffect,
  useRef,
  useState
} from "react";


import Matter from "matter-js";


import HandTracker from "@/components/MotionTracking/HandTracker";





export default function MomentumCollision(){


// =================================
// REFERENCES
// =================================


const sceneRef =
useRef<HTMLDivElement | null>(null);



const blueBallRef =
useRef<Matter.Body | null>(null);



const redBallRef =
useRef<Matter.Body | null>(null);



const engineRef =
useRef<Matter.Engine | null>(null);



const runnerRef =
useRef<Matter.Runner | null>(null);



const renderRef =
useRef<Matter.Render | null>(null);





// posisi tangan sebelumnya

const previousHandX =
useRef(0.5);



// kecepatan sebelumnya

const previousVelocity =
useRef(0);



// waktu tracking

const previousTime =
useRef(Date.now());






// =================================
// STATE
// =================================



const [handX,setHandX] =
useState(0.5);



const [movement,setMovement] =
useState(0);



const [running,setRunning] =
useState(false);




// parameter fisika


const [massBlue,setMassBlue] =
useState(2);



const [massRed,setMassRed] =
useState(1);






// momentum


const [momentumBlue,setMomentumBlue] =
useState(0);



const [momentumRed,setMomentumRed] =
useState(0);



const [systemMomentum,setSystemMomentum] =
useState(0);







// motion tracking physics


const [handVelocity,setHandVelocity] =
useState(0);



const [handAcceleration,setHandAcceleration] =
useState(0);



const [force,setForce] =
useState(0);



const [impulse,setImpulse] =
useState(0);






// data eksperimen


const [collisionCount,setCollisionCount] =
useState(0);



const [initialMomentum,setInitialMomentum] =
useState(0);



const [finalMomentum,setFinalMomentum] =
useState(0);









// =================================
// CREATE PHYSICS WORLD
// =================================



useEffect(()=>{


if(!sceneRef.current)
return;





const engine =
Matter.Engine.create();



engine.gravity.y = 0;



engineRef.current =
engine;






const render =
Matter.Render.create({


element:
sceneRef.current,


engine,


options:{


width:700,


height:300,


wireframes:false,


background:"#f8fafc"


}


});



renderRef.current =
render;









const blueBall =
Matter.Bodies.circle(


150,


150,


35,


{


mass:massBlue,


restitution:1,


frictionAir:0.01,


label:"blue-ball",


render:{


fillStyle:"#2563eb"


}


}


);







const redBall =
Matter.Bodies.circle(


520,


150,


35,


{


mass:massRed,


restitution:1,


frictionAir:0.01,


label:"red-ball",


render:{


fillStyle:"#ef4444"


}


}


);







const ground =
Matter.Bodies.rectangle(


350,


290,


700,


20,


{


isStatic:true,


render:{


fillStyle:"#334155"


}


}


);







blueBallRef.current =
blueBall;



redBallRef.current =
redBall;









Matter.World.add(

engine.world,

[

blueBall,

redBall,

ground

]

);









Matter.Events.on(

engine,

"collisionStart",

()=>{


setCollisionCount(

value=>value+1

);





if(
blueBallRef.current
){


const p =

massBlue *

blueBallRef.current.velocity.x;



setFinalMomentum(

Number(

p.toFixed(2)

)

);


}



}



);









const runner =
Matter.Runner.create();



runnerRef.current =
runner;





Matter.Runner.run(

runner,

engine

);






Matter.Render.run(

render

);








return()=>{


Matter.Render.stop(render);



Matter.Runner.stop(runner);



Matter.Engine.clear(engine);




if(render.canvas){

render.canvas.remove();

}



};



},[]);
// =================================
// UPDATE MASSA BODY
// =================================


useEffect(()=>{


if(
blueBallRef.current
){


Matter.Body.setMass(

blueBallRef.current,

massBlue

);


}



if(
redBallRef.current
){


Matter.Body.setMass(

redBallRef.current,

massRed

);


}



},[

massBlue,

massRed

]);











// =================================
// INTERACTIVE MOTION TRACKING
// =================================


useEffect(()=>{


if(
!blueBallRef.current
)
return;




const ball =
blueBallRef.current;




const currentTime =
Date.now();



const deltaTime =

(
currentTime -
previousTime.current
)
/1000;



previousTime.current =
currentTime;






const deltaX =

handX -
previousHandX.current;



previousHandX.current =
handX;






setMovement(

Number(

deltaX.toFixed(4)

)

);






if(deltaTime > 0){



// =============================
// KECEPATAN TANGAN
// v = delta x / delta t
// =============================


const velocity =

deltaX /

deltaTime;



setHandVelocity(

Number(

velocity.toFixed(2)

)

);







// =============================
// PERCEPATAN
// a = delta v / delta t
// =============================


const acceleration =


(
velocity -
previousVelocity.current

)
/
deltaTime;



previousVelocity.current =
velocity;



setHandAcceleration(

Number(

acceleration.toFixed(2)

)

);







// =============================
// GAYA IMPULS
// F = m.a
// =============================


const calculatedForce =

massBlue *
acceleration;



setForce(

Number(

calculatedForce.toFixed(2)

)

);








// =============================
// IMPULS
// I = F.t
// =============================


const calculatedImpulse =

calculatedForce *
deltaTime;



setImpulse(

Number(

calculatedImpulse.toFixed(2)

)

);








// =============================
// GERAKKAN BOLA
// =============================



if(

running &&

Math.abs(deltaX)>0.001

){



Matter.Body.setVelocity(

ball,

{

x:

velocity,

y:

0

}

);





const momentumAwal =

massBlue *
velocity;



setInitialMomentum(

Number(

momentumAwal.toFixed(2)

)

);



}



}







// =============================
// MOMENTUM BOLA BIRU
// p = m.v
// =============================


const pBlue =

massBlue *
ball.velocity.x;



setMomentumBlue(

Number(

pBlue.toFixed(2)

)

);








// =============================
// MOMENTUM BOLA MERAH
// =============================



if(
redBallRef.current
){



const pRed =

massRed *
redBallRef.current.velocity.x;



setMomentumRed(

Number(

pRed.toFixed(2)

)

);



}







setSystemMomentum(

Number(

(
momentumBlue +
momentumRed

)
.toFixed(2)

)

);






},[

handX,

running,

massBlue,

massRed

]);











// =================================
// RESET EXPERIMENT
// =================================


function resetExperiment(){



if(

blueBallRef.current &&

redBallRef.current

){



Matter.Body.setPosition(

blueBallRef.current,

{

x:150,

y:150

}

);



Matter.Body.setVelocity(

blueBallRef.current,

{

x:0,

y:0

}

);






Matter.Body.setPosition(

redBallRef.current,

{

x:520,

y:150

}

);



Matter.Body.setVelocity(

redBallRef.current,

{

x:0,

y:0

}

);



}







setMomentumBlue(0);


setMomentumRed(0);


setSystemMomentum(0);


setInitialMomentum(0);


setFinalMomentum(0);


setImpulse(0);


setForce(0);


setCollisionCount(0);


}









// =================================
// TOTAL IMPULSE CHANGE
// =================================


const deltaMomentum =

Number(

(
finalMomentum -
initialMomentum

)
.toFixed(2)

);
// =================================
// USER INTERFACE
// =================================


return(


<div

className="
bg-white
rounded-2xl
shadow-xl
p-6
space-y-6
"

>



<h1

className="
text-3xl
font-bold
text-purple-700
"

>

⚛️ Virtual Laboratory
Momentum dan Impuls

</h1>





<p className="text-gray-700">

Laboratorium virtual berbasis Interactive Motion Tracking.
Gerakan tangan digunakan sebagai sumber impuls untuk menganalisis perubahan momentum.

</p>








{/* =========================
TUJUAN EKSPERIMEN
========================= */}



<div

className="
bg-purple-100
p-5
rounded-xl
"

>


<h2 className="font-bold text-xl">

🧪 Tujuan Eksperimen

</h2>



<ul className="list-disc ml-6 mt-3">


<li>
Menganalisis hubungan massa dan kecepatan terhadap momentum.
</li>


<li>
Mengamati pengaruh impuls terhadap perubahan momentum.
</li>


<li>
Menganalisis peristiwa tumbukan dua benda.
</li>


</ul>


</div>










{/* =========================
PARAMETER EKSPERIMEN
========================= */}



<div

className="
grid md:grid-cols-2 gap-5
"

>



<div

className="
bg-blue-100
p-5
rounded-xl
"

>


<h3 className="font-bold text-xl">

🔵 Bola Biru

</h3>




<label>

Massa Bola (kg)

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



</div>








<div

className="
bg-red-100
p-5
rounded-xl
"

>



<h3 className="font-bold text-xl">

🔴 Bola Merah

</h3>




<label>

Massa Bola (kg)

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


</div>



</div>









{/* =========================
HAND TRACKING CAMERA
========================= */}



<div>


<h2 className="font-bold text-xl mb-3">

📷 Interactive Motion Tracking

</h2>



<HandTracker

onMove={(x)=>{


setHandX(x);


}}


/>


</div>









{/* =========================
DATA POSISI
========================= */}



<div

className="
grid md:grid-cols-2 gap-4
"

>



<div

className="
bg-green-100
p-4
rounded-xl
"

>


<p>

Posisi Tangan

</p>



<h3 className="font-bold text-xl">

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


<p>

Perubahan Gerakan

</p>


<h3 className="font-bold text-xl">

{movement}

</h3>


</div>



</div>









{/* =========================
MOTION PHYSICS DATA
========================= */}



<div

className="
grid md:grid-cols-4 gap-4
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

{handVelocity}

m/s

</h3>


</div>







<div

className="
bg-green-100
p-4
rounded-xl
"

>


<p>

Percepatan

</p>


<h3 className="font-bold text-xl">

{handAcceleration}

m/s²

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

N

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

Impuls

</p>


<h3 className="font-bold text-xl">

{impulse}

Ns

</h3>


</div>


</div>









{/* =========================
CONTROL
========================= */}



<div

className="
flex gap-3
"

>



<button


onClick={()=>setRunning(true)}



className="
bg-green-600
text-white
px-5
py-2
rounded-xl
"



>

▶ Mulai Eksperimen

</button>







<button


onClick={()=>setRunning(false)}



className="
bg-yellow-500
text-white
px-5
py-2
rounded-xl
"



>

⏸ Pause

</button>







<button


onClick={resetExperiment}



className="
bg-red-600
text-white
px-5
py-2
rounded-xl
"



>

⟳ Reset

</button>



</div>









{/* =========================
SIMULASI
========================= */}



<div


ref={sceneRef}


className="
border
rounded-xl
overflow-hidden
"



/>









{/* =========================
HASIL PERHITUNGAN
========================= */}



<div

className="
grid md:grid-cols-4 gap-4
"

>



<div

className="
bg-blue-200
p-4
rounded-xl
"

>


<p>

Momentum Biru

</p>


<h3 className="font-bold text-xl">

{momentumBlue}

kg m/s

</h3>


</div>







<div

className="
bg-red-200
p-4
rounded-xl
"

>


<p>

Momentum Merah

</p>


<h3 className="font-bold text-xl">

{momentumRed}

kg m/s

</h3>


</div>







<div

className="
bg-green-200
p-4
rounded-xl
"

>


<p>

Momentum Sistem

</p>


<h3 className="font-bold text-xl">

{systemMomentum}

kg m/s

</h3>


</div>







<div

className="
bg-orange-200
p-4
rounded-xl
"

>


<p>

Δ Momentum

</p>


<h3 className="font-bold text-xl">

{deltaMomentum}

kg m/s

</h3>


</div>



</div>









{/* =========================
DATA EKSPERIMEN
========================= */



<div

className="
bg-slate-100
p-5
rounded-xl
"

>


<h2 className="font-bold text-xl">

📊 Data Hasil Eksperimen

</h2>




<p>

Jumlah tumbukan:

<b>

{" "}

{collisionCount}

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









{/* =========================
KPS
========================= */}



<div

className="
bg-yellow-100
p-5
rounded-xl
"

>


<h2 className="font-bold text-xl">

🔎 Keterampilan Proses Sains

</h2>



<ul className="
list-disc
ml-6
mt-3
space-y-2
">


<li>

<strong>Observasi:</strong>
Mengamati perubahan gerakan bola saat diberikan impuls.

</li>



<li>

<strong>Mengukur:</strong>
Menggunakan motion tracking untuk memperoleh data kecepatan dan momentum.

</li>



<li>

<strong>Menganalisis:</strong>
Membandingkan hubungan massa, kecepatan, impuls, dan momentum.

</li>



<li>

<strong>Menyimpulkan:</strong>
Menjelaskan hubungan impuls dengan perubahan momentum.

</li>



</ul>


</div>






</div>


);



}