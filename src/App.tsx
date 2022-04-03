import './App.css';
import Main from './pages/Main'
import { CreateSever } from './utils/sever';
CreateSever();
const App = () => {
  return (
   <Main />
  );
}


export default App;
