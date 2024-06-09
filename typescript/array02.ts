const items = ["イチゴ","リンゴ","バナナ"];



items.push("みかん");
items.unshift("ブドウ");
console.table(items);

items[0] = "オレンジ";
console.table(items);

items.shift();
items.pop();
console.table(items);

console.log(items.slice(1,3));
