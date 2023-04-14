let product = 'Artichoke';
let price = 3.99;
price = 2.25;
let qty = 5;
"You bought " + qty + " " + product + ". Total is: " + price * qty;
// You bought 5 Artichoke. Total is: 11.25

`hello ${1 + 2 + 9}`;
// "hello 12"

`You bought ${qty} ${product}. Total is: $$(price * qty)`
// You bought 5 Artichoke. Total is: 11.25

// 백틱 : ` (중요)
// ${} (계산식)