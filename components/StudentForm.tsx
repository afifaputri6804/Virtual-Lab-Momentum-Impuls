"use client";

import { useState } from "react";


interface StudentFormProps {

  onStudentChange: (data:{
    nama:string;
    kelas:string;
    absen:string;
  })=>void;

}



export default function StudentForm(
{
onStudentChange

}:StudentFormProps
){



const [nama,setNama]=useState("");

const [kelas,setKelas]=useState("");

const [absen,setAbsen]=useState("");



function updateStudent(){


onStudentChange({

nama:nama,

kelas:kelas,

absen:absen

});


}





return(


<div className="rounded-xl bg-white p-6 shadow">


<h2 className="text-2xl font-bold text-blue-700">

Identitas Siswa

</h2>




<div className="mt-5">


<label>

Nama Siswa

</label>


<input

className="mt-2 w-full rounded border p-3"

value={nama}

placeholder="Masukkan nama"

onChange={(e)=>{

setNama(e.target.value);

updateStudent();

}}

/>


</div>





<div className="mt-4">


<label>

Kelas

</label>


<input

className="mt-2 w-full rounded border p-3"

value={kelas}

placeholder="XI IPA 1"

onChange={(e)=>{

setKelas(e.target.value);

updateStudent();

}}

/>


</div>





<div className="mt-4">


<label>

Nomor Absen

</label>


<input

className="mt-2 w-full rounded border p-3"

value={absen}

onChange={(e)=>{

setAbsen(e.target.value);

updateStudent();

}}

/>


</div>



</div>


);


}