"use client";


import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



export default function Navbar(){


const router = useRouter();


const [role,setRole] = useState<string | null>(null);

const [menu,setMenu] = useState(false);





useEffect(()=>{


setRole(

localStorage.getItem("role")

);


},[]);






function logout(){


localStorage.removeItem("role");

localStorage.removeItem("nama");


router.push("/login");


}





return (



<nav className="border-b bg-white shadow-sm">



<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">







{/* LOGO */}



<Link

href="/"

className="flex items-center gap-3"

>


<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-xl font-bold text-white">

MT

</div>



<div>


<h1 className="font-bold text-blue-700 text-xl">

MOMENTRACK

</h1>


<p className="hidden text-xs text-gray-500 sm:block">

Virtual Laboratory

</p>


</div>



</Link>









{/* BUTTON MOBILE */}



<button


onClick={()=>setMenu(!menu)}


className="rounded-lg bg-blue-600 px-3 py-2 text-white md:hidden"


>


☰


</button>









{/* DESKTOP MENU */}



<div className="hidden items-center gap-5 md:flex">





<Link href="/">

Beranda

</Link>




<Link href="/materi">

Materi

</Link>




<Link href="/virtual-lab">

Virtual Lab

</Link>





{

role==="siswa" &&

<>



<Link href="/eksperimen">

Eksperimen

</Link>



<Link href="/evaluasi">

Evaluasi

</Link>



<Link href="/dashboard-siswa">

Dashboard

</Link>



</>


}





{

role==="guru" &&


<Link href="/dashboard-guru">

Dashboard Guru

</Link>



}





{

role &&


<Link href="/profil">

Profil

</Link>


}





{

role ?


<button

onClick={logout}

className="rounded-xl bg-red-500 px-4 py-2 text-white"

>

Keluar

</button>


:


<Link

href="/login"

className="rounded-xl bg-blue-600 px-4 py-2 text-white"

>

Login

</Link>


}



</div>





</div>









{/* MOBILE MENU */}



{

menu && (


<div className="flex flex-col gap-4 border-t bg-white px-6 py-5 md:hidden">





<Link href="/" onClick={()=>setMenu(false)}>

Beranda

</Link>




<Link href="/materi" onClick={()=>setMenu(false)}>

Materi

</Link>




<Link href="/virtual-lab" onClick={()=>setMenu(false)}>

Virtual Lab

</Link>







{

role==="siswa" &&

<>


<Link href="/eksperimen" onClick={()=>setMenu(false)}>

Eksperimen

</Link>



<Link href="/evaluasi" onClick={()=>setMenu(false)}>

Evaluasi

</Link>



<Link href="/dashboard-siswa" onClick={()=>setMenu(false)}>

Dashboard

</Link>


</>


}







{

role==="guru" &&


<Link href="/dashboard-guru" onClick={()=>setMenu(false)}>

Dashboard Guru

</Link>


}





{

role &&


<Link href="/profil" onClick={()=>setMenu(false)}>

Profil

</Link>


}






{

role ?


<button

onClick={logout}

className="rounded-xl bg-red-500 px-4 py-2 text-white"

>

Keluar

</button>


:


<Link

href="/login"

className="rounded-xl bg-blue-600 px-4 py-2 text-white"

>

Login

</Link>


}



</div>


)

}





</nav>


);


}