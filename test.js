const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected); 
});


test("10 dollars should be converted to yen correctly", function() {
    const yen = fromDollarToYen(10);  
    const expected = (10 / 1.07) * 156.5;  
    expect(yen).toBe(expected);  
});


test("1000 yen should be converted to pounds correctly", function() {
    const pounds = fromYenToPound(1000);  
    const expected = (1000 / 156.5) * 0.87;  
    expect(pounds).toBe(expected);  
});
