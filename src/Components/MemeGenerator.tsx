import { useState } from "react";

export default function MemeGenerator() {
  const [image, setImage] = useState("");

  const generatorMeme = () => {
    fetch("https://api.imgflip.com/get_memes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const randomMeme =
            data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
          setImage(randomMeme.url);
        } else {
          console.log("Filed Generator Is Meme:", data.error_message);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black-blue">
      <button
        className="bg-black text-white p-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300"
        onClick={generatorMeme}
      >
        Generate Random Meme
      </button>
      {image && (
        <div className="mt-4">
          <div className="bg-black p-2 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300">
            <img
              src={image}
              alt="Meme"
              className="max-w-full max-h-96 hover:shadow-lg"
            />
          </div>
        </div>
      )}
      <div>
        <h1 className="text-white font-bold mt-4">Powered By : GUSWANDI</h1>
      </div>
    </div>
  );
}
