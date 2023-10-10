

1. Answer: B - ReferenceError: greetign is not defined
   Explanation: In this code, there's a typo in the variable name. It is declared as "greetign" but later accessed as "greetign," which will result in a ReferenceError because "greetign" is not defined.

2. Answer: D - 3
   Explanation: JavaScript performs type coercion when using the `+` operator. In the `sum` function, it tries to add a number (1) and a string ("2"). Since one of the operands is a string, JavaScript converts the number to a string and concatenates them, resulting in "12". Therefore, the `sum(1, "2")` call returns the string "12", which can be converted back to a number, and the correct answer is 3.

3. Answer: A -
   Explanation: The `info.favoriteFood` property is initially assigned the value "🍕" from the `food` array. Later, it is reassigned to "🍝". However, this reassignment only affects the `info.favoriteFood` property and does not modify the `food` array. So, when you log the `food` array, it remains unchanged, and the correct answer is option A.

4. Answer: B - Hi there, undefined
   Explanation: The `sayHi` function expects an argument `name`, but when you call `sayHi()` without passing any argument, `name` becomes `undefined`. Therefore, the function returns "Hi there, undefined".

5. Answer: A - 1
   Explanation: The `forEach` method iterates through the `nums` array and checks each element in the callback function. In JavaScript, 0 is considered a falsy value, so the `if (num)` condition will be false for the element with a value of 0. Therefore, only one element (1) will satisfy the condition and increment the `count` variable. Hence, the correct answer is 1.