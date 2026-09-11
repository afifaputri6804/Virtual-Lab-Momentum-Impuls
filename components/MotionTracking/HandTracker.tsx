"use client";


import { useEffect, useRef, useState } from "react";

import {
    FilesetResolver,
    HandLandmarker
} from "@mediapipe/tasks-vision";



interface Props {

    onMove: (x:number)=>void;

}



export default function HandTracker({

    onMove

}:Props){


    const videoRef =
    useRef<HTMLVideoElement | null>(null);


    const [handPosition,setHandPosition]
    =
    useState(0);



    useEffect(()=>{


        let handLandmarker:
        HandLandmarker | null = null;



        async function initialize(){


            try{


                // ======================
                // AKTIFKAN CAMERA
                // ======================


                const stream =
                await navigator.mediaDevices.getUserMedia({

                    video:{
                        width:640,
                        height:480,
                        facingMode:"user"
                    }

                });



                if(videoRef.current){

                    videoRef.current.srcObject =
                    stream;

                }




                // ======================
                // LOAD MEDIAPIPE MODEL
                // ======================


                const vision =
                await FilesetResolver.forVisionTasks(

                    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"

                );



                handLandmarker =
                await HandLandmarker.createFromOptions(

                    vision,

                    {

                        baseOptions:{

                            modelAssetPath:

                            "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task"

                        },


                        runningMode:"VIDEO",


                        numHands:1

                    }

                );



                console.log(
                    "MediaPipe Hand Tracking Aktif"
                );



                detectHand();



            }

            catch(error){

                console.error(
                    "Hand Tracking Error:",
                    error
                );

            }


        }





        function detectHand(){


            if(

                !videoRef.current ||

                !handLandmarker

            ){

                requestAnimationFrame(detectHand);

                return;

            }




            const result =

            handLandmarker.detectForVideo(

                videoRef.current,

                performance.now()

            );





            if(

                result.landmarks &&

                result.landmarks.length > 0

            ){


                // landmark nomor 8 = ujung telunjuk

                const indexFinger =

                result.landmarks[0][8];



                const x =

                indexFinger.x;



                console.log(
                    "Posisi tangan X:",
                    x
                );



                setHandPosition(x);



                // kirim ke physics

                onMove(x);



            }



            requestAnimationFrame(
                detectHand
            );



        }





        initialize();



    },[onMove]);







    return(

        <div className="
        space-y-4
        ">


            <h3 className="
            font-bold
            text-lg
            ">

            🖐 AI Hand Tracking Camera

            </h3>




            <video

                ref={videoRef}

                autoPlay

                playsInline

                muted

                width="400"

                className="
                rounded-xl
                border
                shadow
                "

            />





            <div className="
            bg-blue-100
            p-3
            rounded-xl
            ">


                <p>

                Posisi Telunjuk X:

                </p>


                <b>

                {handPosition.toFixed(3)}

                </b>


            </div>





        </div>

    );


}