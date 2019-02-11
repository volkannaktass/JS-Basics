//let x = 4;
//x= x + 1;
// x = x - 1; ==== output 3
//console.log(x);

//if we want to use both of transaction, output will be like this:

//x = x + 1; ====5
//x = x - 1; ====3

//output is 4 because before, put 4 and first result is 5 and put 5 and second result is 4 

//====================================
//let x = 4;

//x++; => x= x + 1;
//++x; => x= x + 1;
//x--; => x= x - 1;
//--x; => x= x - 1;
//console.log(x);
//========================================
//let x = 4;
//x++;
//x--;
//console.log(x++);
//console.log(x);
//the result 4 and 5 ..
//console.log(++x);
//console.log(x);
//the result 4 and 4 because before.. wrote transaction then wrote console
//==============================================
//let x = 4;
//console.log(++x);
//console.log(x);

//let y = 4.5;
//console.log(y > x);

/*First of all it does calculate x on  console, after that it will looks y>x
 thats why it give output as false because x bigger than y..
if we dont calculate x and delete this line,otomatically it looks y > x
and it will give us true because y biggest number on this part..*/

//console.log(x > y);
//console.log(x == y);//we used "==" because == is operator calculate but only = is assign transaction
//console.log(x != y);// not equal..
//console.log(x >= y);
//console.log(x <= y);

//====
/*Normally we dont use two operator at the same time like x==y,
because there is no opposite the typeof on the scripts languages

For Example:

const a = 2;
const b = '2';
console.log(a == b);

their result is gonna be true but it is not same one..2 is number, '2' is string..differen type..
in this case what will we do?
we will use "===" three equals..this means it controls each type and each number..(opposite !==)

FOR EXAMPLE:

const a = 2;
const b = '2';
console.log(a == b);
console.log(a === b);
console.log(a !== b);

const c = '2';
const d = '2';
console.log(c === d);
console.log(c !== d);

const e = '2';
const f = '3';
console.log(e === f);
console.log(e !== f);
// ALL OF THEM ARE TYPE CONTROL
*/

//================================================

/*
we can use
for and => &&
for or  => ||
 
we will use these on the if-else statment */

/*
x = 23;
y = 24;

if(x>y){
    console.log('x y\'den buyuktur')
} else if(y>x){
    console.log('y x\'den buyuktur')
} else{
    console.log('x ve y esittir')
}
*/

// "\" its means after use, it ignores character and agrees as value on string
// if we write one line after if-else statment,we dont have to use "{}"..

//====================================================

//SWITCH

//const day=1;
//if(day === 1){
 //   console.log('Pazartesi');
//}else if(day === 2){
//    console.log('Sali')
//}else if(day === 3){
  //  console.log('Carsamba')
//}else {
//console.log('hata');
//}

  //  ===============================
/*switch (3){
     case 1:
        console.log('Pazartesi');
        break;
     case 2:
        console.log('Sali');
        break;
     case 3:
        console.log('CArsamba');
        break;
     case 4:
        console.log('Persembe');
        break;
     case 5:
        console.log('Cuma');
        break;
     case 6:
        console.log('Cumartesi');
        break;
     case 7:
        console.log('Pazar');
        break;
    default:
        console.log('hata');
    }
*/
//=====================================
//IN ONE LINE TO WRITE CONDITION

//condition ? true : false;
/*

const t = 20;
t > 30 ? console.log('t 30\'dan buyuktur.')
       : console.log('t 30\'dan kcuktur.');
*/















