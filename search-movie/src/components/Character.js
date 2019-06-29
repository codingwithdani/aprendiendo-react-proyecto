import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Character extends Component {

    render() {

        const { image, name, species, id, origin, status } = this.props

        return (
            <Link to={`/character/${id}`} className="card">
                <div className="card-image">
                    <figure className="image">
                        <img src={image} alt={name} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{name}</p>
                            <p className="subtitle is-6"><strong>Status:</strong> {status}</p>
                        </div>
                    </div>
                </div>
        </Link>
        )
    }
}
