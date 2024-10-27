module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const bracketPairs = Object.fromEntries(bracketsConfig);

    for (let char of str) {
        const isOpeningBracket = bracketPairs[char] === char ? !stack.includes(char) : bracketPairs[char] !== undefined;

        if (isOpeningBracket) {
            stack.push(char);
        } else {
            const lastOpened = stack.pop();
            if (bracketPairs[lastOpened] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
