import Stopwatch from "./Stopwatch";

const PlayerCard = (props) => {

    return(
            <section className="playerCard">
                {/* below is filled by user inputs */}
                <h2>{props.playerName}</h2> 
                <p>{props.role}</p>
                <p>{props.turnTime}</p>
                <Stopwatch turnLength={props.turnLength} />
                <p>additional control that says "next player's turn" or something</p>
            </section>
    );
}

export default PlayerCard;