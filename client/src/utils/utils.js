export const numberDecimals = (number) => {
    number = number.toString();
    const parts = [];
    let current = '';
    for (let i = number.length - 1; i >= 0; i--) {
        current = number[i] + current;
        if (current.length === 3 || i === 0) {
            parts.unshift(current);
            current = '';
        }
    }
    const separateNumber = parts.join('.');

    return separateNumber;
};