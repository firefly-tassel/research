import React, { Component, lazy } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import contentStyles from './index.module.less'

const Show = lazy(() => import("../Show"))
const FunctionIntro = lazy(() => import("../../components/FunctionIntro"))
const DataEnhance = lazy(() => import("../../components/DataEnhance"))
const Perception = lazy(() => import("../../components/Perception"))
const DefectDete = lazy(() => import("../../components/DefectDete"))
const Learning = lazy(() => import("../../components/Learning"))
const Identify = lazy(() => import("../../components/Identify"))
const Calculate = lazy(() => import("../../components/Calculate"))
const ModelExample = lazy(() => import("../../components/ModelExample"))
const Constructing = lazy(() => import("../../components/Constructing"))

export default class ContentRoute extends Component {
    render() {
        const location = this.props.location
        return (
            <div>
                <Show>
                    <TransitionGroup>
                        <CSSTransition key={location.key} timeout={1000} classNames={contentStyles.page}>
                            <Switch location={location}>
                                <Route path="/show/functionIntro" component={FunctionIntro} />
                                <Route path="/show/dataEnhance" component={DataEnhance} />
                                <Route path="/show/defectDete" component={DefectDete} />
                                <Route path="/show/learning" component={Learning} />
                                <Route path="/show/identify" component={Identify} />
                                <Route path="/show/calculate" component={Calculate} />
                                <Route path="/show/modelExample" component={ModelExample} />
                                <Route path="/show/perception" component={Perception} />
                                <Route path="/show/autoDetect" component={Constructing} />
                                <Route path="/show/distinguish" component={Constructing} />
                                <Redirect to="/show/functionIntro" />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </Show>
            </div>
        )
    }
}
