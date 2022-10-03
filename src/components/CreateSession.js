// add firebase imports
import { useState } from "react";
import AddPlayer from "./AddPlayer";
import Players from "./Players";

const CreateSession = () => {

    const [sessionName, setSessionName] = useState('');

    //state - is "GO" button pressed on the .create form?
    const [isSessionCreated, setIsSessionCreated] = useState(false);

    // state - turn length input, name input, role input
    const [turnLengthInput, setTurnLengthInput] = useState('1');

    const handleNameCreation = (event) => {
        setSessionName(event.target.value);
    }

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setTurnLengthInput(event.target.value);
    }

    const handleCreateSession = (event) => {
        event.preventDefault();
        setIsSessionCreated(true);
        //send to firebase to add to database? push(dbRef, turnLengthInput)
        //reset the state to an empty string? 
        // setTurnLengthInput(1);   no bc then on the Players page, it goes back to 1
    }

    return(
        <div className="create">

            {/* mins per turn - enter number or choose from list? radio buttons or dropdown?
            "Add a new player" makes input show up. this button changes a state and then the input shows up or not based on a ternary evaluating that state "buttonPressed" or w/e
            > input element for name, optional "role", then button to press Add Player. 
            Add player adds to info to object in firebase
            >Players.js takes from firebase and maps thru array    
            */}

            {/* <form>

                <label htmlFor="sessionName">Session Name</label>    
                <input type="text" name="sessionName" id="sessionName" />
                
                <fieldset className="radioBtns">

                <legend>Select your desired Turn length (per person)</legend>

                <input type="radio" className="turnLength" name="turnLength" id="oneMin" value="1"/>
                <label htmlFor="oneMin">1 Minute</label>

                <input type="radio" className="turnLength" name="turnLength" id="twoMin" value="2"/>
                <label htmlFor="twoMin">2 Minutes</label>

                <input type="radio" className="turnLength" name="turnLength" id="threeMin" value="3"/>
                <label htmlFor="threeMin">3 Minutes</label>

                <input type="radio" className="turnLength" name="turnLength" id="fiveMin" value="5"/>
                <label htmlFor="fiveMin">5 Minutes</label>

                <input type="radio" className="turnLength" name="turnLength" id="tenMin" value="10"/>
                <label htmlFor="tenMin">10 Minutes</label>

                <input type="radio" className="turnLength" name="turnLength" id="fifteenMin" value="15"/>
                <label htmlFor="fifteenMin">15 Minutes</label>

                </fieldset>
                
                <button type="submit" onClick={handleCreateSession}>Go</button>
            </form> */}

{isSessionCreated 
? 
<div>
<p>{sessionName}</p>
<Players turnLength={turnLengthInput}/> 
</div>
:
<div>
    <h2>Set the length of turn (per player): </h2>
    <p>Enter an amount of minutes in whole or half-minute increments.</p>
    <p>So for a five and a half minute turn, enter 5.5. For a 30-second turn, enter 0.5</p>
    <p>The minimum is 0.5 minutes, the maximum is 60 minutes.</p>

    <form>
        <label htmlFor="sessionName">Session Name</label>    
        <input type="text" name="sessionName" id="sessionName" onChange={handleNameCreation} />

        <label htmlFor="turnLength">Select your desired turn length in minutes (per player): </label>
        <input type="number" name="" id="turnLength" min="0.5" max="15.5" step="0.5" value={turnLengthInput} onChange={handleInputChange}/>
        <button type="submit" onClick={handleCreateSession}>Go</button>
    </form>
</div>
}
            {/* ternary for whether the submit "Go" button is pressed. if so show the add player component */}
            {/* {isSessionCreated ? <AddPlayer turnTime={turnTimeInput}/> : null} */}
        </div>
    );
}

export default CreateSession;