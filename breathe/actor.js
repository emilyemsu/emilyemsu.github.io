/**
 * @constructor
 * @param {props} An object containing properties for the actor
 */
function Actor(props) {
  this.parent = null; //Set in the game.addActor method
  //TODO add additional properties for each eactor
  this.height = props.height;
  this.width = props.width;
  this.x = props.x;
  this.y = props.y;
  this.img = props.img;
  this.hidden = false;
  this.animStarted = false;
  this.opacity = 1;

};

/**
 * Sets the FSM for the particular actor. 
 * @param {Object} FSM object as detailed in the instructions
 */
Actor.prototype.setFSM = function(startState, fsm) {
  this.states = fsm;
  this.currentState = fsm[startState];
}

/**
 * Recieves an event from dispatch and transitions the FSM appropriately
 * @param {Event} The event object recieved, which includes certain information
 *  depending on the event type
 * @return {boolean} True if the event was consumed by the actor, false if it
 *  was not consumed
 */
Actor.prototype.deliverEvent = function(event) {
  //TODO
  var ev = this.currentState[event.type];
  if(ev == null) {
    return false;
  }
  var predicate = ev.predicate;
  if(predicate != null) {
    if(predicate(event) === false ){
      return false;
    }
  }
  this.makeTransition(event, ev);
  return true;
}

/**
 * Transitions the FMS for a particular transition and event
 * @param {Event} event object recieved, which includes certain information
 *  depending on the event type
 */
Actor.prototype.makeTransition = function(event, transition) {
  //TODO
  //perform all the actions and then make current state the end state 
  var actions = transition.actions;
  for(var i=0; i < actions.length; i++) {
  	var action = actions[i];
  	action.func(event, action.params, this);
  }
  this.currentState = this.states[transition.endState]; 
}

/**
 * Draws the actor on the canvas based on its parameters
 * @param {Context} The HTML5 canvas context object to be drawn on. 
 */
Actor.prototype.draw = function(context) {
  //TODO
  if(this.img != null && this.hidden == false) {
    context.globalAlpha = this.opacity;
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
    context.globalAlpha = 1;
  }
}
