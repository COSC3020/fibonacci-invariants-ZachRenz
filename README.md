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

What we can always assume is true is that the first two items in our array are defined as `x[0] = 0` and `x[1] = 1`, or in terms of the Fibonacci sequence $F_1 = 0$ and $F_2 = 1$. There is never a case when this is not true or it would not be the Fibonacci sequence by definition. We can also assume that the next iteration is always the sum of the previous two iterations, this is the invariant for our recursive functions. 

Let's say we are finding `fib(4)`, which should give us `[0, 1, 1, 2, 3]`.

The function passes through `fib` because our iteration is not 0 or 1. Then it goes into `fibFind` and our list is `x = [0,1]`. 

Then the function checks if n == 2, assuming that the list is already defined for $n_0$ and $n_1$. n is not 2 in our case so it recursively calls `fibFind(n-1)` where n is 3, and then does it again until n == 2. Then we finally run `x.push(1)`, or the sum of 0 and 1, I used 1 to save calculating what we can already assume from the invariant when we get to this case. Then we return and get to the recursive case when n = 3 and we run `x.push(x[n-1]+x[n-2])`, the formula for the sequence and the invariance of our recursive functions, to produce the next iteration and so on to build our array and return it when finished. Any particular iteration will always use the invariant, or the finbonacci forumla, to produce the next value.

So in conclusion, the invariant for this function is that the next iteration is always the sum of the previous two numbers. 

## How this works for any n in fib(n) and for every recursive call

After we run through our intial cases and get into the function that uses fibonacci. We recursively go down to $F_3$, or the third iteration of the sequence. When fibFind for $F_3$ closes we move up to $F_4$ and so on... using the fact that the next iteration is the sum of the previous two, or $F_n = F_{n-1} + F{n-2}$, we can find $F_4$ and close the recursive call, find $F_5$ and close that call, all the way to our $F_n$ for any n value. 

Every recursive call knows that the next iteration is the sum of the previous two numbers, that's how we can build the rest of the array after we know that the first two values are 0 and 1. After we recursive call down to `n = 3` and add 1 and return, every recursive call after will return the sum of the two previous numbers and build the array back up to whatever n the user inputs. 
