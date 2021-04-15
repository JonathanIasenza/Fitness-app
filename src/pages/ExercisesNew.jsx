import React from 'react'
import Card from './../components/Card'
import ExerciseForm from './../components/ExerciseForm'
import FooterPage from '../components/FooterPage'


const ExercisesNew = ({form, onChange, onSubmit}) => (
    <React.Fragment>
            <div className="row">
                <div className="col-md">                    
                </div>
                <div id="card-img">
                <Card {...form}/>
                </div>
                <div className="col-sm">
                <ExerciseForm 
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}/>
                </div>
            </div>         
            <FooterPage/>   
            </React.Fragment>
)

export default ExercisesNew;