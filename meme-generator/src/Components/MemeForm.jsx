function MemeForm() {
  return (
    <>
      <div className="memeform">
        <input type="text" placeholder="Top Text" className="memeform--input" />
        <input
          type="text"
          placeholder="Bottom Text"
          className="memeform--input"
        />
        <input type="submit" className="memeform--button"></input>
      </div>
      <div className="meme">
        <img
          src="https://i.imgflip.com/3igo27.png?a480264"
          alt="memeimg"
          className="meme--image"
        />
      </div>
    </>
  );
}

export default MemeForm;
