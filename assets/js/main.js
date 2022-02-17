//Lev3_1
console.log('%c Lev 3_1', 'color: darkred; font-weight:900');

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `

console.log(text.length);

let text2 = text.substring(0, 100);
console.log(text2);
let text3 = text.replace(text.substring(0, 100), '');
console.log(text3);
console.log(text3.indexOf('re'));

let textArray = [];

for (let i = 0; i < text.length; i++) {
    console.log('holyshittest');
    textArray.push(text.substring(0, 100) + ' - ' + [i + 1] + ' of ' + 27);
    text = text.replace(text.substring(0, 100), '');
    // console.log(text);
}
console.log(textArray);

//Lev3_2
console.log(' ');
console.log('%cLev3_2', 'color:darkred; font-weight:900');


//Aufgabe: Finde heraus, durch welche Zahl (außer 0 und sich selbst) eine Zahl teilbar ist. 
//-> hier sind ganzzahlige Ergebnisse gemeint, da man theoretisch durch alle reellen Zahlen außer 0 teilen kann. lol

let numArr = [5, 22, 15, 100, 55]

// wenn x !=1 && x!=0 && x!=numArr[i] && numArr[i]%x ===0, dann clg 
// range of i???? i.value????


for (let i = 0; i < numArr.length; i++) {
    // console.log(numArr[i]);
    for (let x = 0; x < numArr[i]; x++) {
        if (x != 1 && x != numArr[i] && numArr[i] % x === 0) {
            console.log(numArr[i] + ' lässt sich durch ' + x + ' teilen! Das Ergebnis ist ' + (numArr[i] / x));
        }
    }
}

//Lev3_3
console.log(' ');
console.log('%cLev3_3', 'color:darkred; font-weight:900');

// if input == 0 -> clg('Error')
//if input % 2 == 0 -> input * 'o's
// if input % 2 == 1 -> (input / 2)* 'o0's ?
// Länge loop i == Länge Number(Zahl) input
// -> ungerade Zahlen: Loop for -> += -> if i % 2 ==1 -> += 'o'; else if i%2==0 ->+= '0' ??
//Arrayausgabe? -> Array push -> clg ( 'L' + array (for each???) + 'p')??? Oder string????

let input = document.getElementById('inputNum');
let out = document.getElementById('out');

function loopMe() {
    let y = Number(input.value);
    console.log(y);
    let o = '';
    if (y === 0) {
        out.innerHTML = `<h1 style='color:red;'> ERROR</h1>`
    } else if (y % 2 === 0) {
        for (let i = 0; i < y; i++) {
            o += 'o';
            // console.log('L' + o + 'p');
        }
        out.innerHTML = `<h1 style='color:yellowgreen;'> L${o}p</h1>`;
    } else if (y % 2 === 1) {
        for (let j = 1; j <= y; j++) {
            if (j % 2 === 1) {
                o += 'o';
            } else if (j % 2 === 0) {
                o += '0';
            }
        }
        out.innerHTML = `<h1 style='color:yellowgreen;'> L${o}p</h1>`;
    }
}

//Lev3_4
console.log(' ');
console.log('%cLev3_4', 'color:darkred; font-weight:900');

// i = 1; i <= input.value; i++
// if i % zahl1 === 0 -> sum += i
//else if i % zahl2 === 0 -> sum+= i
//for loop -> clg sum

let digitMax = document.getElementById('digitMax');
let digitOne = document.getElementById('digitOne');
let digitTwo = document.getElementById('digitTwo');
let out2 = document.getElementById('output4');

function calcMe() {
    let sum = 0;
    let dMax = Number(digitMax.value);
    let z1 = Number(digitOne.value);
    let z2 = Number(digitTwo.value);
    if (dMax && z1 && z2 && (z1 != z2) && (z1 != dMax) && (z2 != dMax)) {
        for (i = 1; i <= dMax; i++) {
            if (i % z1 === 0) {
                sum += i;
                console.log(sum);
            } else if (i % z2 === 0) {
                sum += i;
                console.log(sum);
            }
        }
        console.log('sum ist: ' + sum);
        out2.innerHTML = sum;
    } else {
        console.log('Error');
        out2.innerHTML = `<h1 = style='color:red'>Error: There's either a digit missing, you used 0 or the same digits</h1>`;
    }
}
