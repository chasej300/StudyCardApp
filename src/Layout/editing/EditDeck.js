import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import DeckForm from "../forms/DeckForm";

function EditDeck() {
    const history = useHistory();
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});
    
    useEffect(() => {
        async function getDeck() {
            const retDeck = await readDeck(deckId);
            setDeck({...retDeck});
        }
        getDeck();
    }, [deckId]);

    const handleChange = ({target}) => {
        setDeck({
            ...deck,
            [target.name]: target.value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateDeck(deck)
        history.push(`/decks/${deckId}`);
    }

    const handleCancel = () => {
        history.push("");
        history.push(`/decks/${deckId}`);
    }

    return (
        <>
            <h2>Edit Deck</h2>
            <DeckForm deck={deck} handleChange={handleChange} />
            <button className="btn btn-secondary mr-2 mt-3" onClick={handleCancel}>Cancel</button>
            <button className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
            
        </>
    );
}

export default EditDeck;