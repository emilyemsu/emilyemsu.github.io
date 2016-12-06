// Provides the state machine descriptions and creates a new game


//First, load in all of our images
var loadCounter = 0;
var totalImg = 0;

var img_size = 50
var radius = 200

var center_x = 375
var center_y = 200 


var white_circle = new Image();
totalImg++;
white_circle.onload = function() {
  loadCounter++;
}
white_circle.src = 'white_circle.png';

var flower = new Image();
totalImg++;
flower.onload = function() {
  loadCounter++;
}
flower.src = 'flower1.png';

// function for randomly generating position
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Create our actors and their FSMs
var breath = new Actor({
  height: img_size,
  width: img_size,
  x: center_x,
  y: center_y,
  img: white_circle
}); 

var breath_1 = new Actor({
  height: img_size,
  width: img_size,
  x: center_x,
  y: center_y,
  img: white_circle
}); 

var breath_2 = new Actor({
  height: img_size,
  width: img_size,
  x: center_x,
  y: center_y,
  img: white_circle
}); 

var breath_3 = new Actor({
  height: img_size,
  width: img_size,
  x: center_x,
  y: center_y,
  img: white_circle
}); 

var breath_4 = new Actor({
  height: img_size,
  width: img_size,
  x: center_x,
  y: center_y,
  img: white_circle
}); 

var breath_5 = new Actor({
  height: img_size,
  width: img_size,
  x: center_x,
  y: center_y,
  img: white_circle
}); 

var breath_6 = new Actor({
  height: img_size,
  width: img_size,
  x: center_x,
  y: center_y,
  img: white_circle
}); 

var breath_7 = new Actor({
  height: img_size,
  width: img_size,
  x: center_x,
  y: center_y,
  img: white_circle
}); 

var breath_8 = new Actor({
  height: img_size,
  width: img_size,
  x: center_x,
  y: center_y,
  img: white_circle
}); 

breath.setFSM('unfocused', { 
    'unfocused': {
        "startsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false} },
                    { func: Actions.changeSizeAnim,
                      params: { actor: breath, width: 400, height: 400, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "startinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false } }],
          endState: "unfocused"
        },
        "showinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "inhaling": {
          actions: [{ func: Actions.changeSizeAnim,
                      params: { actor: breath, width: 400, height: 400, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "animmove": {
            actions: [{ func: Actions.redraw }],
            endState: "unfocused"
        },
        "exhaling": {
            actions: [{ func: Actions.changeSizeAnim,
                        params: { actor: breath, width: img_size, height: img_size, duration: 4000 }}],
            endState: "unfocused"
        }
    }
});

breath_1.setFSM('unfocused', { 
    'unfocused': {
        "mousemove": {
          actions: [{ func: Actions.opacityAnim,
                      params: { actor: breath_1, duration: 2000, start_o: 0.3} }],
          endState: 'unfocused'
        },
        "startinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false} },
                    { func: Actions.changeDirectionAnim,
                      params: { actor: breath_1, destX: 575, destY: 200, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "startsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false } }],
          endState: "unfocused"
        },
        "inhaling": {
          actions: [{ func: Actions.changeDirectionAnim,
                      params: { actor: breath_1, destX: 575, destY: 200, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "animmove": {
            actions: [{ func: Actions.redraw }],
            endState: "unfocused"
        },
        "exhaling": {
            actions: [{ func: Actions.changeDirectionAnim,
                        params: { actor: breath_1, destX: center_x, destY: center_y, duration: 4000 }}],
            endState: "unfocused"
        },
        "mousedown": {
            actions: [{ func: Actions.changeImg,
                        params: { actor: breath_1, img1: flower, img2: white_circle }}],
            endState: "unfocused"
        }
    }
});

breath_2.setFSM('unfocused', { 
    'unfocused': {
        "mousemove": {
          actions: [{ func: Actions.opacityAnim,
                      params: { actor: breath_2, duration: 2000, start_o: 0.3} }],
          endState: 'unfocused'
        },
        "startinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false} },
                    { func: Actions.changeDirectionAnim,
                      params: { actor: breath_2, destX: 516, destY: 341, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "startsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false } }],
          endState: "unfocused"
        },
        "inhaling": {
          actions: [{ func: Actions.changeDirectionAnim,
                      params: { actor: breath_2, destX: 516, destY: 341, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "animmove": {
            actions: [{ func: Actions.redraw }],
            endState: "unfocused"
        },
        "exhaling": {
            actions: [{ func: Actions.changeDirectionAnim,
                        params: { actor: breath_2, destX: center_x, destY: center_y, duration: 4000 }}],
            endState: "unfocused"
        },
        "mousedown": {
            actions: [{ func: Actions.getDragFocus }],
            endState: "focused"
        },
        "mousedown": {
            actions: [{ func: Actions.changeImg,
                        params: { actor: breath_2, img1: flower, img2: white_circle }}],
            endState: "unfocused"
        }
    }

});

breath_3.setFSM('unfocused', { 
    'unfocused': {
        "mousemove": {
          actions: [{ func: Actions.opacityAnim,
                      params: { actor: breath_3, duration: 2000, start_o: 0.3} }],
          endState: 'unfocused'
        },
        "startinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false} },
                    { func: Actions.changeDirectionAnim,
                      params: { actor: breath_3, destX: 375, destY: 400, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "startsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false } }],
          endState: "unfocused"
        },
        "inhaling": {
          actions: [{ func: Actions.changeDirectionAnim,
                      params: { actor: breath_3, destX: 375, destY: 400, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "animmove": {
            actions: [{ func: Actions.redraw }],
            endState: "unfocused"
        },
        "exhaling": {
            actions: [{ func: Actions.changeDirectionAnim,
                        params: { actor: breath_3, destX: center_x, destY: center_y, duration: 4000 }}],
            endState: "unfocused"
        },
        "mousedown": {
            actions: [{ func: Actions.changeImg,
                        params: { actor: breath_3, img1: flower, img2: white_circle }}],
            endState: "unfocused"
        }
    }
});

breath_4.setFSM('unfocused', { 
    'unfocused': {
        "mousemove": {
          actions: [{ func: Actions.opacityAnim,
                      params: { actor: breath_4, duration: 2000, start_o: 0.3} }],
          endState: 'unfocused'
        },
        "startinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false} },
                    { func: Actions.changeDirectionAnim,
                      params: { actor: breath_4, destX: 233, destY: 341, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "startsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
         "showsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false } }],
          endState: "unfocused"
        },
       "inhaling": {
          actions: [{ func: Actions.changeDirectionAnim,
                      params: { actor: breath_4, destX: 233, destY: 341, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "animmove": {
            actions: [{ func: Actions.redraw }],
            endState: "unfocused"
        },
        "exhaling": {
            actions: [{ func: Actions.changeDirectionAnim,
                        params: { actor: breath_4, destX: center_x, destY: center_y, duration: 4000 }}],
            endState: "unfocused"
        },
        "mousedown": {
            actions: [{ func: Actions.changeImg,
                        params: { actor: breath_4, img1: flower, img2: white_circle }}],
            endState: "unfocused"
        }
    }
});

breath_5.setFSM('unfocused', { 
    'unfocused': {
        "mousemove": {
          actions: [{ func: Actions.opacityAnim,
                      params: { actor: breath_5, duration: 2000, start_o: 0.3} }],
          endState: 'unfocused'
        },
        "startinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false} },
                    { func: Actions.changeDirectionAnim,
                      params: { actor: breath_5, destX: 175, destY: 200, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "startsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false } }],
          endState: "unfocused"
        },
        "inhaling": {
          actions: [{ func: Actions.changeDirectionAnim,
                      params: { actor: breath_5, destX: 175, destY: 200, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "animmove": {
            actions: [{ func: Actions.redraw }],
            endState: "unfocused"
        },
        "exhaling": {
            actions: [{ func: Actions.changeDirectionAnim,
                        params: { actor: breath_5, destX: center_x, destY: center_y, duration: 4000 }}],
            endState: "unfocused"
        },
        "mousedown": {
            actions: [{ func: Actions.changeImg,
                        params: { actor: breath_5, img1: flower, img2: white_circle }}],
            endState: "unfocused"
        }
    }
});

breath_6.setFSM('unfocused', { 
    'unfocused': {
        "mousemove": {
          actions: [{ func: Actions.opacityAnim,
                      params: { actor: breath_6, duration: 2000, start_o: 0.3} }],
          endState: 'unfocused'
        },
        "startinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false} },
                    { func: Actions.changeDirectionAnim,
                      params: { actor: breath_6, destX: 233, destY: 55, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "startsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false } }],
          endState: "unfocused"
        },
        "inhaling": {
          actions: [{ func: Actions.changeDirectionAnim,
                      params: { actor: breath_6, destX: 233, destY: 55, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "animmove": {
            actions: [{ func: Actions.redraw }],
            endState: "unfocused"
        },
        "exhaling": {
            actions: [{ func: Actions.changeDirectionAnim,
                        params: { actor: breath_6, destX: center_x, destY: center_y, duration: 4000 }}],
            endState: "unfocused"
        },
        "mousedown": {
            actions: [{ func: Actions.changeImg,
                        params: { actor: breath_6, img1: flower, img2: white_circle }}],
            endState: "unfocused"
        }
    }
});

breath_7.setFSM('unfocused', { 
    'unfocused': {
        "mousemove": {
          actions: [{ func: Actions.opacityAnim,
                      params: { actor: breath_7, duration: 2000, start_o: 0.3} }],
          endState: 'unfocused'
        },
        "startinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false} },
                    { func: Actions.changeDirectionAnim,
                      params: { actor: breath_7, destX: center_x, destY: 0, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "startsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false } }],
          endState: "unfocused"
        },
        "inhaling": {
          actions: [{ func: Actions.changeDirectionAnim,
                      params: { actor: breath_7, destX: center_x, destY: 0, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "animmove": {
            actions: [{ func: Actions.redraw }],
            endState: "unfocused"
        },
        "exhaling": {
            actions: [{ func: Actions.changeDirectionAnim,
                        params: { actor: breath_7, destX: center_x, destY: center_y, duration: 4000 }}],
            endState: "unfocused"
        },
        "mousedown": {
            actions: [{ func: Actions.changeImg,
                        params: { actor: breath_7, img1: flower, img2: white_circle }}],
            endState: "unfocused"
        }
    }
});

breath_8.setFSM('unfocused', { 
    'unfocused': {
        "mousemove": {
          actions: [{ func: Actions.opacityAnim,
                      params: { actor: breath_8, duration: 2000, start_o: 0.3} }],
          endState: 'unfocused'
        },
        "startinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false} },
                    { func: Actions.changeDirectionAnim,
                      params: { actor: breath_8, destX: 516, destY: 58, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "startsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showsingle": {
          predicate: function(event, actor){ 
              return event.target.id == "single" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: true } }],
          endState: "unfocused"
        },
        "showinteractive": {
          predicate: function(event, actor){ 
              return event.target.id == "interactive" },
          actions: [{ func: Actions.setHidden,
                      params: { hidden: false } }],
          endState: "unfocused"
        },
        "inhaling": {
          actions: [{ func: Actions.changeDirectionAnim,
                      params: { actor: breath_8, destX: 516, destY: 58, duration: 4000 }
                    }],
          endState: "unfocused"
        },
        "animmove": {
            actions: [{ func: Actions.redraw }],
            endState: "unfocused"
        },
        "exhaling": {
            actions: [{ func: Actions.changeDirectionAnim,
                        params: { actor: breath_8, destX: center_x, destY: center_y, duration: 4000 }}],
            endState: "unfocused"
        },
        "mousedown": {
            actions: [{ func: Actions.changeImg,
                        params: { actor: breath_8, img1: flower, img2: white_circle }}],
            endState: "unfocused"
        }
    }
});


//When the DOM has loaded, actually setup our game
window.onload = function() { 
  var game = new Game(document.getElementById("game"));
  game.addActor(breath_1);
  game.addActor(breath_2);
  game.addActor(breath_3);
  game.addActor(breath_4);
  game.addActor(breath_5);
  game.addActor(breath_6);
  game.addActor(breath_7);
  game.addActor(breath_8);
  game.addActor(breath);

  var singleCalled = false;
  var interactiveCalled = false;


  document.getElementById("single").addEventListener("click", function(event) {
    if (!singleCalled) {
      event = _.clone(event);
      event.type = "startsingle";
      game.dispatchToAll(event);    
      singleCalled = true;  
    } else {
      event = _.clone(event);
      event.type = "showsingle";
      game.dispatchToAll(event);
    }
  });
  document.getElementById("interactive").addEventListener("click", function(event) {
    if (!interactiveCalled) {
      event = _.clone(event);
      event.type = "startinteractive";
      game.dispatchToAll(event);
      interactiveCalled = true;
    } else {
      event = _.clone(event);
      event.type = "showinteractive";
      game.dispatchToAll(event);
    }
  });

  //Wait for all of the imaages to load in before we start the game
  var runGame = function() {
    if (loadCounter >= totalImg)
      game.run();
    else
      setTimeout(function() { runGame() }, 200);
  }
  runGame();
};



