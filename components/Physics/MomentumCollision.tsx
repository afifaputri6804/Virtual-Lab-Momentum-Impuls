"use client";


import { useEffect, useRef, useState } from "react";

import Matter from "matter-js";

import HandTracker from "@/components/MotionTracking/HandTracker";



export default function MomentumCollision(){


const sceneRef =
useRef<HTMLDivElement|null>(null);


const blueBallRef =
useRef<Matter.Body|null>(null);


const redBallRef =
useRef<Matter.Body|null>(null);


const engineRef =
useRef<Matter.Engine|null>(null);


const runnerRef =
useRef<Matter.Runner|null>(null);



const previousHandX =
useRef(0.5);




const [handX,setHandX] =
useState(0.5);


const [movement,setMovement] =
useState(0);



const [momentumBlue,setMomentumBlue] =
useState(0);


const [momentumRed,setMomentumRed] =
useState(0);



const [running,setRunning] =
useState(false);



const massBlue = 2;

const massRed = 1;





// =================================
// CREATE PHYSICS WORLD
// =================================


useEffect(()=>{


if(!sceneRef.current)
return;



const engine =
Matter.Engine.create();


engine.gravity.y=0;


engineRef.current =
engine;




const render =
Matter.Render.create({

element:sceneRef.current,

engine,

options:{

width:700,

height:300,

wireframes:false,

background:"#f8fafc"

}

});






const blueBall =
Matter.Bodies.circle(

150,

150,

35,

{

mass:massBlue,

restitution:1,

frictionAir:0.01,


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

console.log(
"Collision terjadi"
);

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
// HAND CONTROL
// =================================


useEffect(()=>{


if(!blueBallRef.current)
return;



const ball =
blueBallRef.current;




const delta =

handX -

previousHandX.current;



previousHandX.current =
handX;



setMovement(delta);






if(

running &&

Math.abs(delta)>0.001

){



const speed =
delta*40;





Matter.Body.setVelocity(

ball,

{

x:speed,

y:0

}

);





Matter.Body.setPosition(

ball,

{

x:
ball.position.x + speed,

y:
ball.position.y

}

);



}






const pBlue =

massBlue *

ball.velocity.x;



setMomentumBlue(

Number(

pBlue.toFixed(2)

)

);







if(redBallRef.current){



const pRed =

massRed *

redBallRef.current.velocity.x;



setMomentumRed(

Number(

pRed.toFixed(2)

)

);



}



},[handX,running]);








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


}







return(


<div className="
bg-white
rounded-2xl
shadow-xl
p-6
space-y-5
">


<h2 className="
text-3xl
font-bold
text-purple-700
">

⚛️ Motion Tracking Collision Lab

</h2>



<p>

Klik mulai kemudian gerakkan tangan untuk memberi impuls.

</p>





<HandTracker

onMove={(x)=>{

setHandX(x);

}}

/>







<div className="
grid
grid-cols-2
gap-4
">


<div className="
bg-green-100
p-3
rounded-xl
">

Posisi tangan:

<b>

{handX.toFixed(3)}

</b>


</div>



<div className="
bg-yellow-100
p-3
rounded-xl
">

Gerakan:

<b>

{movement.toFixed(4)}

</b>


</div>


</div>







<div className="
flex
gap-3
">


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

▶ Mulai

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









<div

ref={sceneRef}

className="
border
rounded-xl
overflow-hidden
"

/>







<div className="
grid
md:grid-cols-2
gap-4
">



<div className="
bg-blue-100
p-5
rounded-xl
">


<h3 className="font-bold">

🔵 Bola Biru

</h3>


<p>

Massa: 2 kg

</p>


<p>

Momentum:

{momentumBlue}

kg m/s

</p>


</div>






<div className="
bg-red-100
p-5
rounded-xl
">


<h3 className="font-bold">

🔴 Bola Merah

</h3>


<p>

Massa: 1 kg

</p>


<p>

Momentum:

{momentumRed}

kg m/s

</p>


</div>



</div>





</div>


);


}