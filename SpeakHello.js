(function (window) {
  var speakWord = "Hello";

  //Define object
  var helloSpeaker = {};

  //Define speak function
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);

