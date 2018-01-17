export const cons = (x, y) => m => m(x, y);

export const car = (pair) => {
    return pair((x, y) => x);
};

export const cdr = (pair) => {
    return pair((x, y) => y);
};
