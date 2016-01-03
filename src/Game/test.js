function fib2(n) {
    var f = []
    f[0] = 0
    if (n > 0) {
        f[1] = 1
        for (i = 2; i <= n; i++) {
            f[i] = f[i -1] + f[i - 2]
        }
    }
    return f[n]
}
