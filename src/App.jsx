import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css";
import CoverPage from "./components/CoverPage.jsx";

// -------------------------------------------
// Base Page Component (with fade-in animation)
// -------------------------------------------
const Page = React.forwardRef(({ className, title, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center items-center text-center p-6 page-container ${className}`}
      style={{
        boxSizing: "border-box",
        height: "100%",
        width: "100%",
        background: "url('/images/vintage-paper-texture.jpg') center/cover no-repeat",
        border: "1px solid #bca77d",
        boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
        opacity: 0,
        animation: "fadeIn 1.2s ease forwards",
      }}
    >
      {title && (
        <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: "#3e2723" }}>
          {title}
        </h2>
      )}
      <div style={{ fontSize: "1rem", lineHeight: "1.6", color: "#4e342e" }}>
        {children}
      </div>
    </div>
  );
});

// -------------------------------------------
// Main App Component
// -------------------------------------------
export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const myUsername = "shashanksiddarth@gmail.com";
  const myPassword = "1709@2024";

  const flipBookRef = useRef();
  const flipSound = useRef(new Audio("/sounds/page-flip.mp3")); // Page flip sound

  const handleLogin = () => {
    if (username === myUsername && password === myPassword) {
      setIsLoggedIn(true);
      setMessage("");
    } else {
      setMessage("Invalid username or password.");
    }
  };

  // -------------------------------------------
  // LOGIN PAGE
  // -------------------------------------------
  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl mb-4">Login Page</h2>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 mb-2 border border-gray-300 rounded w-64"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 border border-gray-300 rounded w-64"
        />
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
        >
          Sign In
        </button>
        <p className="text-red-500 mt-2">{message}</p>
      </div>
    );
  }

  // -------------------------------------------
  // BOOK SECTION
  // -------------------------------------------
  return (
    <div className="flex justify-center items-center h-screen bg-[#3b2f2f]">
      <HTMLFlipBook
        ref={flipBookRef}
        width={400}
        height={500}
        showCover={true}
        mobileScrollSupport={true}
        drawShadow={true}
        flippingTime={1000}
        maxShadowOpacity={0.5}
        className="shadow-xl rounded-lg"
        singlePage={true}
        onFlip={() => {
          flipSound.current.currentTime = 0;
          flipSound.current.play().catch(() => {}); // Ignore autoplay restriction
        }}
      >
        {/* COVER PAGE */}
        <CoverPage />

        {/* PAGE 1 */}
        <Page className="page1" title="ಸ್ನೇಹಪತ್ರ">
          ಪ್ರಿಯ ಸ್ನೇಹಿತ, 
          ನಮಸ್ಕಾರ! ಈ ಪತ್ರವನ್ನು ಬರೆಯುತ್ತಿರುವಾಗ ನನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ಒಂದು ಮಾತು ಬಂದಿತು – 
          “ಸಂಗಾತಿ ಆಗಿ ಇಲ್ಲದಿದ್ದರೆ ಸ್ನೇಹಿತ ಆಗಿ ಉಳಿಯುತ್ತೆನೆ!!” 
          ನಮ್ಮಿಬ್ಬರ ನಡುವಿನ ಸಂಬಂಧ ಯಾವಾಗಲೂ ವಿಶಿಷ್ಟವಾಗಿದೆ. 
          ನಿನ್ನೊಂದಿಗೆ ಕಳೆದ ಸಂತೋಷದ ಕ್ಷಣಗಳು, ಕಷ್ಟದ ದಿನಗಳಲ್ಲಿ
          ನನ್ನನ್ನು ಬೆಂಬಲಿಸಿದ ಸಮಯಗಳು ಎಂದಿಗೂ ಮರೆಯಲಾಗುವುದಿಲ್ಲ.
        </Page>


        {/* PAGE 2 */}
        <Page className="page2" title="ಸಪ್ತ ಸಾಗರದಾಚೆ ಎಲ್ಲೋ!">
          <img
            src="./images/IMG-20241211-WA0033.jpg"
            alt="Birthday Photo"
            style={{
              maxWidth: "90%",
              height: "auto",
              margin: "10px auto",
              border: "5px solid #0c0904",
              boxShadow: "4px 4px 10px rgba(0,0,0,0.4)",
            }}
          />
          <p>ಕಡಲಂತೆ ಕಾದ ಕಣ್ಣು..
ನದಿಯಂತೆ ಓಡುವ ಕನಸು!!
ಸಮುದ್ರ ದಂತ್ತೆ ಪ್ರೀತಿಸುವ ನೀನಾ ಈ ಜೇವಕೆ ,
ನಾನು ಯಾವತಿದ್ರು ಚಿರಋಣಿ.
ಆ ಅಲೆಗಳು ಸಡಿನಂತೆ ಹಿತವಾಗಿ ಇರಲಿ ನಮ್ಮ ಈ ಸ್ನೇಹ.</p>
        </Page>

        {/* PAGE 3 */}
        <Page className="page3" title="ಈ ಭೂಮಿ ಬಣ್ಣದ ಬುಗುರಿ!">
          <img
            src="./images/IMG_7975.jpeg"
            alt="Inspiration Photo"
            style={{
              maxWidth: "50%",
              height: "auto",
              margin: "10px auto",
              border: "5px solid #0e0c0a",
              boxShadow: "4px 4px 10px rgba(0,0,0,0.4)",
            }}
          />
          <p>ನೀನ ಬದುಕು ಯಾವಾಗ್ಲೂ ಸುಂದರ ಬಣ್ಣಗಳಿಂದ ತುಂಬಿರಾಲಿ. ಕಾಮನಬಿಲ್ಲುತರ ನೀನ ಕನಸಿನ ಬಣ್ಣ
ತುಂಬಿರಾಲಿ. ಸ್ನೇಹಾದ ಈ ಬಣ್ಣಗಳು,
ನಮ್ಮ ಸಂಬಂಧವನ್ನು ಇನ್ನಷ್ಟು ಗಟ್ಟಿಗೊಳಿಸುತ್ತವೆ.</p>
        </Page>

        {/* PAGE 4 */}
        <Page className="page4" title="ಒಂದೊಂದೇ ಬಚ್ಚಿಟ್ಟ ಮಾತು! ">
          <img
            src="./images/Snapchat-848601365.jpg"
            alt="Gratitude Photo"
            style={{
              maxWidth: "40%",
              height: "auto",
              margin: "10px auto",
              border: "5px solid #0e0c09ff",
              boxShadow: "4px 4px 10px rgba(0,0,0,0.4)",
            }}
          />
          <p>ಸಣ್ಣ ತಪ್ಪಿಗಾಗಿ ಮಾತು ಸತ್ತುಹೋಗಿ
ಆ ಮಂಕಾದ ರಾತ್ರಿಲಿ ಬಿಕ್ಕಳಿಸಿದ್ಯಾರು?
ತಪ್ಪು ನಿಂದ ತಪ್ಪು ನಂದ ??ಕೊನೆಗಾಣದ ಒಗಟು ಇದು !!</p>
        </Page>

        {/* PAGE 5 */}
        <Page className="page5" title="ಮೆಲ್ಲಗೆ ಧ್ಯಾನಿಸು!">
         <img
  src="./images/IMG_1234.jpeg"
  alt="New Chapter Photo"
  style={{
    maxWidth: "50%",
    height: "auto",
    margin: "10px auto",
    border: "5px solid #0c0906ff",
    boxShadow: "4px 4px 10px rgba(0,0,0,0.4)",
  }}
/>
  <p>
  <em>
    In the lens of memories, a world is reborn.  
    A past silent film rhythmes in the silence, where vision loss. 
    Memories always resonance in heart,  
    and nothing is lost as long as we remember.
  </em>
</p>

        </Page>

      </HTMLFlipBook>
    </div>
  );
}
