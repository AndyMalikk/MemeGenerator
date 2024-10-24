import React, { useState, useEffect } from "react";

function MemeForm() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/8hf4qw.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  //fetches meme API
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  //select random meme from the API
  function getMemeImage() {
    const rnd = Math.floor(Math.random() * 100);
    const url = allMemes[rnd].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="memeform">
        <input
          type="text"
          placeholder="Top Text"
          className="memeform--input"
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="memeform--input"
          name="bottomText"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="memeform--button"
          value="Generate a New Image 🖼️"
          onClick={getMemeImage}
        ></input>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="memeimg" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}

export default MemeForm;
