[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

## Invariant Answer

After doing some research into the full definition of an invariant, this one helped me the most. 

An invariant is any logical rule that must be obeyed throughout the execution of your program that can be communicated to a human, but not to your compiler.

Or something that holds true to every iteration of my code, is something that I can tell you but my compiler doesn't know even though it follows it, it's a rule that happens naturally in runtime. But we also need that invariant to have a crucial role in how this program actually works and produces our result in runtime.

My invariant is that, for every iteration, the list in my function always contains all the values of the fibonacci sequence to the iteration previous to the one whose turn it is to compute. Where $F_n = F_{n-1} + F_{n-2}$, Where $F_0 = 0$ and $F_1 = 1$. Or that we have the complete list of the sequence to `n-1` for any `n` (`n` being our current iteration number). 

In runtime, after `fib` runs and concludes that we aren't asking for the first number or first two numbers of the sequence, we set `x = [0, 1]` and start `fibFind`. Once we recursively call to `n = 2`, this is now the first function that will compute, our invariant is true. Then when we push 1 into the list and return to `n = 3`, our invariant is still true, only holding the values of the sequence to $F_2$.

This is also the logical rule that completes our function. As we go from `n = 3` to `n = 4` until the last iteration, the list will have all the information needed for the iteration to input the next number into the list and return up to the next `n`. And then the last iteration will return our last number in the sequence and return our result. This proves that our function is true and works. 

