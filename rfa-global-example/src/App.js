// Packages
import React from 'react';

// Files
import TopBar from "./components/Nav";

// Styling
import './App.css';

// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Card from './components/Cards';

// Library Creation
library.add(fab, fas);


function App() {
  return (
    <div className="App">
    <TopBar />
    <Card />
    </div>
  );
}

export default App;
