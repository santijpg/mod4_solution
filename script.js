(function (window) { 
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var position in names) {


    //Getting the first letter of the name in lower case
    var firstLetter = (names[position].charAt(0)).toLowerCase();

    //Comparing the first letter
    if (firstLetter === 'j') {
      window.byeSpeaker.speak(names[position]);
    } else {
      window.helloSpeaker.speak(names[position]);
    }
  }
})(window);
