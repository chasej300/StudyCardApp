import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "../forms/DeckForm";

function CreateDeck() {
    const history = useHistory();
    const initialDeckState = {name: "", description: ""};
    const [deck, setDeck] = useState(initialDeckState);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createDeck(deck);
        setDeck(initialDeckState);
        history.push("/");
    }
    const handleCancel = () => {
        history.push("/");
    }

    const handleChange = ({target}) => {
        setDeck({
            ...deck,
            [target.name]: target.value,
        });
    }

    return (
        <>
            <h1>Create Deck</h1>
            <DeckForm deck={deck} handleChange={handleChange}/>
            <button  className="btn btn-secondary mr-2 mt-3" onClick={handleCancel}>Cancel</button>
            <button  className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
            
        </>
    )
}

export default CreateDeck;