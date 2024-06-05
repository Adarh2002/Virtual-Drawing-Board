// components/Greet.jsx
import React from 'react';

const Greet = () => {
  // Function to generate a random welcome message
  const generateWelcomeMessage = () => {
    const messages = [
      "Welcome to our Virtual Drawing Tool! Let your creativity flow.",
      "Greetings! Get ready to unleash your artistic side on our Virtual Board.",
      "Hello there! Explore the world of virtual drawing on our Virtual Board.",
      "Welcome aboard! Dive into the world of free-hand virtual drawing with us.",
      "Hi there! Let's embark on a journey of creativity with our Virtual Board.",
      "Welcome! Experience the magic of virtual drawing on our Virtual Board.",
    ];
    // Randomly select a message from the array
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <>
      <div className='pt-10'>
        <header className="rounded-lg p-4 text-center">
          <h1 className="text-black text-3xl font-semibold font-mono mb-4">WELCOME CREATORS</h1>
          <p className="text-xl font-semibold text-gray-50">{generateWelcomeMessage()}</p>
        </header>
        <p className="text-xl text-black mt-2 text-center mx-72 p-16 rounded border ">
          Virtual Drawing Tool is a modern web-based application that harnesses computer vision technology to enable users to create virtual artwork and drawings without the need for any physical drawing equipment. Utilizing only a computer or mobile device equipped with a camera, users can draw, paint, and express their creativity in real-time by tracking and recognizing hand movements. Virtual Board aims to provide an intuitive and accessible platform for art creation and interactive collaboration, suitable for a wide range of applications, from casual drawing and digital whiteboarding to educational tools and remote collaborative workspaces. With its user-friendly interface and customization capabilities, Virtual Board allows individuals to create and interact with virtual canvases in a natural and engaging manner. By removing barriers to entry for digital art and offering a versatile canvas for various purposes, Virtual Board redefines the way users engage with the digital world, making art and creativity accessible to all. Our Virtual Board leverages the power of deep learning to detect hand movements, enabling users to unleash their creativity without the need for physical drawing equipment. By simply using gestures, you can freely express yourself and draw virtually on our platform.
        </p>
      </div>
    </>

  );
};

export default Greet;
