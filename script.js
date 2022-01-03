// gen a random number from 1 to 6
const firstRandonNum =
  Math.floor(Math.random() * 6) + 1

// imgaes/dice4.png up to image/ dice6.png
const firstDiceImage = 'assets/dice' + firstRandonNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage)

// gen a radom number from 1 to 6
const secondRandonNum =
  Math.floor(Math.random() * 6) + 1

// imgaes/dice4.png up to image/ dice6.png
const secondDiceImage = 'assets/dice' + secondRandonNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage)

// logic for winner
if (firstRandonNum > secondRandonNum) {
  document.querySelector('h1').innerHTML = '🙌The champion is User 1🐱‍👤';
} else if (firstRandonNum < secondRandonNum) {
  document.querySelector('h1').innerHTML = '🎂The champion is User 2🐱‍🏍';
} else if (firstRandonNum < secondRandonNum) {} else {
  document.querySelector('h1').innerHTML = "😢it's a Draw!😢";
}
