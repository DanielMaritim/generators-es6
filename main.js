function* simpleGenerator () {
	yield ('orange');
	yield ('banana');
	
}
let sample = simpleGenerator();
console.log(sample.next());
// yield means pause
// JavaScript runs code until to the next yield statement and pause