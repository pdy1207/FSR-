const quotes = [
  //10개의 명언
  {
    quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: "SEth Godin",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
]; // 1o개의 명언
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//이거 전부가 숫자가 됨으로 각 명언을 랜덤으로 가져온다.
//ㅊ는 소수점을 버리는 것(버림),
//Math.ceil은 소수점을 올리는 것(올림),
//Math.round는 소수점을 반올림
//↓ 바인딩 해주기
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

console.log(quote);
