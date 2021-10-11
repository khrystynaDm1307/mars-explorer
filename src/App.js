import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Photos from './pages/photos/Photos';
import Footer from './components/footer/Footer';

function App() {
  return <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/photos/:rover?/:sol?/:camera?' component={Photos} />
      </Switch>
      <Footer/>
    </Router>
}

export default App;
