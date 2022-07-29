import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DecksListItem from "./DecksListItem";
import { listDecks } from "../../utils/api";

function Home(){
    const [decks, setDecks] = useState([]);
    const history = useHistory();

    useEffect(() =>{
        async function getDecks(){
        const decks = await listDecks();
        setDecks(decks);
        }
        getDecks();
        console.log("useEffect ran")
    }, []);

    const handleCreateNew = () => {
        history.push("/decks/new");
    }

    return (
        <>
            <button className="btn btn-secondary mb-2" onClick={handleCreateNew}>Create Deck</button>
            <ul className="list-unstyled">
                {decks.map((deck, index) => <li key={index}><DecksListItem deck={deck}/></li>)}
            </ul>
        </>
    );        
}

export default Home;