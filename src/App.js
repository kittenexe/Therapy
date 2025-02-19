import './App.css';
import PictureRender from './pages/PcitureRender';
import {MultiPic, LazyPicLoad} from './pages/PcitureRender';
import ButtonLS from './pages/Button';
import TherapistDataFtech from './pages/FetchTherapyData';

function App() {
  return (
    <div className="App">
      <header height="100px">
        <PictureRender></PictureRender>
      </header>
      <ButtonLS></ButtonLS>
      <div>
        <div>
          <TherapistDataFtech/>
        </div>
      </div>
      <p>
          Below should be a lazy loaded pic of the therapist that should only load when that asset is needed thus reducing load.
      </p>
      <p>Here it is!</p>
      <LazyPicLoad></LazyPicLoad>
    </div>
  );
}

export default App;