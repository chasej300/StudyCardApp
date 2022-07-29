import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCard } from "../../utils/api";
import CardForm from "../forms/CardForm";

function CreateCard(){
    const history = useHistory();
    const { deckId } = useParams();
    const cardInitialState = {
        front: "",
        back: "",
    };
    const [card, setCard] = useState(cardInitialState);

    const handleChange = ({target}) => {
        setCard({
            ...card,
            [target.name]: target.value,
        });
    }

    const handleSave = async (event) => {
        event.preventDefault();
        await createCard(deckId, card);
        setCard(cardInitialState);
    }

    const handleDone = (event) => {
        history.push(`/decks/${deckId}`);
    }

    return (
        <>
            <p>Breadcrumb navbar</p>
            <h4>Name</h4>
            <CardForm card={card} handleChange={handleChange} />
            <button className="btn btn-secondary" onClick={handleDone}>Done</button>
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </>
        
    );
}

export default CreateCard;