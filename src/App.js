import './App.css';
import CreateSession from './components/CreateSession';
// import Timer from './components/Timer';
import Players from './components/Players';

function App() {
  return (
    <div className="App" id="root">
      <h1>Hello I am a Useful thing! Sort of a timer. Thank you for coming!</h1>
      <CreateSession />
      {/* <Players /> */}
      {/* <Timer /> */}
    </div>
  );
}

export default App;


//Boardgame "turn" timer
  //uses firebase - user puts in names of all ppl playing the game. Each person ('player') has a timer, say 5 mins 
  //ideal if user can decide how long each turn should be

//setupUser starts a session, gives it a name, or a random sessionName is given 
  //add players > fill form and press button which adds player name to the list of players. Each player will show up as a card with a timer below their name. The number of mins/secs on the timer will be filled in already bc the setupUser chose how many mins per turn when they made the session
    //make a way to change the number of mins per turn - at the top changes everyone - or within each individual card?
  //each card has arrow buttons to move it up and down in the list, to arrange based on what order everyone plays
  //when its player's turn, select their card (outline becomes highlighted) and press start. Can also pause the timer and reset the timer. Reset is called "move to next player" and sets current player timer back to the baseline, moves the highlight to the next person in the list AND adds the total time they've used to their total time along the bottom. all these add up to see total game time.

//main component to start with is countdown timer.
  //enter amount of time that each person should have 
  //user presses 'start timer' and the time counts down from 5 mins


  //struggles so far:
  //how to 'control' radio buttons? they each have a hardcoded value, so i can't make the value connected to the state. Does this question even make sense or is it revealing that I misunderstand something about "controlling" components??
  //best way to avoid prop drilling to pass the "turn length" down from CreateSession to 