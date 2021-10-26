import React from 'react'
import { Link } from 'react-router-dom'
import {heroImages} from '../../helpers/heroImages'

export const HeroCard = ({
    id
    , superhero
    , alter_ego
    , first_appearance
    , characters }) => {
    return (
        <div className="col-3">

        <div className="card mt-3" style={{ width: '14rem' }}>
            <img src={heroImages(`./${id}.webp`).default} className="card-img-top" alt={superhero}></img>
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
            </div>
            <ul className="list-group list-group-flush">
                {alter_ego !== characters &&                 <li className="list-group-item">{characters}</li>
}
                <li className="list-group-item">{first_appearance}</li>
            </ul>
            <div className="card-body">
                <Link to={`/hero/${id}`} className="card-link">Ver más</Link>
            </div>
        </div>
        </div>

    )
}
