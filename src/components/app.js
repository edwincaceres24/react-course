import React, { Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Badges from '../pages/badges.js'
import BadgeNew from '../pages/badgenew.js'
import LayoutComponent from '../components/layoutcomponent.js'
import NotFound from '../pages/notfound.js'
import HomePage from '../pages/home.js'


class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <LayoutComponent>
                    <Switch>
                        {/* <Route path="/badges" component={Badges} ></Route> */}
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/badges" component={Badges} />
                        <Route exact path="/badges/new" component={BadgeNew} />
                        <Route component={NotFound} />
                    </Switch>
                </LayoutComponent>
            </BrowserRouter>

        )
    }
}


export default App;