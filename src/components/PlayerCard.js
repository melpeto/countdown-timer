import Stopwatch from "./Stopwatch";

const PlayerCard = (props) => {
    return(
            <section className="playerCard">
                {/* h2 is user input */}
                <h2>{props.playerName}</h2> 
                <p>{props.role}</p>
                <p>{props.turnTime}</p>
                <Stopwatch turnLength={props.turnLength} />
                <p>additional control that says "next player's turn" or something</p>
            </section>
    );
}

export default PlayerCard;