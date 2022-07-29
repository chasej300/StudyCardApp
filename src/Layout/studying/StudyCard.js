import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function StudyCard({deck}) {
    const [flipped, setFlipped] = useState(false);
    const [cardIndex, setCardIndex] = useState(1);
    const { deckId } = useParams();
    const history = useHistory();
    if (!deck.cards) {
        return (
            <p>loading</p>
        );
    }

    const cards = deck.cards;
    let curCard = cards[cardIndex-1];

    const handleAddCards = (event) => {
        history.push(`/decks/${deckId}/cards/new`);
    }

    if (cards.length < 3) {
        return (
            <>
                <h4>Not enough cards.</h4>
                <p>You need at least 3 cards to study. There are {cards.length} cards in this deck</p>
                <button className="btn btn-primary" onClick={handleAddCards}>Add Cards</button>
            </>
        )
    }
    
    const handleNext = () => {
        if (cardIndex === cards.length){
            if (window.confirm("Restart cars?\nClick 'cancel' to return to the home page.")){
                window.location.reload();
            }
            else {
                history.push("/");
            }
        }
        else {
            setCardIndex(cardIndex+1);
            setFlipped(!flipped);
        }
        
    }

    return(
        <div className="border m-3">
            <h4>{`Card ${cardIndex} of ${cards.length}`}</h4>
            {flipped ? <p>{curCard.back}</p> : <p>{curCard.front}</p>}
            <button className="btn btn-secondary mr-2" onClick={() => setFlipped(!flipped)}>Flip</button>
            {flipped ? <button className="btn btn-primary" onClick={handleNext}>Next</button> : <></>}
        </div>
    )
    
    
}

export default StudyCard;