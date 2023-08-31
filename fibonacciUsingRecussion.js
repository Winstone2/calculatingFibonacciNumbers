function fibonacciRecursive(n) {
    if (n <= 0) return 0; // Base case: F(0) = 0
    if (n === 1) return 1; // Base case: F(1) = 1

    // Recursive case: F(n) = F(n-1) + F(n-2)
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(5)); // Output: 5 (0, 1, 1, 2, 3, 5)

