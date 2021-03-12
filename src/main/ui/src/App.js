import './App.css';
import './Desktop.css';
import AboutMeComponent from './components/aboutMeComponent/AboutMeComponent.js'
import NavBarComponent from './components/navBarComponent/NavBarComponent.js'

function App() {
  return (
    <div>
      <NavBarComponent />
      <body>
        <AboutMeComponent />
      </body>
    </div>
  );
}

export default App;
