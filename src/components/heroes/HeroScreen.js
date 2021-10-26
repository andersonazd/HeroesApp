import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroesById';

import {heroImages} from '../../helpers/heroImages'


export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    const hero = useMemo(() => getHeroesById(heroId), [heroId]);
    const {
        id
        , superhero
        , publisher
        , alter_ego
        , first_appearance
        , characters
    } = hero;

    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                // src={`/assets/heroes/${id}.webp`}
                // src={`/assets/heroes/dc-batman.jpg`}
                src={heroImages(`./${id}.webp`).default}
                 alt={superhero} 
                 className="img-thumbnail  animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>Firts Appearance: </b>{first_appearance}</li>
                </ul>

                <h5>Characteres</h5>
                <p>{characters}</p>
                <button className="btn btn-primary" onClick={handleReturn}>
                    Reset
                </button>
            </div>
        </div>
    )
}
