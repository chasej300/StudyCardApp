import React from "react";

function DeckForm({ deck, handleChange }) {
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
            </div>
            <div>
                <input className="w-100" name="name" type="text" id="name" onChange={handleChange} value={deck.name} required={true}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
            </div>
            <div>
                <textarea className="w-100" name="description" id="description"  onChange={handleChange} value={deck.description} required={true}></textarea>
            </div>
        </form>
    );
}

export default DeckForm;