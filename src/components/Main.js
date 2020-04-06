import React, {Component} from 'react';
import html2canvas from 'html2canvas';

import tumanImg from './tuman.jpg';

class Main extends Component {
  
  constructor() {
    super()
    this.state = { 
      text: ''
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
    this.setState({ text: event.target.value })
  }
  
  handleDownloadImage() {
    const target = document.querySelector('.meme')
    
    html2canvas(target)
      .then(canvas => {
        const img = canvas.toDataURL('image/png')
        window.open(img)
      })
  }
  
  render() {
    return(
      <main className='main-container'>
        <form>
          <input
            type='text'
            placeholder='Ketik teks yang anda inginkan disini...'
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
        
        <div className='meme'>
          <div className='meme-img'>
            <img
              src={tumanImg}
              alt='Tuman meme'
            />
          </div>
          <div className='meme-text'>
            <h2>{this.state.text}</h2>
          </div>
          <div className='meme-text-tuman'>
            <h2>tuman!!</h2>
          </div>
        </div>
        
        <div>
          <button
            className='download-link'
            onClick={this.handleDownloadImage}
          >Download
          </button>
        </div>
      </main>
    )
  }
}

export default Main;