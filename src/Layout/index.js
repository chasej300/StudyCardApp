import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./base-components/Header";
import NotFound from "./base-components/NotFound";
import CreateDeck from "./creating/CreateDeck";
import Home from "./deck-home-view/Home";
import StudyDeck from "./studying/StudyDeck";
import ViewDeck from "./viewing/ViewDeck";
import CreateCard from "./creating/CreateCard";
import EditDeck from "./editing/EditDeck";
import EditCard from "./editing/EditCard";
import Breadcrumb from "./base-components/Breadcrumb";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact={true} path="/decks/new">
            <Breadcrumb />
            <CreateDeck />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <Breadcrumb />
            <ViewDeck />
          </Route>
          <Route exact={true} path="/decks/:deckId/study">
            <Breadcrumb />
            <StudyDeck />
          </Route>
          <Route exact ={true} path="/decks/:deckId/edit">
            <Breadcrumb />
            <EditDeck />
          </Route>
          <Route exact={true} path="/decks/:deckId/cards/new">
            <Breadcrumb />
            <CreateCard />
          </Route>
          <Route exact ={true} path="/decks/:deckId/cards/:cardId/edit">
            <Breadcrumb />
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
