(function () { 
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var position in names) {


    //Getting the first letter of the name in lower case
    var firstLetter = (names[position].charAt(0)).toLowerCase();

    //Comparing the first letter
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[position]);
    } else {
      helloSpeaker.speak(names[position]);
    }
  }
})();
