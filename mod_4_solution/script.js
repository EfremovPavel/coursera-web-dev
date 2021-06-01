
(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (name of names) {
  if (name.charAt(0).toLowerCase() == "j") {
    byeSpeaker.name = name;
    byeSpeaker.speak(name);
  }
  else {
    helloSpeaker.name = name;
    helloSpeaker.speak(name);
  }
}
})();
