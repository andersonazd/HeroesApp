import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreem } from '../components/cd/DcScreem'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Route exact path="/dc" component={DcScreem} />
                    <Redirect to="/marvel" />
                </Switch>

            </div>
        </>
    )
}
