import {Route, Switch} from 'react-router-dom'

import LoginFrom from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import Logout from './components/Logout'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginFrom} />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/logout" component={Logout} />
    <Route component={NotFound} />
  </Switch>
)

export default App
