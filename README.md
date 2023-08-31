# calculatingFibonacciNumbers
Calculating Fibonacci numbers in JavaScript can be done using various approaches, such as recursion, dynamic programming, or even using mathematical formulas. Let's take a look at a simple implementation using recursion and then improve it using memoization to make it more efficient.

1. Recursion:
The Fibonacci sequence is defined by the recurrence relation F(n) = F(n-1) + F(n-2) with base cases F(0) = 0 and F(1) = 1. We can implement this directly in JavaScript using recursion, but this approach can be inefficient for large values of n due to redundant calculations.
Explanation:

    The function fibonacciRecursive takes an integer n as its argument, representing the index of the Fibonacci number we want to calculate.

    The first two if statements are the base cases of the recursion. They define the values of the Fibonacci sequence for the first two indices: F(0) is 0 and F(1) is 1. These base cases are necessary to stop the recursion when n becomes 0 or 1.

    If n is not 0 or 1, we enter the recursive case. The recursive relation for Fibonacci numbers is F(n) = F(n-1) + F(n-2). So, for any n greater than 1, we calculate the Fibonacci number by adding the values of the two previous Fibonacci numbers.

    The function recursively calls itself twice with n - 1 and n - 2 as arguments, corresponding to the two previous Fibonacci indices.

    The recursion continues until it reaches the base cases (F(0) and F(1)), at which point the recursion starts to unwind and the computed Fibonacci values start to accumulate.

    The result of fibonacciRecursive(n) is the sum of two smaller Fibonacci numbers (calculated recursively), which ultimately leads to the value of the Fibonacci number at index n.

    Finally, the console.log(fibonacciRecursive(5)); statement outputs the Fibonacci number at index 5, which is 5. This is because the sequence starting from 0 is: 0, 1, 1, 2, 3, 5, ...

While this implementation is straightforward, it can become inefficient for larger values of n due to redundant calculations. This is where optimization techniques like memoization come into play to improve performance.
2. Dynamic Programming (Memoization):
To optimize the recursive approach, we can use memoization to store the results of previously calculated Fibonacci numbers so that we don't have to recalculate them. This approach significantly reduces redundant calculations and improves performance.
Explanation:

    The fibonacciMemoized function takes two arguments: n, which represents the index of the Fibonacci number we want to calculate, and memo, which is an object used for memoization to store calculated Fibonacci values.

    The first two if statements are the base cases, just like in the previous explanation. They define the values of the Fibonacci sequence for the first two indices: F(0) is 0 and F(1) is 1.

    The third if statement checks if the Fibonacci value for index n has already been calculated and stored in the memo object. If it has, we directly return the value from the memo, which avoids redundant calculations and improves efficiency.

    If the Fibonacci value for index n is not already in the memo, we proceed to the recursive case. This part is similar to the previous recursive implementation. We recursively call fibonacciMemoized for n - 1 and n - 2 while passing the memo object to both calls.

    As the recursive calls unfold and reach the base cases, they start to build up the Fibonacci sequence values in the memo object.

    After calculating the Fibonacci value for index n, we store it in the memo object to avoid recalculating it in the future.

    Finally, we return the Fibonacci value for index n from the memo object.

    The console.log(fibonacciMemoized(5)); statement calls the fibonacciMemoized function with n equal to 5 and outputs the Fibonacci number at index 5, which is 5. This is because the sequence starting from 0 is: 0, 1, 1, 2, 3, 5, ...

The use of memoization significantly reduces redundant calculations and makes the Fibonacci calculation more efficient, especially for larger values of n.
