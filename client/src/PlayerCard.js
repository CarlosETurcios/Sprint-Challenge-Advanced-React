import React from 'react';

function PlayerCard(props) {
    return (
        <div className="card-info">
            <h1>Name: {props.playerCard.name}</h1>
            <p>Country: {props.playerCardcountry}</p>
            <p>Searched: {props.playerCard.searches}</p>
        </div>


    )
}
export default PlayerCard;