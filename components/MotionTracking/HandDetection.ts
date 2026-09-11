"use client";

import { useState, useEffect, useRef } from "react";
import HandTracker from "@/components/MotionTracking/HandTracker";


export default function PhysicsSimulation(){


    // posisi tangan dari kamera
    const [handX,setHandX] = useState(0.5);


    // posisi bola
    const [ballPosition,setBallPosition] = useState(50);


    // kecepatan bola
    const [velocity,setVelocity] = useState(0);


    // massa benda
    const [mass,setMass] = useState(2);


    // momentum
    const [momentum,setMomentum] = useState(0);



    const previousX = useRef(0.5);



    // membaca gerakan tangan
    useEffect(()=>{


        const movement =
        handX - previousX.current;


        previousX.current = handX;



        // konversi gerakan tangan menjadi velocity

        let speed =
        movement * 100;



        setVelocity(speed);



        // gerakkan bola

        setBallPosition(prev=>{


            let newPosition =
            prev + speed;



            if(newPosition > 90){

                newPosition=90;

            }


            if(newPosition <10){

                newPosition=10;

            }


            return newPosition;


        });



        // hitung momentum

        let p =
        mass * Math.abs(speed);



        setMomentum(
            Number(p.toFixed(2))
        );



    },[handX]);






return (

<div className="
w-full
rounded-2xl
bg-white
shadow-xl
p-6
space-y-6
">


<h2 className="
text-2xl
font-bold
text-blue-700
">

⚛️ Physics Motion Lab

</h2>



<p className="
text-gray-600
">

Gerakkan tangan ke kiri dan kanan.
Posisi tangan akan mengendalikan bola virtual.

</p>





{/* CAMERA */}

<div className="
grid
md:grid-cols-2
gap-6
">


<div>


<h3 className="
font-semibold
mb-2
">

🖐 Motion Tracking Camera

</h3>


<HandTracker

onMove={(x)=>{

setHandX(x)

}}

/>


</div>





{/* SIMULASI */}

<div>


<h3 className="
font-semibold
mb-2
">

🎯 Momentum Simulation

</h3>



<div className="
relative
h-40
bg-gray-100
rounded-xl
overflow-hidden
border
">


<div

style={{

left:`${ballPosition}%`

}}


className="
absolute
top-16
w-12
h-12
rounded-full
bg-blue-600
transition-all
duration-100
"


>

</div>


</div>



</div>


</div>






{/* DATA */}

<div className="
grid
grid-cols-2
md:grid-cols-4
gap-4
">


<div className="
bg-blue-50
p-4
rounded-xl
">


<p className="
text-sm
">

Posisi Tangan

</p>


<b>

{handX.toFixed(2)}

</b>


</div>




<div className="
bg-green-50
p-4
rounded-xl
">


<p className="
text-sm
">

Kecepatan

</p>


<b>

{velocity.toFixed(2)}
m/s

</b>


</div>





<div className="
bg-yellow-50
p-4
rounded-xl
">


<p className="
text-sm
">

Massa

</p>


<b>

{mass}
kg

</b>


</div>





<div className="
bg-purple-50
p-4
rounded-xl
">


<p className="
text-sm
">

Momentum

</p>


<b>

{momentum}
kg m/s

</b>


</div>



</div>





{/* INPUT MASSA */}

<div>


<label className="
font-semibold
">

Massa benda (kg)

</label>



<input

type="number"

value={mass}

onChange={(e)=>
setMass(
Number(e.target.value)
)
}


className="
border
rounded-lg
p-2
ml-3
w-24
"


/>


</div>



</div>


);


}