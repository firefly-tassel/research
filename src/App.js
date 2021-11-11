import React, { Component, lazy } from 'react'
import { Suspense } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Loading from './components/Loading'
import './App.css'

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))
const ContentRoute = lazy(() => import('./pages/ContentRoute'))
const Field = lazy(() => import('./pages/Field'))

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Suspense fallback={<Loading />}>
          <div className="whole">
            <div className="app-header">
              <Header />
            </div>
            <Switch>
              <Route path="/" render={() =>
                <div div className="app-content">
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/show" component={ContentRoute} />
                    <Route path="/field" component={Field} />
                    <Redirect to="/home" />
                  </Switch>
                </div>
              } />
            </Switch>
          </div>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
