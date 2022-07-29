import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function ViewCard({ card }){
    const history = useHistory();
    const { url } = useRouteMatch();

    const handleDelete = async (event) => {
        if (window.confirm("Delete this card?\n\n\nYou will not be able to recover it.")){
            await deleteCard(card.id);
            window.location.reload(true);
        }
    }

    const handleEdit = (event) => {
        history.push(`${url}/cards/${card.id}/edit`);
    }

    return (
        <div className="m-3">
            <div className="d-flex justify-content-between">
                <p className="text-secondary">{card.front}</p>
                <p className="text-secondary">{card.back}</p>
            </div>
            
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary mr-2" onClick={handleEdit}>Edit</button>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
        
    );
}

export default ViewCard;