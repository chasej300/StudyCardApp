import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyCard from "./StudyCard";

function StudyDeck(){
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});
    
    useEffect(() => {
        async function getDeck() {
            const d = await readDeck(deckId);
            setDeck(d);
        }
        getDeck();
    }, [deckId]);

    return (
        <>
            <h1>Study: {deck.name}</h1>
            <div>
                <StudyCard deck={deck}/>
            </div>
            
        </>
    );
}

export default StudyDeck;