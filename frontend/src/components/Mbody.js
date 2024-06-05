import React, { useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';

function App() {
  const [videoSrc, setVideoSrc] = useState('');
  const canvasRef = useRef(null);

  const handleStartDrawing = () => {
    setVideoSrc('/video_feed');
  };

  const handleSaveDrawing = () => {
    const canvas = canvasRef.current;
    const imgData = canvas.toDataURL('image/jpeg');

    // Send the image data to the server for saving
    axios.post('/save_drawing', { img_data: imgData })
      .then(response => {
        console.log(response.data); // Log the response from the server
        // Optionally show a success message to the user
      })
      .catch(error => {
        console.error('Error saving drawing:', error);
        // Optionally show an error message to the user
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <h1>Virtual Board</h1>
        <div className='flex items-center justify-center'>
          <button
            onClick={handleStartDrawing}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
          >StartDrawing</button>
          <button
            onClick={handleSaveDrawing}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >Save</button>
          <div id="painting-container">
            {videoSrc && <img id="painting-image" src={videoSrc} alt="Virtual Painting" />}
          </div>
        </div>
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      </body>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import axios from 'axios';
// import Navbar from './components/Navbar';

// function App() {
//   const [videoSrc, setVideoSrc] = useState('');

//   const handleStartDrawing = () => {
//     setVideoSrc('/video_feed');
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar />
//       </header>
//       <body>
//         <h1>Virtual Board</h1>
//         <div className='flex items-center justify-center'>
//           <button onClick={handleStartDrawing}>Start Drawing</button>
//           <div id="painting-container">
//             {videoSrc && <img id="painting-image" src={videoSrc} alt="Virtual Painting" />}
//           </div>
//         </div>
//       </body>
//     </div>
//   );
// }

// export default App;

