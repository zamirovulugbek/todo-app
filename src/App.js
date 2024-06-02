import {Route, Switch, Link} from 'react-router-dom'
import Posts from './Page/Posts/index'
import OnePost from './Page/Posts/OnePost';
import Todos from './Page/Todos/index'
import Users from './Page/Users/index'

function App() {
  
  return (

    <div className='container'>
      
      <h1>Json placeholder</h1>
      <Link to='/posts'>
        <button className='btn btn-primary m-1'>Posts</button>
      </Link>
      <Link to='/todos'>
        <button className='btn btn-primary m-1'>Todos</button>
      </Link>
      <Link to='/users'>
        <button className='btn btn-primary m-1'>Users</button>
      </Link>

      <Switch>
        <Route path='/posts/:id' component={OnePost} />
        <Route path='/posts' component={Posts} />
        <Route path='/todos' component={Todos} />
        <Route path='/users' component={Users} />
      </Switch>

    </div>
  );
}

export default App;
