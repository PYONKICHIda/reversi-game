function getRandomChar(...chars:string[]): string {
    const index = Math.floor(Math.random() * chars.length + 1);
    return chars[index];
}

console.log(getRandomChar("1","a","A","B","C"));