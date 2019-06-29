import React, { Component } from 'react'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {
            query: { value: query },
            filter: { value: filter }
          } = e.target
          
        fetch(`https://rickandmortyapi.com/api/character/?name=${query}&status=${filter}`)
        .then(res => res.json())
        .then(results => {
            const searchResults = results.results || []
      

        this.props.onResults(searchResults)
        })
    }

    render(){
        return(
    <form onSubmit={this._handleSubmit}>
        <div className="select">
            <select name="filter">                
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
        <div className="field has-addons">
            <div className="control">
                <input className="input" 
                type="text" 
                name="query"
                placeholder="search..."/>
            </div>
            <div className="control">
                <button className="button is-info">
                Search
                </button>
            </div>
        </div>
    </form>
        )
    }
}