<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>

<p>

#### Answer: B

<i>Write your explanation here</i>
Because here we declared greeting but didn't declared greeign so, this variable doesn't exist so we can't access any variable before the declaration

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>

<p>

#### Answer: C

<i>Beacause while adding two value in javascript it try to typecast all value in same datatype. Same for the following question. while it try to add 1 and '2' then it typecase 1 to --> '1' and add them(concat). So concatenation result is '1'+'2' = '12'</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Here while we creating ne object then we are copying the the value of food[0] and then we are changeing the value of favoriteFood object. We are not changing the main array we just accessing the value of array and use it what doesn't modify the main array it will remain same and ans will be first one</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>here sayHi function accep an argument but we are not providing it while calling so this parameter will remain undefined and in function we are accessing this parameter what is undefined. And we are concating an sring with undefind will be string so answer will be Hi there, undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Ans will be C: 3
  Here initially count = 0
  if condition execute when condition is true or truthy. Here in array 0 is falsy value so this time if condition will not execute and count will not increase. but for 1, 2, 3 these are truthy value so that time count will be increase like 
  count = 0
  num = 0   count = 0
  num = 1   count = 0+1 = 1
  num = 2   count = 1+1 = 2
  num = 3   count = 2+1 = 3

  so output = 3
</i>

</p>
</details>
