import React from "react";

function CardForm({ card, handleChange}) {
    return (
        <form>
            <div>
                <label htmlFor="front" className="text-secondary">Front</label>
            </div>
            <div>
                <textarea className="w-100" name="front" id="front" placeholder={"front"} onChange={handleChange} value={card.front} required={true}></textarea>
            </div>
            <div>
                <label htmlFor="back" className="text-secondary">Back</label>
            </div>
            <div>
                <textarea className="w-100" name="back" id="back" placeholder={"back"} onChange={handleChange} value={card.back} required={true}></textarea>
            </div>
        </form>
    );
}

export default CardForm;