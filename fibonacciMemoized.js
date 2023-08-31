function fibonacciMemoized(n, memo = {}) {
    if (n <= 0) return 0; // Base case: F(0) = 0
    if (n === 1) return 1; // Base case: F(1) = 1
    if (memo[n]) return memo[n]; // If value already calculated, return it from memo

    // Recursive case: F(n) = F(n-1) + F(n-2)
    memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemoized(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
