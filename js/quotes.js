const quotes = [
    {quote : "영원히 지워지지 않을", author : "Wiah"},
    {quote : "글을 쓰고나선 반드시 맞춤법 검사를", author : "Wiah"},
    {quote : "돌이킬 수 없는 것", author : "Wiah"},
    {quote : "당신은 잘할거고 잘해왔어", author : "Wiah"},
    {quote : "반갑다고 말한거 거짓말 아니니까 그거 안고 살아", author : "Wiah"},
    {quote : "이상한 사람", author : "Ye"},
    {quote : "안녕, 그리고 안녕", author : "Ye"},
    {quote : "후회안에 답이 있어, 그러니 잊지마", author : "frank marshall george"},
    {quote : "그 것이 바로 죠지 ㄲㅅㅉㅈ", author : "frank marshall george"},
    {quote : "거짓말 아냐.", author : "Wiah"},
    {quote : "진심이었어 누가 뭐래도", author : "Wiah"},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");



function printQuote(){
    const quoteIndex = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[quoteIndex].quote;
    author.innerText = quotes[quoteIndex].author;
}

printQuote()
setInterval(printQuote,2000);
