import React, { useMemo } from 'react'
import queryString from "query-string";
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {


    const location = useLocation();

    const {q = ""} = queryString.parse(location.search);

    const [{ search }, handleInputChange] = useForm({
        search: q
    })

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`)
    }

    const heroesFiltred = useMemo(() => getHeroesByName(q), [q])

return (
    <div>
        <h1>Search Screen</h1>
        <hr />
        <div className="row">
            <div className="col-5">
                <form onSubmit={handleSearch}>
                    <input type="text" name="search" placeholder="Find Your Hero" className="form-control" onChange={handleInputChange} value={search} autoComplete="off"/>

                    <button type="submit" className="btn m-1 btn-primary">Search</button>
                </form>
            </div>

            <div className="col-7">
                <h4>Results</h4>
                <hr />
                {
                    (q === '') && <div className="alert alert-info">Search a hero</div>
                }
                {
                    (q !== '' && heroesFiltred.length === 0) && <div className="alert alert-info">There is not a hero with name: {q}</div>
                }
                {
                    heroesFiltred.map(hero => (
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </div>

        </div>
    </div>
)
}
