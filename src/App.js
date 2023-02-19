import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Character from './pages/Character';
import CharactersList from './pages/CharactersList';
import Search from './pages/Search';

function App() {
  return (
    <>
      <div className="App">
        {/* <CharactersList /> */}

        <Switch>
          <Route exact path="/" component={CharactersList}></Route>
          <Route strict exact path="/search" component={Search}></Route>
          <Route exact path="/:id" component={Character}></Route>
        </Switch>
      </div>
      ;
    </>
  );
}

export default App;
