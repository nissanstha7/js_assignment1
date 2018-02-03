var customName = document.getElementById('customname');

var randomize = document.querySelector('.randomize');

var story = document.querySelector('.story');



function randomValueFromArray(array){

  var random = Math.floor(Math.random()*array.length);

  return array[random];

}



var storyText = 'Long time ago, :inserta: created the universe where Adam and Eve used to live together. On a :insertb:, Adam and Eve were walking together when they saw the forbidden fruit. The :insertc: appeared miraculously and convinced Eve to eat the forbidden fruit';

var inserta = ['God','Lord','The Almighty'];

var insertb = ['sunny day','dark day','rainy'];

var insertc = ['devil','evil','sinner'];



randomize.addEventListener('click', result);



function result() {

  var newStory = storyText;



  var aItem = randomValueFromArray(inserta);

  var bItem = randomValueFromArray(insertb);

  var cItem = randomValueFromArray(insertc);



  newStory = newStory.replace(':inserta:',aItem);

  newStory = newStory.replace(':insertb:',bItem);

  newStory = newStory.replace(':insertc:',cItem);



  if(customName.value !== '') {

    var name = customName.value;

    newStory = newStory.replace('Adam',name);

  }

  story.textContent = newStory;

  story.style.visibility = 'visible';

}
