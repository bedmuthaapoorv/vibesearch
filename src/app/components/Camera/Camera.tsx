"use client"
import Webcam, { FacingMode } from '@eduardosmarcal/webcam-easy';
import { useEffect, useState } from 'react';
export default function Camera() {
    let webcamElement:HTMLVideoElement;
    let canvasElement:HTMLCanvasElement;
    let snapSoundElement:HTMLAudioElement;
    let [webcam, setWebcam] = useState<Webcam | null>(null);
    let [facingMode, setFacingMode]=useState<FacingMode>('user')
    useEffect(() => {
        webcamElement = document.getElementById('webcam') as HTMLVideoElement;
        canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
        snapSoundElement = document.getElementById('snapSound') as HTMLAudioElement;
        if(!webcam) setWebcam(new Webcam(webcamElement, facingMode, canvasElement, snapSoundElement));
    })
    
    
    function startWebcam() {
            console.log("in start")
            if (webcam != null) {
                webcam.start()
                .then(result => {
                    console.log("webcam started");
                })
                .catch(err => {
                    console.log(err);
                })
            }
    }
    function stopWebcam(){
        console.log("in stop")
        if (webcam != null) { webcam.stop(); }
    }
    function flipWebcam(){
        console.log("flipping webcam")
        if (webcam != null) { 
            if(facingMode=='user'){
                setFacingMode('environment')
            }else{
                setFacingMode('user')
            }
        }
    }
    //
    return <div>
        <video id="webcam" autoPlay={true} playsInline={true} width="640" height="480"></video>
        <canvas id="canvas" className="d-none"></canvas>
        <audio id="snapSound" src="audio/snap.wav" preload="auto"></audio>
        <button onClick={()=>{
            startWebcam()
        }}>start webcam</button>
        <button onClick={()=>{
            stopWebcam()
        }}>stop webcam</button>
        <button onClick={()=>{
            flipWebcam()
        }}>flip</button>        
    </div>
}