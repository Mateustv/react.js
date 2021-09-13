import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import Costumers from './pages/Costumers'
import TemplateDefault from './template/Default'
import TemplatePage from './template/TemplatePage.js'

function App() {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/Costumers">
            <TemplatePage title="Clientes" Component = {Costumers} />
            {/* <Costumers /> */}
          </Route>
          <Route path="/">
          <TemplatePage title="Home" Component = {Home} />
            {/* <Home /> */}
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  )
}

export default App
