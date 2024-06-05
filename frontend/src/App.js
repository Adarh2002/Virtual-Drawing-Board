import React, { useState, useRef, useEffect  } from 'react';
import Nav from './components/Nav'
import Greet from './components/Greet'
import Tbody from './components/Tbody';
import axios from 'axios';
// import Mbody from './components/Mbody'

const App = () => {
  const [videoSrc, setVideoSrc] = useState('');
  const [whitebgsrc, setWhitebgsrc] = useState('');
  const videoRef = useRef(null);
  const whiteVideoRef = useRef(null);


  const handleStartDrawing = () => {
    setVideoSrc('http://127.0.0.1:5000/video_feed');
  };

  const handlewhitecanvas = () => {
    setWhitebgsrc('http://127.0.0.1:5000/whiteimg');
  };

  // useEffect(() => {
  //   videoRef.current.src = 'http://localhost:5000/video_feed';
  //   whiteVideoRef.current.src = 'http://localhost:5000/whiteimg';
  // }, []);

  const downloadScreenshot = async () => {
    try {
      const response = await fetch('http://localhost:5000/save_screenshot', {
        method: 'POST',
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'screenshot.jpg';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download screenshot');
      }
    } catch (error) {
      console.error('Error during download:', error);
    }
  };


  return (
    <>
      <div className='min-h-screen bg-white'>
        <Nav />
        <Greet />
        <Tbody />
        <div className='flex flex-col items-center justify-center m-20 p-10 text-black rounded border border-s-gray-300'>
          <div id="painting-container" className='p-20 border-2 border-sky-950'>
            {videoSrc && <img id="painting-image" src={videoSrc} alt="Virtual Painting" />}
          </div>
          <button
            onClick={handleStartDrawing}
            className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded'
          >Start Drawing</button>
          <br></br>



          <div id="painting-container" className='p-20 border-2 border-sky-950'>
            {videoSrc && <img id="painting-image" src={whitebgsrc} alt="Virtual Painting" />}
          </div>
          <button
            onClick={handlewhitecanvas}
            className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded'
          > View </button>

          <div className='flex justify-center  p-4'>
            {/* <div>
                <img ref={videoRef} alt="Live Video Feed" style={{ width: '640px', height: '480px' }} className='p-4 border-2 border-blue-300'/>
                <img ref={whiteVideoRef} alt="White Image Feed" style={{ width: '640px', height: '480px' }} className='p-4 border-2 border-blue-300' />
            </div> */}
            <button onClick={downloadScreenshot}
            className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded'
            >Download Screenshot</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
