import React from "react";

import memeImg from "./tuman.jpg";

class Main extends React.Component {
  constructor() {
    super();
    this.state = { caption: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ caption: value });
  }

  render() {
    return (
      <main>
        <input
          type="text"
          name="caption"
          value={this.state.caption}
          onChange={this.handleChange}
          placeholder="enter your caption..."
        />

        <div className="meme">
          <img src={memeImg} alt="Tuman Meme" />
          <div className="caption">
            <h2>{this.state.caption}</h2>
          </div>
        </div>

        <div className="download">
          <button className="btn-download">Download</button>
        </div>
      </main>
    );
  }
}

export default Main;
