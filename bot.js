const input = require('sync-input');


	console.log("Hello! My name is Aid ");
	console.log("I was created in 2022.");


	console.log("Please, remind me your name.");
	let name = input();
	console.log("What a great name you have, " + name + "!");


	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = Number(input());
	let rem5 = Number(input());
	let rem7 = Number(input());

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");


	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}

console.log(`Let's test your programming knowledge.
Why do we use methods?
1. To repeat a statement multiple times.
2. To decompose a program into several small subroutines.
3. To determine the execution time of a program.
4. To interrupt the execution of a program.`);

let choice = Number(input());

while (true) {
	if (Number(input()) !== 2) {
		console.log("Please, try again.");

	} else {
		console.log("Congratulations, have a nice day!");
		break;
}
}
