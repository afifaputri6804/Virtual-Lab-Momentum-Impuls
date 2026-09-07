"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";


export default function CollisionSimulation() {


  const scene = useRef<HTMLDivElement>(null);


  const [massaA, setMassaA] = useState(2);
  const [massaB, setMassaB] = useState(3);


  const [kecepatanA, setKecepatanA] = useState(5);
  const [kecepatanB, setKecepatanB] = useState(0);


  const [momentumAwal, setMomentumAwal] = useState(0);
  const [momentumAkhir, setMomentumAkhir] = useState(0);



  function mulaiTumbukan(){


    const awal =
      (massaA * kecepatanA)
      +
      (massaB * kecepatanB);


    setMomentumAwal(awal);



    // simulasi sederhana kekekalan momentum

    setTimeout(()=>{


      setMomentumAkhir(awal);


    },1500);



  }




  useEffect(()=>{


    if(!scene.current) return;



    const engine = Matter.Engine.create();


    const render = Matter.Render.create({

      element:scene.current,

      engine:engine,

      options:{

        width:800,

        height:300,

        background:"#f8fafc",

        wireframes:false

      }

    });





    const bendaA = Matter.Bodies.circle(

      180,

      150,

      35,

      {

        restitution:1,

        render:{

          fillStyle:"#2563eb"

        }

      }

    );





    const bendaB = Matter.Bodies.circle(

      600,

      150,

      35,

      {

        restitution:1,

        render:{

          fillStyle:"#dc2626"

        }

      }

    );






    Matter.Composite.add(

      engine.world,

      [

        bendaA,

        bendaB

      ]

    );





    Matter.Body.setVelocity(

      bendaA,

      {

        x:kecepatanA,

        y:0

      }

    );





    const runner = Matter.Runner.create();


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

      render.canvas.remove();


    };



  },[]);







return (

<div>


<h2 className="text-2xl font-bold mb-5">

Simulasi Tumbukan Dua Benda

</h2>




<div ref={scene}></div>





<div className="mt-6 grid grid-cols-2 gap-5">


<div className="rounded-xl bg-blue-50 p-5">


<h3 className="font-bold text-blue-700">

Benda A 🔵

</h3>



<label>

Massa A (kg)

</label>


<input

type="number"

value={massaA}

onChange={(e)=>
setMassaA(Number(e.target.value))
}

className="mt-2 w-full rounded border p-2"

/>





<label className="mt-3 block">

Kecepatan A (m/s)

</label>


<input

type="number"

value={kecepatanA}

onChange={(e)=>
setKecepatanA(Number(e.target.value))
}

className="mt-2 w-full rounded border p-2"

/>


</div>






<div className="rounded-xl bg-red-50 p-5">


<h3 className="font-bold text-red-700">

Benda B 🔴

</h3>



<label>

Massa B (kg)

</label>


<input

type="number"

value={massaB}

onChange={(e)=>
setMassaB(Number(e.target.value))
}

className="mt-2 w-full rounded border p-2"

/>





<label className="mt-3 block">

Kecepatan B (m/s)

</label>


<input

type="number"

value={kecepatanB}

onChange={(e)=>
setKecepatanB(Number(e.target.value))
}

className="mt-2 w-full rounded border p-2"

/>


</div>


</div>







<button

onClick={mulaiTumbukan}

className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-white"

>

Mulai Tumbukan

</button>







<div className="mt-6 rounded-xl bg-yellow-50 p-5">


<p>

Momentum Awal :

<b>
{" "}
{momentumAwal} kg m/s
</b>

</p>




<p>

Momentum Akhir :

<b>
{" "}
{momentumAkhir} kg m/s
</b>

</p>



</div>



</div>

);


}