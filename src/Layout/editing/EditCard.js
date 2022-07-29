import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, updateCard } from "../../utils/api";
import CardForm from "../forms/CardForm";

function EditCard() {
    const history = useHistory();
    const { deckId, cardId } = useParams();
    const [card, setCard] = useState({});

    useEffect(() => {
        async function getCard() {
            const retCard = await readCard(cardId)
            setCard(retCard);
        }
        getCard();
    }, [cardId])

    const handleChange = ({target}) => {
        setCard({
            ...card,
            [target.name]: target.value,
        });
    }

    const handleCancel = (event) => {
        history.push(`/decks/${deckId}`);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateCard({
            front: card.front,
            back: card.back,
            deckId: Number(card.deckId),
            id: card.id
        });
        history.push(`/decks/${deckId}`);
    }

    return (
        <div className="">
            <h4>Edit Card</h4>
            <CardForm card={card} handleChange={handleChange} />
            <button className="btn btn-secondary mr-2 mt-2" onClick={handleCancel}>Cancel</button>
            <button className="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default EditCard;