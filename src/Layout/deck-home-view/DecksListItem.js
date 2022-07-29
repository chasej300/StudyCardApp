import React from "react";
import { useHistory } from "react-router-dom"
import { deleteDeck } from "../../utils/api"

function DecksListItem({ deck }){
    const history = useHistory();

    const deleteHandler = async (event) => {
        if (window.confirm("Delete this deck?\n\n\nYou will not be able to recover it.")){
            await deleteDeck(deck.id);
            window.location.reload(true);
        }
    }

    const handleView = () => {
        history.push(`/decks/${deck.id}`)
    }

    const handleStudy = () => {
        history.push(`/decks/${deck.id}/study`);
    }
 
    return (
        <div className="border">
            <div className="m-3">
                <div className="d-flex justify-content-between">
                    <h4>{deck.name}</h4>
                    <p className="text-secondary"><small>{`${deck.cards.length} cards`}</small></p>
                </div>
                <p className="text-secondary">{deck.description}</p>
                <div className="d-flex justify-content-between">
                    <span>
                        <button className="btn btn-secondary mr-2" onClick={handleView}>View</button>
                        <button className="btn btn-primary" onClick={handleStudy}>Study</button>
                    </span>
                    <span>
                        <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
                    </span>
                </div>
            </div>
            
        </div>
    );
}

export default DecksListItem;