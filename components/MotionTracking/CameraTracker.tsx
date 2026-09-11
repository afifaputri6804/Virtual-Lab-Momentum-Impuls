"use client";

import { useEffect, useRef } from "react";


export default function CameraTracker(){

const videoRef = useRef<HTMLVideoElement>(null);


useEffect(()=>{


navigator.mediaDevices
.getUserMedia({
video:true
})
.then(stream=>{

if(videoRef.current){

videoRef.current.srcObject = stream;

}

});


},[]);



return(

<div>

<h2>
Motion Tracking Camera
</h2>


<video

ref={videoRef}

autoPlay

playsInline

width="400"

/>


</div>


)

}