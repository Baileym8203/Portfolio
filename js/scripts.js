// start of full stack animation
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}
// start of word animation!
changeWord();
setInterval(changeWord, 4000);

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});

// the blur event listeners!
document.getElementById('button1').addEventListener('click', function () {
 document.getElementById('1')
  .classList.toggle('blur');
  document.getElementById('2')
  .classList.toggle('blur');
  document.getElementById('3')
  .classList.toggle('blur');
});

document.getElementById('button2').addEventListener('click', function () {
   document.getElementById('button1')
   .classList.add('blur');
   document.getElementById('1')
   .classList.toggle('blur');
   document.getElementById('3')
   .classList.toggle('blur');
 });

 // adding in escape functions to both about and contact! will close the small mini pages with "Escape" key

 document.getElementById('button1').addEventListener('keydown', function(e) {
  if(e.key === "Escape") {
 document.getElementById('button3')
 .click(); //this will click the button virtually in the DOM
 document.getElementById('1')
  .classList.toggle('blur');
  document.getElementById('2')
  .classList.toggle('blur');
  document.getElementById('3')
  .classList.toggle('blur');
 }
 });

 document.getElementById('button2').addEventListener('keydown', function(e) {
  if(e.key === "Escape") {
    document.getElementById('button4')
    .click(); //this will click the button virtually in the DOM
    document.getElementById('button1')
     .classList.toggle('blur');
     document.getElementById('1')
     .classList.toggle('blur');
     document.getElementById('3')
     .classList.toggle('blur');
  }
 });

 