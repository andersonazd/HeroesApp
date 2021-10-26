import React from 'react'
import { HeroList } from '../heroes/HeroList';

const publisher = "Marvel Comics";

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel</h1>
            <hr />

            <HeroList publisher={publisher} />

        </div>
    )
}
