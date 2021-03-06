'use strict';

var imgContainer = document.getElementById('imageContainer');
var npicture = document.getElementById('npicture');
var pictures = [];
var nailDesignsImg = [];

function NailDesigns(name, path) {
  this.name = name;
  this.path = path;
  this.shown = false;
  nailDesignsImg.push(this);
};

new NailDesigns('beigenblack', 'nails.jpg/beigenblack.jpg');
new NailDesigns('blackandwhite', 'nails.jpg/blackandwhite.jpg ');
new NailDesigns('blackswirlnail,s', 'nails.jpg/blackswirl.jpg');
new NailDesigns('cherryblosnails', 'nails.jpg/cherryblos.jpg');
new NailDesigns('goldstil.jpg', 'nails.jpg/goldstil.jpg');
new NailDesigns(' flowerprint', 'nails.jpg/flowerprint.jpg');
new NailDesigns('lines ', 'nails.jpg/lines.jpg');
new NailDesigns('navy', 'nails.jpg/navy.jpg');
new NailDesigns('neongreen', 'nails.jpg/neongreen.jpg');
new NailDesigns('Orange-Metallic-', 'nails.jpg/Orange-Metallic-.jpg');
new NailDesigns('redspark.jpg', 'nails.jpg/redspark.jpg ');
new NailDesigns(' redflow', 'nails.jpg/redflow.jpg');
new NailDesigns(' rednblack', 'nails.jpg/rednblack.jpg');
new NailDesigns(' royal', 'nails.jpg/royal.jpg');
new NailDesigns('simple ', ' nails.jpg/simple.jpg');
new NailDesigns('sparkle', ' nails.jpg/sparkle.jpg');
new NailDesigns('tiffanyblue', ' nails.jpg/tiffanyblue.jpg');
new NailDesigns(' whiteandblack', ' nails.jpg/whiteandblack.jpg');
new NailDesigns(' whitetri', ' nails.jpg/whitetri.jpg');


function turnArrayIntoImages(NailDesigns, nails) {
  var att = document.createAttribute('src');
  att.value = NailDesigns.path;
  nails.setAttributeNode(att);
}

document.getElementById('button').addEventListener('click', uniqueImg);

console.log();

function randImg() {
  // create the random number here
  return Math.floor(Math.random() * nailDesignsImg.length);
}

function uniqueImg() {
  var picture = randImg();
  console.log(nailDesignsImg[picture]);

  while (nailDesignsImg[picture].shown === true) {
    console.log('tried to show pic again');
    picture = randImg();
    if (nailDesignsImg[picture].shown !== false) {
      break;
    }
  }

  nailDesignsImg[picture].shown = true;

  console.log(nailDesignsImg[picture].shown);
  turnArrayIntoImages(nailDesignsImg[picture], npicture);

}
// break;
uniqueImg();









function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
