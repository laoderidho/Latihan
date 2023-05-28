const getFibbonaci = (n) => {
    const fibbonaciResult = [];

    let i  = 0;
    while (i < n) {
        if (i < 2) {
            fibbonaciResult.push(i);
        } else {
            fibbonaciResult.push(fibbonaciResult[i - 2] + fibbonaciResult[i - 1]);
        }
        i++;
    }

    return fibbonaciResult;

}

console.log(getFibbonaci(10));