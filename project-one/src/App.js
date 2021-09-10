import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import Costumers from './pages/Costumers'
import TemplateDefault from './template/Default'

function App() {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/Costumers">
            <Costumers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App
