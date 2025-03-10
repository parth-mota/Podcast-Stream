import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import Library from '../Library/index';
import Feed from '../Feed/index';
import Trending from '../Trending/index';
import Player from '../Player/index';
import Favourites from '../Favourites/index';
import Sidebar from '../../components/Sidebar';
import LoginSignUp from '../../components/LoginSignUp/LoginSignUp';
import './Home.css';
const Home = () => {
  return (
    <>
      
      <Router>
        <div className='main-body'>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Library/>}/>
            <Route path="/trending" element={<Trending/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/favourites" element={<Favourites />}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/log" element={<LoginSignUp/>}/>
          </Routes>
        </div>
      </Router>
    </> 
  )
}
export default Home;