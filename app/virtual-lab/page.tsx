"use client";


import {
useState
} from "react";



import MomentumCollision
from "@/components/Physics/MomentumCollision";



import ExperimentControl
from "@/components/Physics/ExperimentControl";



import MotionDataPanel
from "@/components/Physics/MotionDataPanel";



import MomentumResult
from "@/components/Physics/MomentumResult";



import KPSPanel
from "@/components/Physics/KPSPanel";






export default function VirtualLabPage(){



// =================================
// EXPERIMENT STATE
// =================================


const [massBlue,setMassBlue]=
useState(2);



const [massRed,setMassRed]=
useState(1);



const [velocityBlue,setVelocityBlue]=
useState(3);



const [velocityRed,setVelocityRed]=
useState(0);



const [collisionType,setCollisionType]=
useState(
"elastis"
);






// =================================
// MOTION DATA
// =================================


const [handX,setHandX]=
useState(0.5);



const [movement,setMovement]=
useState(0);



const [velocity,setVelocity]=
useState(0);



const [acceleration,setAcceleration]=
useState(0);



const [force,setForce]=
useState(0);



const [impulse,setImpulse]=
useState(0);







// =================================
// MOMENTUM RESULT
// =================================


const [momentumBlue,setMomentumBlue]=
useState(0);



const [momentumRed,setMomentumRed]=
useState(0);



const [systemMomentum,setSystemMomentum]=
useState(0);



const [initialMomentum,setInitialMomentum]=
useState(0);



const [finalMomentum,setFinalMomentum]=
useState(0);



const [collisionCount,setCollisionCount]=
useState(0);







// =================================
// KPS
// =================================



const [
observation,
setObservation
]=
useState("");



const [
measurement,
setMeasurement
]=
useState("");



const [
analysis,
setAnalysis
]=
useState("");



const [
conclusion,
setConclusion
]=
useState("");









return(

<main

className="
min-h-screen
bg-slate-100
p-6
space-y-6
"

>


<h1

className="
text-4xl
font-bold
text-center
text-purple-700
"

>

⚛️ Virtual Laboratory
Momentum dan Impuls

</h1>







<ExperimentControl


massBlue={massBlue}


massRed={massRed}


velocityBlue={velocityBlue}


velocityRed={velocityRed}


collisionType={collisionType}



setMassBlue={setMassBlue}


setMassRed={setMassRed}


setVelocityBlue={setVelocityBlue}


setVelocityRed={setVelocityRed}


setCollisionType={setCollisionType}



/>









<MomentumCollision />










<MotionDataPanel


handX={handX}


movement={movement}


velocity={velocity}


acceleration={acceleration}


force={force}


impulse={impulse}


/>










<MomentumResult


momentumBlue={momentumBlue}


momentumRed={momentumRed}


systemMomentum={systemMomentum}


initialMomentum={initialMomentum}


finalMomentum={finalMomentum}


collisionCount={collisionCount}



/>









<KPSPanel


observation={observation}


measurement={measurement}


analysis={analysis}


conclusion={conclusion}



setObservation={setObservation}


setMeasurement={setMeasurement}


setAnalysis={setAnalysis}


setConclusion={setConclusion}


/>








</main>


);


}