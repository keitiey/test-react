import {
    randomNumber,
    addCommaToNumber,
    increCompare,
    decreCompare,
    Company
} from '../global';

describe('test randomNumber function', () => {
    test("min = 10, max = 30, type = 'int' => { 10 <= result <= 30 }", () => { //eslint-disable-line
        const min = 10;
        const max = 30;
        const type = 'int';

        const funcResult = randomNumber(min, max, type);
        expect(funcResult).toBeGreaterThanOrEqual(10);
        expect(funcResult).toBeLessThanOrEqual(30);
    });

    test("min = 0.01, max = 99.99, type = 'float' => { 0.01 <= result <= 99.99 }", () => { //eslint-disable-line
        const min = 0.01;
        const max = 99.99;
        const type = 'float';

        const funcResult = randomNumber(min, max, type);
        expect(funcResult).toBeGreaterThanOrEqual(0.01);
        expect(funcResult).toBeLessThanOrEqual(99.99);
    });
});

describe('test addCommaToNumber function', () => {
    test('1200000 => 1,200,000', () => { //eslint-disable-line
        const number = 1200000;

        const funcResult = addCommaToNumber(number);

        expect(funcResult).toEqual('1,200,000');
    });
});

describe('test increCompare function', () => {
    test('a.value = 100, b.value = 50 => return value of (a - b) = 50', () => { //eslint-disable-line
        const a = { id: 'a', value: 100 };
        const b = { id: 'b', value: 50 };

        const funcResult = increCompare(a, b);

        expect(funcResult).toEqual(50);
    });
});

describe('test decreCompare function', () => {
    test("a.value = 50, b.value = 100 => return value of (b - a) = 50", () => { //eslint-disable-line
        const a = { id: 'a', value: 50 };
        const b = { id: 'b', value: 100 };

        const funcResult = decreCompare(a, b);

        expect(funcResult).toEqual(50);
    });
});

describe('test class Company', () => {
    const aCompany = new Company('QBE.AX', 'QBE INSURANCE GROUP LIMITED', 12.51, 869031);
    const prevPrice = aCompany.price;
    const prevVolume = aCompany.volume;

    test('initial object successfully', () => { //eslint-disable-line
        expect(aCompany.code).not.toBeNull();
        expect(aCompany.name).not.toBeNull();
        expect(aCompany.price).not.toBeNull();
        expect(aCompany.volume).not.toBeNull();
        expect(aCompany.value).not.toBeNull();
        expect(aCompany.change).not.toBeNull();
        expect(aCompany.percentChange).not.toBeNull();
    });

    aCompany.goChange();

    test('value of price after reset', () => { //eslint-disable-line
        const scope = parseFloat(((prevPrice / 100) * 5).toFixed(2));
        expect(aCompany.change).toBeGreaterThanOrEqual(scope * -1); 
        expect(aCompany.change).toBeLessThanOrEqual(scope); 
        expect(aCompany.price).not.toBe(prevPrice);
    });

    test('value of volume after reset', () => { //eslint-disable-line
        const changedVolume = aCompany.volume - prevVolume;
        expect(changedVolume).toBeGreaterThanOrEqual(10);
        expect(changedVolume).toBeLessThanOrEqual(30);
        expect(aCompany.volume).not.toBe(prevVolume);
    });

    test('value of change after set', () => { //eslint-disable-line
        const change = parseFloat((aCompany.price - prevPrice).toFixed(2));
        expect(aCompany.change).toEqual(change);
    });

    test('value of percentChange after set', () => { //eslint-disable-line
       const percentChange = parseFloat(((aCompany.change / prevPrice) * 100).toFixed(2));
       expect(aCompany.percentChange).toEqual(percentChange);
    });

    test('value of company after set', () => { //eslint-disable-line
        const value = parseInt((aCompany.price * aCompany.volume).toFixed(0), 10);
        expect(aCompany.value).toEqual(value);
    });
});

