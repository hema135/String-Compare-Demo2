import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Style.css";
import Modal from "../Modal/model";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';

var compareStrings = require("compare-strings");

const lyrics =
  "You were the shadow to my light Did you feel us Another start You fade away Afraid our aim is out of sight Wanna see us Alive Where are you now Where are you now Where are you now Was it all in my fantasy Where are you now Were you only imaginary Where are you now Atlantis Under the sea Under the sea Where are you now Another dream The monsters running wild inside of me I'm faded I'm faded So lost I'm faded These shallow waters, never met What I needed I'm letting go A deeper dive Eternal silence of the sea I'm breathing Alive Where are you now Where are you now Under the bright But faded lights";
const VideoPlayer = () => {
  const [input, setInput] = useState("");
  // eslint-disable-next-line
  const [fullName, setfullName] = useState(input);
  const [buttonPopup, setButtonPopup] = useState(false);

  const inputEvent = (event) => {
    setInput(event.target.value);
  };
    let Similarity = ()=> {
    let similarity = compareStrings(lyrics, input);
    const sim = similarity * 100;
    let matper = Math.round(sim * 100) / 100 + "%";
    console.log(matper);
      return matper
  }
    
  const onSubmit = () => {
    setfullName(input);    
  };
  return (
    <div>
      <div className="vdplayer">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=B6jsddn01Cs"
          width="60%"
        />
      </div>
      <div className="App-header mt-5">
        <label className="text-left"><p>TYPE HERE</p></label>
        <textarea
          cols="55"
          value={input}
          onChange={inputEvent}
          id="rhsInput"
        ></textarea>
        <button
          className="mt-4 btn btn-danger"
          onChange={onSubmit}
          onClick={() => setButtonPopup(true)}>
          CHECK MY RESPONSE
        </button>
        <Modal trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className = "mmodal-body">
          <h2>RESULT</h2>
          
          <h5><Similarity /><br /><br />CORRECT</h5>
          <CheckBoxIcon className="check"/>
          <p>CHECK OUR EXPERT VIDEOS</p>
          <SubscriptionsSharpIcon />
          <SubscriptionsSharpIcon />
          <SubscriptionsSharpIcon />
        </div>
        </Modal>
      </div>
    </div>
  );
};

export default VideoPlayer;
