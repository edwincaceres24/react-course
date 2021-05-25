import React, { Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Badges from '../pages/badges.js'
import BadgeNew from '../pages/badgenew.js'
import LayoutComponent from '../components/layoutcomponent.js'
import NotFound from '../pages/notfound.js'
import HomePage from '../pages/home.js'
import BadgeEdit from '../pages/badgeedit.js'
import BadgeDetail from '../pages/badgedetail.js'


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
                        <Route exact path="/badges/:badgeId" component={BadgeDetail} />
                        <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                        <Route component={NotFound} />
                    </Switch>
                </LayoutComponent>
            </BrowserRouter>

        )
    }
}


export default App;