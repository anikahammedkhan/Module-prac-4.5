// 1.Convert the following JavaScript array into a TypeScript tuple

// const userInfo = [101, "Ema", "John", true, , "2023"];

// solution 1:
type UserInfoTuple = [number, string, string, boolean, unknown, string];

const userInfo: UserInfoTuple = [101, "Ema", "John", true, , "2023"];



// 2.Write a TypeScript function that takes in two arrays of numbers as parameters.The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

//For example, if the first array is[1, 2, 3, 4, 5] and the second array is[2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

// The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.

// solution 2:

function getCommonElements(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];

    for (const num1 of arr1) {
        if (arr2.includes(num1) && !result.includes(num1)) {
            result.push(num1);
        }
    }

    return result;
}

// Example usage
const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [2, 4, 6, 8];
const commonElements: number[] = getCommonElements(arr1, arr2);
console.log(commonElements); // Output: [2, 4]


// 3.You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion, and returns a new array containing only the products that match the given criterion and value.Use a generic type parameter in the function signature to ensure type safety.

// Solution 3:

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

function filterProducts<T extends keyof Product>(
    products: Product[],
    criterion: T,
    value: Product[T]
): Product[] {
    return products.filter((product) => product[criterion] === value);
}

// Example usage
const products: Product[] = [
    { id: 1, name: "Product 1", price: 10, category: "Category 1" },
    { id: 2, name: "Product 2", price: 20, category: "Category 2" },
    { id: 3, name: "Product 3", price: 30, category: "Category 1" },
];

const filteredProducts = filterProducts(products, "category", "Category 1");
console.log(filteredProducts);


// 4.Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity.Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

// Solution 4:

type ProductTuple = [string, number, number];
type ProductsArray = ProductTuple[];

function calculateTotalCost(products: ProductsArray): number {
    return products.reduce((total, [_, price, quantity]) => total + price * quantity, 0);
}

// Example usage
const products2: ProductsArray = [
    ["Product 1", 10, 2],
    ["Product 2", 20, 1],
    ["Product 3", 30, 3],
];

const totalCost = calculateTotalCost(products2);
console.log(totalCost);


// 5.Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array.How would you approach this problem and write code to solve it ?

// Solution 5:

function sumEvenNumbers(numbers: number[]): number {
    return numbers.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        } else {
            return sum;
        }
    }, 0);
}
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const sum = sumEvenNumbers(numbers);
console.log(sum);

// 6.Create an interface called Person that includes properties for name(string), age(number), and email(string).Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

// Solution 6:

interface Person {
    name: string;
    age: number;
    email: string;
}

const people: Person[] = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 35, email: "charlie@example.com" }
];

function findPersonByEmail(people: Person[], email: string): Person | null {
    for (const person of people) {
        if (person.email === email) {
            return person;
        }
    }
    return null;
}
const email = "bob@example.com";
const person = findPersonByEmail(people, email);
if (person) {
    console.log(`Found person: ${person.name}, ${person.age}`);
} else {
    console.log(`No person found with email ${email}`);
}


// 7.Create a TypeScript program that declares an array of numbers.Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array.Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

// Solution 7:

function findMinMax(...numbers: number[]): [number, number] {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return [min, max];
}

const numbers5 = [4, 7, 2, 9, 1, 5];
const [min, max] = findMinMax(...numbers5);

console.log(`The minimum value is ${min}`);
console.log(`The maximum value is ${max}`);

// 8. Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter.If the boolean parameter is true, log the string parameter in uppercase.If the boolean parameter is false or not provided, log the string parameter in lowercase.



// Solution 8:

function logColor(color: "red" | "green" | "blue", uppercase?: boolean) {
    if (uppercase) {
        console.log(color.toUpperCase());
    } else {
        console.log(color.toLowerCase());
    }
}

logColor("red"); // logs "red"
logColor("green", true); // logs "GREEN"
logColor("blue", false); // logs "blue"
// comment added








