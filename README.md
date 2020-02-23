# generators-es6
A simple repo about generators,so what are generators...

Generators are functions with a function* declaration ie function keyword followed by an asterisk.

Generators are functions which can be exited or paused and later keep following.

They are really helpful in asynchronous programming and help with the call back problems.

Generators uses the iterator's next() method to execute until it reaches the Yield expression and then it pauses and returns a value property of the yielded value 

When the generator function runs to the end it will return 'true',if it still has not reached the end it will return 'false' and if there are no more values it will return the default 'undefined'

As you're probably aware, a promise can only emit a single value or rejection but A generator is capable of emitting many values over time and that is its power

 halting function execution and yielding values,that is its importance
