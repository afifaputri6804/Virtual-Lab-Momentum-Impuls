"use client";

import { useState } from "react";
import Link from "next/link";


export default function Evaluasi(){


  const [jawaban,setJawaban] = useState<string[]>([]);
  const [nilai,setNilai] = useState<number | null>(null);



  const soal = [

    {
      pertanyaan:
      "Sebuah benda bermassa 2 kg bergerak dengan kecepatan 5 m/s. Berapakah momentumnya?",

      pilihan:[
        "5 kg m/s",
        "10 kg m/s",
        "15 kg m/s",
        "20 kg m/s"
      ],

      benar:"10 kg m/s"

    },


    {
      pertanyaan:
      "Rumus momentum yang benar adalah?",

      pilihan:[
        "p = m × v",
        "p = F × t",
        "p = m × a",
        "p = v × t"
      ],

      benar:"p = m × v"

    },


    {
      pertanyaan:
      "Impuls merupakan perubahan dari?",

      pilihan:[
        "Energi",
        "Gaya",
        "Momentum",
        "Massa"
      ],

      benar:"Momentum"

    },


    {
      pertanyaan:
      "Satuan SI momentum adalah?",

      pilihan:[
        "Newton",
        "Joule",
        "kg m/s",
        "Watt"
      ],

      benar:"kg m/s"

    },


    {
      pertanyaan:
      "Jika kecepatan benda bertambah maka momentum akan?",

      pilihan:[
        "Berkurang",
        "Tetap",
        "Bertambah",
        "Menjadi nol"
      ],

      benar:"Bertambah"

    }

  ];




  function pilihJawaban(
    nomor:number,
    pilihan:string
  ){


    const data = [...jawaban];

    data[nomor] = pilihan;

    setJawaban(data);


  }







  function cekNilai(){


    let skor = 0;



    soal.forEach((item,index)=>{


      if(jawaban[index] === item.benar){

        skor += 20;

      }


    });




    setNilai(skor);





    // Menyimpan nilai untuk dashboard siswa

    localStorage.setItem(
      "nilai",
      skor.toString()
    );






    // Menyimpan data aktivitas siswa untuk dashboard guru

    const dataSiswa = {


      nama:
      localStorage.getItem("nama") || "Siswa Fisika",



      nilai:
      skor,



      status:
      "Evaluasi selesai",



      tanggal:
      new Date().toLocaleDateString()



    };





    localStorage.setItem(

      "dataSiswa",

      JSON.stringify(dataSiswa)

    );



  }









  return (

    <main className="min-h-screen bg-slate-100 p-10">


      <section className="mx-auto max-w-5xl">



        <h1 className="text-4xl font-bold text-blue-700">

          Evaluasi MOMENTRACK

        </h1>




        <p className="mt-3 text-gray-700">

          Evaluasi dilakukan setelah siswa menyelesaikan
          materi dan Virtual Laboratory Momentum dan Impuls.

        </p>







        {
          soal.map((item,index)=>(



            <div

              key={index}

              className="mt-8 rounded-xl bg-white p-6 shadow"

            >


              <h2 className="text-lg font-bold">


                {index + 1}. {item.pertanyaan}


              </h2>






              <div className="mt-4 space-y-3">



                {
                  item.pilihan.map((pilihan)=>(



                    <label

                      key={pilihan}

                      className="block cursor-pointer"

                    >


                      <input

                        type="radio"

                        name={`soal-${index}`}


                        onChange={()=>{

                          pilihJawaban(
                            index,
                            pilihan
                          )


                        }}


                        className="mr-3"


                      />


                      {pilihan}



                    </label>




                  ))
                }



              </div>




            </div>




          ))
        }







        <button


          onClick={cekNilai}


          className="mt-10 rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"


        >

          Selesai Evaluasi


        </button>







        {
          nilai !== null && (



            <div className="mt-8 rounded-xl bg-green-100 p-8">



              <h2 className="text-3xl font-bold text-green-700">


                Nilai Akhir:
                {" "}
                {nilai}/100


              </h2>




              <p className="mt-3">


                Data evaluasi berhasil tersimpan.


              </p>





              <Link


                href="/dashboard-siswa"


                className="mt-5 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white"


              >

                Kembali Dashboard


              </Link>



            </div>



          )
        }




      </section>


    </main>


  );


}