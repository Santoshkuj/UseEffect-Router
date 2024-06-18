import './App.css';
import CostumeRoutes from './routes/route';
import {Link} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Link to={'/'}><h1>Photos</h1></Link>
      <CostumeRoutes/>
    </div>
  );
}

export default App;
