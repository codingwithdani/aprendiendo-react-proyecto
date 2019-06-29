import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Detail extends Component {

    state = { details: {} }
    
    _fetchMovie({id}){
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(details => {
             
                this.setState({details})
            })
    }

    componentDidMount() {
        const {id} = this.props.match.params
        this._fetchMovie({id})
       
     
    }

    _goBack(){
        window.history.back()
    }

    render(){
        const {name, image, status, species } = this.state.details
        return(
            <div>
            <div className="detail">
                <h1 className="title is-4">{name}</h1>
                <img src={image}/>
                <h3><strong>Status: </strong>{status}</h3>
                <h2><strong>Species:</strong> {species}</h2>
            </div>
            <Link 
                className='button is-info' 
                to='/'>
                Volver
            </Link> 
            </div>
        )

    }
}