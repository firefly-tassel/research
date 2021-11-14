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

  resizeListener() {
    // 定义设计图的尺寸 1440
    let designSize = 1440;
    // 获取 html 元素
    let html = document.documentElement;
    // 定义窗口的宽度
    let clientW = html.clientWidth;
    let sizeNum = 12;
    if (clientW <= 1200) {
      sizeNum = 7
    } else if (clientW <= 1300) {
      sizeNum = 8
    } else if (clientW <= 1400) {
      sizeNum = 9
    } else if (clientW <= 1600) {
      sizeNum = 10
    } else if (clientW <= 1800) {
      sizeNum = 11
    }
    // html 的fontsize 大小
    let htmlRem = clientW * sizeNum / designSize;
    html.style.fontSize = htmlRem + 'px';
  }

  // 在第一次渲染后调用
  componentDidMount() {
    window.addEventListener('resize', this.resizeListener);
    this.resizeListener();
  }
  // 在组件从 DOM 中移除之前立刻被调用
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener);
  }

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
