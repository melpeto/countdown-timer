const AddPlayer = () => {
   
    const handleAddPlayer = (event) => {
        event.preventDefault();
        console.log('you added a player');
    };
   
    return(
        <div className="addPlayer">
            <form>
                <label htmlFor="playerName">Player Name: </label>
                <input type="text" id="playerName" />
                <button type="submit" onClick={handleAddPlayer}>Add Player</button>
            </form>
        </div>
    );
}

export default AddPlayer;