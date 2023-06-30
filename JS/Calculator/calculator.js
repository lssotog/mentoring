export const logResult = result => console.log(result);
export const calculator = {
    add: (a,b) => {
        const result = a + b;

        if(result > 5) {
            logResult(`Result ${result} is greater than 5`);
        } else {
            logResult(`Result ${result} is lower than 5`);
        }
        
        return result
    },
    subs: (a,b) => {
        const result = a - b;
        logResult(result)
        return result
    },
    product: (a,b) => {
        const result = a * b;
        logResult(result)
        return result
    },
    division: (a,b) => {
        const result = a / b;
        logResult(result)
        return result
    }
}