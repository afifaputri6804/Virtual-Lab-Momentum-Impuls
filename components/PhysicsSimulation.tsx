"use client";

import { useState } from "react";
import { motion } from "framer-motion";


export default function PhysicsSimulation() {


  const [massaA, setMassaA] = useState(2);
  const [kecepatanA, setKecepatanA] = useState(5);


  const [massaB, setMassaB] = useState(3);
  const [kecepatanB, setKecepatanB] = useState(-2);


  const [hasil, setHasil] = useState<any>(null);


  const [animasi, setAnimasi] = useState(false);



  function hitungTumbukan() {


    setAnimasi(false);


    setTimeout(() => {

      setAnimasi(true);

    },100);



    const m1 = Number(massaA);
    const v1 = Number(kecepatanA);


    const m2 = Number(massaB);
    const v2 = Number(kecepatanB);



    // Momentum awal

    const momentumAwal =
      (m1 * v1) +
      (m2 * v2);



    // Kecepatan akhir tumbukan elastis

    const v1Akhir =
      (
        ((m1 - m2) * v1)
        +
        (2 * m2 * v2)

      )
      /
      (m1 + m2);



    const v2Akhir =
      (
        ((m2 - m1) * v2)
        +
        (2 * m1 * v1)

      )
      /
      (m1 + m2);



    // Momentum akhir

    const momentumAkhir =
      (m1 * v1Akhir)
      +
      (m2 * v2Akhir);



    const valid =
      Math.abs(momentumAwal - momentumAkhir) < 0.01;



    const data = {


      massaA:m1,

      kecepatanA:v1,


      massaB:m2,

      kecepatanB:v2,


      momentumAwal,

      momentumAkhir,


      kecepatanAkhirA:v1Akhir,

      kecepatanAkhirB:v2Akhir,


      status: valid
      ?
      "Hukum Kekekalan Momentum Terpenuhi"
      :
      "Perhitungan Tidak Sesuai"


    };



    setHasil(data);



    localStorage.setItem(

      "dataEksperimen",

      JSON.stringify(data)

    );


  }





  function reset(){


    setMassaA(2);

    setKecepatanA(5);


    setMassaB(3);

    setKecepatanB(-2);


    setHasil(null);


    setAnimasi(false);


  }





  return (


    <div className="space-y-6">



      {/* INPUT BENDA */}



      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">



        <div className="rounded-3xl bg-blue-50 p-6">


          <h3 className="text-xl font-bold text-blue-700">

            🔵 Benda A

          </h3>



          <label className="mt-4 block">

            Massa (kg)

          </label>



          <input

            type="number"

            value={massaA}

            onChange={(e)=>
              setMassaA(Number(e.target.value))
            }

            className="mt-2 w-full rounded-xl border bg-white p-3"

          />



          <label className="mt-4 block">

            Kecepatan (m/s)

          </label>



          <input

            type="number"

            value={kecepatanA}

            onChange={(e)=>
              setKecepatanA(Number(e.target.value))
            }

            className="mt-2 w-full rounded-xl border bg-white p-3"

          />



        </div>





        <div className="rounded-3xl bg-red-50 p-6">


          <h3 className="text-xl font-bold text-red-700">

            🔴 Benda B

          </h3>



          <label className="mt-4 block">

            Massa (kg)

          </label>



          <input

            type="number"

            value={massaB}

            onChange={(e)=>
              setMassaB(Number(e.target.value))
            }

            className="mt-2 w-full rounded-xl border bg-white p-3"

          />



          <label className="mt-4 block">

            Kecepatan (m/s)

          </label>



          <input

            type="number"

            value={kecepatanB}

            onChange={(e)=>
              setKecepatanB(Number(e.target.value))
            }

            className="mt-2 w-full rounded-xl border bg-white p-3"

          />


        </div>



      </div>





      {/* ANIMASI */}



      <div className="rounded-3xl bg-gradient-to-r from-indigo-50 to-blue-50 p-8">


        <h3 className="text-center text-xl font-bold">

          🚀 Virtual Collision Lab

        </h3>



        <div className="relative mt-8 h-36 overflow-hidden rounded-2xl bg-white">



          <motion.div


            animate={

              animasi

              ?

              {
                x:120
              }

              :

              {
                x:0
              }

            }


            transition={

              {
                duration:1
              }

            }


            className="absolute left-10 top-10 text-5xl"

          >

            🔵


          </motion.div>





          <motion.div


            animate={

              animasi

              ?

              {
                x:-120
              }

              :

              {
                x:0
              }

            }


            transition={

              {
                duration:1
              }

            }


            className="absolute right-10 top-10 text-5xl"

          >

            🔴


          </motion.div>



        </div>



        <p className="mt-4 text-center text-gray-600">


          {

          animasi

          ?

          "💥 Tumbukan sedang berlangsung"

          :

          "Tekan Mulai Simulasi"

          }


        </p>



      </div>






      {/* HASIL */}



      {

      hasil &&

      (

      <div className="rounded-3xl bg-green-50 p-6">


        <h3 className="text-xl font-bold text-green-700">

          📊 Hasil Eksperimen

        </h3>



        <div className="mt-4 space-y-2">


          <p>

          Momentum Awal:

          <b>

          {" "}

          {hasil.momentumAwal.toFixed(2)}

          {" "}

          kg m/s

          </b>

          </p>



          <p>

          Momentum Akhir:

          <b>

          {" "}

          {hasil.momentumAkhir.toFixed(2)}

          {" "}

          kg m/s

          </b>

          </p>



          <p>

          Kecepatan akhir A:

          <b>

          {" "}

          {hasil.kecepatanAkhirA.toFixed(2)}

          {" "}

          m/s

          </b>

          </p>



          <p>

          Kecepatan akhir B:

          <b>

          {" "}

          {hasil.kecepatanAkhirB.toFixed(2)}

          {" "}

          m/s

          </b>

          </p>



          <p className="mt-4 font-bold">


          {

          hasil.status ===
          "Hukum Kekekalan Momentum Terpenuhi"

          ?

          "✅ Hukum Kekekalan Momentum Terpenuhi"

          :

          "❌ Periksa Perhitungan"

          }


          </p>



        </div>


      </div>


      )

      }





      {/* BUTTON */}



      <div className="flex justify-center gap-4">



        <button


          onClick={hitungTumbukan}


          className="rounded-xl bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700"


        >

          Mulai Simulasi


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