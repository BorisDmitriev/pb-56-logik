const rewire = require("rewire");
const fs = require("fs");
const content = fs
    .readFileSync("./index.js")
    .toString("utf-8")
    .replace(/ ()/g, "");
const solution = rewire("../index.js");

describe('1. Lowest to Highest', () => {
    it('`sortNumbers` function should return the passed array of numbers sorted in ascending order', () => {
        const sortNumbers = solution.__get__("sortNumbers");
        expect(sortNumbers([4, 2, 5, 3, 9, 2, 1, 8, 6])).toEqual([1, 2, 2, 3, 4, 5, 6, 8, 9]);
    })
})

describe('2. Alphabetical Order', () => {
    it('`sortNames` function should return the passed array sorted in alphabetical order `a → z`', () => {
        const sortAlphabetical = solution.__get__("sortNames");
        expect(sortAlphabetical(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"])).toEqual(["Ale", "Bleda", "Fran", "Hadi", "Jenna", "Leon"]);
    })
})