import React, { useEffect, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";

function Breadcrumb() {
    const params = useParams();
    const { url } = useRouteMatch();
    const [deck, setDeck] = useState({});
    let trailEnd = "";
    let shortTrail = false;

    useEffect(() => {
        if (url === "/decks/new") return;
        async function getDeck() {
            const retDeck = await readDeck(params.deckId);
            setDeck(retDeck);
        }
        getDeck();
    }, [params.deckId, url]);


    let urlWordsArr = [];
    let curWord = "";
    for (let i = 1; i < url.length; i++){
        if (url.charAt(i) === "/") {
            urlWordsArr.push(curWord);
            curWord = "";
            continue;
        }    
        curWord += url.charAt(i);
    }
    urlWordsArr.push(curWord);

    function createTrail(urlWords) {
        let endWord = urlWords[urlWords.length-1];
        if (urlWords.length === 2) {
            shortTrail = true;
            switch (endWord) {
                case "new":
                    trailEnd = ("Create Deck");
                    break;
                default:
                    trailEnd = (deck.name);
            }
        }
        else if (urlWords.length === 3){
            switch (endWord){
                case "edit":
                    trailEnd = ("Edit Deck");
                    break;
                default:
                    trailEnd = ("Study");
            }
        }
        else{
            switch (endWord){
                case "new":
                    trailEnd = ("Add Card")
                    break;
                default:
                    trailEnd = (`Edit Card ${params.cardId}`)
            }
        }
    }

    createTrail(urlWordsArr)

    return (
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                {shortTrail ? <li className="breadcrumb-item text-secondary">{trailEnd}</li> : <li className="breadcrumb-item text-secondary"><Link to={`/decks/${params.deckId}`}>{deck.name}</Link></li>}
                {shortTrail ? <></> : <li className="breadcrumb-item text-secondary">{trailEnd}</li>}
            </ol>
            
        </nav>
    );
    }

export default Breadcrumb;