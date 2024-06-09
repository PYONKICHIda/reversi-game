const seeds: string[]= [
    "A","B","C",
    "a","b","c",
    "1","2","3",
    "!","#","@"
];

const password_length: number = Number(process.argv[2]);
let password:string ='';
let random:number;

for (let i:number=0;i<password_length;i++){
    const random = Math.floor(Math.random() * seeds.length)
    password += seeds[random];
}

console.log(password);