import React, { Component } from 'react'
import { CharacterList } from '../components/CharacterList';
import {SearchForm} from '../components/SearchForm'
import {Title} from '../components/Title'

export class Home extends Component {
    state = { usedSearch: false, results: []}


    _handleResults = (results) => {
      this.setState({results, usedSearch: true})
    }
  
    _renderResults () {
     return this.state.results.length === 0 
        ? <p>Results not found</p> 
        : <CharacterList characters={this.state.results}/>
    }

    render() {
        return (
            <div>
            <Title>Rick and Morty</Title>
            <div className='SearchForm-wrapper'>
                <SearchForm onResults={this._handleResults} />
            </div>
            {
            this.state.usedSearch
            ? this._renderResults()
            : <h3>Use the form to search a character</h3>
        }
            </div>
        )

    }
}