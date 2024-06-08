var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// 1) --a: Decrement a by 1 before using its value. a becomes 1.
// 2) --a - --b: Decrement b by 1 before using its value. b becomes 0. Then subtract b from a. Result = 1 - 0 = 1.
// 3) --a - --b + ++b: Increment b by 1 before using its value. b becomes 1. Then add b to the previous result. Result = 1 + 1 = 2.
// 4) --a - --b + ++b + b--: Use the value of b and then decrement b by 1. b becomes 0. Then add b to the previous result. Result = 2 + 1 = 3.