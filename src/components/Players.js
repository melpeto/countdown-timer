import AddPlayer from './AddPlayer';
import PlayerCard from './PlayerCard';

const Players = (props) => {

    const playersList = [
        {
            playerName: 'Carson',
            role: 'Cleric',
            id: 1
        },
        {
            playerName: 'Matt',
            role: 'Paladin',
            id: 2
        },
        {
            playerName: 'Nathan',
            role: 'Necromancer',
            id: 3
        }
    ]

    console.log(playersList);

    return(
        <div>
            <AddPlayer />
            <div className="cardSection">
                <h2>Hello</h2>
                {/* map thru array of players and put one PlayerCard for however many there are */}
                {playersList.map( (player) => {
                    return <PlayerCard turnLength={props.turnLength} playerName={player.playerName} role={player.role} key={player.id}/>
                })}
                
            </div>
        </div>
    );
}

export default Players;