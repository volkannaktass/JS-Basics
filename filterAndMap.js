const a = [2,3,4,5];

const b = a.filter(x =>x%2 === 0);
const c = a.filter(x =>x%2 === 1);

console.log(b);
console.log(c);

const d = a.map(x => x*5);
console.log(d);

const e = a.filter(x =>x%2 === 0).map(x => x*5);
console.log(e);

const f = a.map(x => {
    if(x%2 ===0)
        return x*10
    else
        return x*5;
})

console.log(f);

