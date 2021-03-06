import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import Costumers from './pages/Costumers'
import CostumersAdd from './pages/CostumersAdd'
import TemplateDefault from './template/Default'
import TemplatePage from './template/TemplatePage.js'
import CostumersExer from './pages/CostumersExer'

function App() {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/Costumers/adde">
            <TemplatePage title="Exercicio" Component = {CostumersExer} />
          </Route>
          <Route path="/Costumers/add">
            <TemplatePage title="Adicionar Clientes" Component = {CostumersAdd} />
            {/* <Costumers /> */}
          </Route>
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
