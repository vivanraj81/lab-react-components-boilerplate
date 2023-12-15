import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Heading from './components/header.jsx';
import Body from './components/body.jsx';
import { imageData } from './Components/DataComponents.jsx';



function App() {
  return (
    <div>
        <Heading/>
      <div>
       <Body imageData={imageData} />
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
