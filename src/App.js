import './App.css';
import PictureRender from './pages/PcitureRender';
import {MultiPic, LazyPicLoad} from './pages/PcitureRender';
import ButtonLS from './pages/Button';
import TherapistDataFtech from './pages/FetchTherapyData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PictureRender></PictureRender>
      </header>
      <ButtonLS></ButtonLS>
      <MultiPic></MultiPic>
      <div>
        <div>
          <TherapistDataFtech/>
        </div>
        <p>
          Below should be a lazy loaded pic of the solegory that should only load when that asset is needed thus reducing load.
        </p>
      </div>
      <p>Here it is!</p>
      <LazyPicLoad></LazyPicLoad>
    </div>
  );
}

export default App;