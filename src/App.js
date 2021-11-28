import image from './imageInSrc.jpg';
import './style.css';

function App() {
  return (
    <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title">JSX checkpoint</h1>
    <br />
    <img src={image} alt="srcimage" />
    <br />
    <img src="/imageInPublic.jpg" alt="publicimage"/>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>

  );
}

export default App;
