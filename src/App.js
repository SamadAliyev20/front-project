import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import UserList from './pages/UserList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
