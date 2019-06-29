import React, { Component } from 'react'
import { Character } from './Character'



export class CharacterList extends Component {

    render() {
        const { characters } = this.props
        return (
            <div className='CharactersList'>
                {
                    characters.map(char => {
                        return (
                            <div key={char.id} className='CharactersList-item'>
                                <Character
                                    name={char.name}
                                    species={char.species}
                                    image={char.image}
                                    id={char.id}
                                    origin={char.origin.name}
                                    status={char.status}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}