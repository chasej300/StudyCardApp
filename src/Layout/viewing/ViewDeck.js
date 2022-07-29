import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api";
import ViewCard from "./ViewCard";

function ViewDeck() {
    const history = useHistory();
    const { url } = useRouteMatch();
    const { deckId } = useParams();
    const [cards, setCards] = useState([]);
    const [deck, setDeck] = useState({});

    useEffect(() => {
        async function getCards(){
            const deck = await readDeck(deckId)
            setCards([...deck.cards])
            setDeck(deck);
        }
        getCards();
    }, [deckId]);

    const handleCreateCard = () => {
        history.push(`${url}/cards/new`)
    }

    const handleEditDeck = () => {
        history.push(`${url}/edit`);
    }

    const handleStudy = () => {
        history.push(`${url}/study`);
    }

    const handleDelete = async () => {
        if (window.confirm("Delte this deck/\n\nYou will not be able to recover it.")){
            await deleteDeck(deckId);
            history.push("/")
        }
    }

    return (
        <>
            <h4>{deck.name}</h4>
            <p>{deck.description}</p>
            <div className="d-flex justify-content-between">
                <span>
                    <button className="btn btn-secondary mr-2" onClick={handleEditDeck}>Edit</button>
                    <button className="btn btn-primary mr-2" onClick={handleStudy}>Study</button>
                    <button className="btn btn-primary" onClick={handleCreateCard}>Add Cards</button>
                </span>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
             <div>
                <h3 className="mt-4">Cards</h3>
                <ul className="list-unstyled">
                    {cards.map((card, index) => {
                        return <li className="border" key={index}><ViewCard card={card}/></li>
                    })}
                </ul>
            </div>
        </>
        
    );
}

export default ViewDeck;