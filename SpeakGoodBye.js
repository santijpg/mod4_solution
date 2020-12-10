(function (window) {
  var speakWord = "Good Bye";

  //Define object
  var byeSpeaker = {};

  //Define speak function
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);