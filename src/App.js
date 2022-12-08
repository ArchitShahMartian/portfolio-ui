import logo from './logo.svg';
import { Page } from './components/Page.tsx';
import './App.css';
import '@blueprintjs/core/lib/css/blueprint.css';
// import '@blueprintjs/table/lib/css/table.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page/>
      </header>
    </div>
  );
}

export default App;
