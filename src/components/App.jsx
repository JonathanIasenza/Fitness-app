import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Exercises from '../pages/Exercises';
import ExercisesNewContainer from '../pages/ExercisesNewContainer';
import NotFound from '../pages/404';
import { ScrollToTop } from 'react-router-scroll-to-top';
import TechniquesGuide from '../pages/TechniquesGuide';
import TrainSecrets from '../pages/TrainSecrets';
import StreetTrain from '../pages/StreetTrain';

const App = () => (
    
    <BrowserRouter>
    <ScrollToTop>
    <Switch>
    <Route exact path="/exercise" component={Exercises}/>
    <Route exact path="/exercise/new" component={ExercisesNewContainer}/>
    <Route exact path="/TechniquesGuide" component={TechniquesGuide}/>
    <Route exact path="/TrainSecrets" component={TrainSecrets}/>
    <Route exact path="/StreetTrain" component={StreetTrain}/>
    <Route component={NotFound}/>
    </Switch>
    </ScrollToTop>
    </BrowserRouter>
)

export default App; 
