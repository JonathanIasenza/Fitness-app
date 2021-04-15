import React from 'react'
import '../components/styles/ExerciseForm.css'
import FatalError from './500'
import ExercisesNew from './ExercisesNew'
import url from '../config'

class ExerciseNewContainer extends React.Component{

    state={
        form:{
            title:'',
            description:'',
            img:'',
            textColor:'',
            leftColor:'',
            rightColor:'',
            link:''
        },
        loading:false,
        error:null
    }

    handleSubmit = async e => {
        this.setState({
            loading:true
        })
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/exercises`, config)
            let json = await res.json()
            console.log(json)
            this.setState({
                loading:false
            })

            this.props.history.push('/exercise')
            
        } catch (error) {
            this.setState({
                loading:false,
                error
            })
        }
      };

    handleChange = e => {
        // Computed property name, ECMA Script
        this.setState({ 
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value 
            }
        })
    }

    render(){
        if(this.state.error)
        return <FatalError/>
        return <ExercisesNew
        form={this.state.form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}/>
    }
}

export default ExerciseNewContainer
