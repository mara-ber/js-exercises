/*
    1. Fetch the "people" array from the "data.json" file
    2. And console.log() the name of the first person.

    Remember to open "index.html" using Live Preview, and test that you get the correct results in the console!
    (you should see "Alex")
 */

function aboutPer(person) {
  return `${person.name} is ${person.age}`;
}

fetch("data.json")
  .then(function (result) {
    return result.json();
  })
  .then(function (persons) {
    persons.forEach((person) => console.log(aboutPer(person)));
    //console.log(`${person.name} is ${person.age}`));
    //console.log(persons[0].name)     // ---> second part of the exercise
  });
