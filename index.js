const cards = (["Charlie", "Samip", "Ali"], "birthday");

function writeCards(cards,birthday) {
  const messages = [];
  for(let i = 0; i < cards.length; i++){
  console.log(`Thank you, ${cards[i]},for the wonderful ${birthday} gift!`);
  messages.push(`Thank you, ${cards[i]}, for the wonderful ${birthday} gift!`);

  }
  return messages;

}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
}

}
