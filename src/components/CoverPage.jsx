// src/components/CoverPage.jsx
import React from "react";

const CoverPage = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="page flex flex-col justify-center items-center text-center rounded-2xl shadow-md p-6"
      style={{
        background: "linear-gradient(to bottom right, #ffdde1, #ee9ca7)",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-inner max-w-xs w-full">
        <h1
          className="font-bold text-gray-900 mb-4"
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.4",
            wordBreak: "break-word",
          }}
        >
          ಹುಟ್ಟು ಹಬ್ಬದ ಶುಭಾಶಯಗಳು
          <br />
          ಮಿಸ್ಟರ್ ಶಶಾಂಕ್ ಸಿದ್ಧಾರ್ಥ್ !!
        </h1>

        <p
          className="text-gray-800 leading-relaxed"
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.7",
          }}
        >
          ನಿಮ್ಮ ಕನಸು ನನಸಾಗಲಿ!! <br />
          ಆರೋಹಣ ವಾಗಲಿ ಆಯಾಸು<br />
          ಅವರೋಹಣ ವಾಗಲಿ ನೋವುಗಳು <br />
          ನಿಮ್ಮ ಈ ಪ್ರೀತಿ ಸ್ನೇಹಕೆ ಸದಾಕಾಲ ಚಿರಋಣಿ<br/>
          ಚಿರಕಾಲ ಇರಲಿ ಈ ಸ್ನೇಹ <br />
          ಚಿರಕಾಲ ಇರಲಿ ಈ ಪ್ರೇಮ <br />
          ಚಿರಕಾಲ ಇರಲಿ ಈ ಹಾಡು ❤️
        </p>
      </div>
    </div>
  );
});

export default CoverPage;
