/*
function minMax(nums) {

  const result = {
    min: null,
    max: null,
  }

  for(let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (value < result.min || result.min === null) {
      result.min = value;
    }

    if(value > result.max || result.max === null) {
      result.max = value;
    }
  }

return result;


}

console.log(minMax([-1,2,4,-3]))
*/

/* Tento kod níže:Najde slovo search a vyhodí ho jako index stím že je uvedeno dvakrát
ale díky break to zastaví na prvním search a dál nepokračuje.

let arrayOfStrings = ['hello','world','search','good','search'];
let index = -1;
for (let i = 0; i < arrayOfStrings.length; i++) {
  const arrayWord = arrayOfStrings[i];
  
  if(arrayWord === 'search') {
    index = i;
    break;
  } 
}

console.log(index);
*/


//Odstraneni Slova z array pomoci remove techniky a také otoceni array pomoci .reverse 
//a zachování i puvodního array pomoc .splice jde to i chainovat .splice().reverse()
/*
const foods = ['egg','apple','egg','egg','ham'];
console.log(removeEgg(foods));
console.log(foods);

function removeEgg(foods) {
  const foodsCopy = foods.slice();
  const reversedFoods = foods.reverse();


  const result = [];
  let eggsRemoved = 0;

for(let i = 0; i < reversedFoods.length; i++) {
  //Přeskoči egg pokud jsme nepřeskočili vice jak dvě. Když jsme preskocili prvni
  //přidá se výsledek do promenne eggsRemoved a tak se zjisti jestli už jich není vice 
  //jak dvě.
  if(reversedFoods[i] === 'egg' && eggsRemoved < 2) {
    eggsRemoved++
    continue; 
  } 
    result.push(reversedFoods[i]);
  }
  return result.reverse();
}
*/

/*
for (let i = 1; i < 20; i++) {

  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } 
  else if (i % 3 === 0) {
    console.log('Fizz');
  } 
  else if(i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
  */


  


}

