// ----------------------
// >> TYPE ANNONTATION (Explicitly defining the type of variable) (It is done by using colon after variable name and then type)
// ----------------------


// ----------------------------------------------------------------------------------------
// >>>>> #5: Typescript Boolean and Bigint Types with Practical Examples🔥Typescript Tutorial in Hindi
// ----------------------------------------------------------------------------------------

// ----------------------
// >> Boolean 
// ----------------------
// let isDone: boolean = false;
// let hasStarted: boolean = true;
// console.log(isDone);
// console.log(hasStarted);

// ----------------------
// >> Boolean Homework
// ----------------------
// function isDivisibleBy4and8(num:number):boolean{
//     return num%4 == 0 && num%8 == 0 ? true : false;
// }

// console.log(isDivisibleBy4and8(16));
// console.log(isDivisibleBy4and8(32));
// console.log(isDivisibleBy4and8(62));

// ----------------------
// >> Bigint (To handle number bigger than 2^53-1)
// ----------------------
// let maxNumberDefault: number = (Number as any).MAX_SAFE_INTEGER;
// let maxNumber: number = 9007199254740991;
// let maxNumberBI: bigint = 9007199254740932894791n; // n is used to define bigint
// let anotherBigNumber: bigint = BigInt(9007199254740932894791); // Another way to define bigint

// console.log(maxNumberDefault)
// console.log(maxNumber);
// console.log(maxNumberBI);
// console.log(anotherBigNumber)

// ----------------------------------------------------------------------------------------
// >>>>> Typescript Tutorial #6: Differences ANY vs UNKOWN Types with Practical Examples🔥
// ----------------------------------------------------------------------------------------

// ----------------------
// >> Anytype (To disable type checking like in js) (Its usecase can be dynamic fill in form data, api data, newtork responses and deserialized JSON objects)
// ----------------------


// ----------------------
// >> Unknow (Safer than any, as it forces type checking and type safety) (Its usecase is that variables of type unknown can hold values of any type, but you need to do some type checking before performing operations on those variables)
// ----------------------

// let myFavNum1 = 10;
// myFavNum1 = "asad"; // Type Checking for value assigned to variable
// console.log(myFavNum1.map((num)=>{console.log(num)})); // Safety checking for method call

// let myFavNum2: unknown = 10;
// myFavNum2 = "asad"; 
// myFavNum2 = true

// if(typeof myFavNum2 === "number"){
//     console.log((myFavNum2 as number).toFixed(2));
// }
// else if (typeof myFavNum2 === "string"){
//     console.log((myFavNum2 as string).toUpperCase());
// }
// else if (typeof myFavNum2 === "boolean"){
//     console.log((myFavNum2 as boolean).valueOf());
// }

// ----------------------------------------------------------------------------------------
// >>>>> #7: TypeScript Type Inference: Ask in Interview Question with Best Practices | Typescript Tutorial
// ----------------------------------------------------------------------------------------


// ----------------------
// >> Type Inference (Infer means assume) (It means the ability of the TypeScript compiler to automatically predict the type of a variable based on the value assigned to it or the context in which it is used. Context can be for variables, expressions, function return types, etc.)
// ----------------------

// let myFavNum2: number = 10; // Type Annotation   
// let myFavNum = 10; // Type Inference
// myFavNum = "20"; // Type Inference will not work here as it is already assigned a number value



// ----------------------------------------------------------------------------------------
// >>>>> #8: TypeScript Function Mastery: Understanding Invocation, Declaration, and Return Types in Hindi
// ----------------------------------------------------------------------------------------
// ----------------------
// >> Function Declaration (It is a way to define a function in typescript)
// ----------------------

// const isPalindrome = (palin:string):boolean =>{
//     const mypalin = palin.split("").reverse().join("");   
//     return mypalin === palin;
// }

// ----------------------
// >> Function Invocation (Calling a function)
// ----------------------

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("12321"));
// console.log(isPalindrome("awake"));

// ----------------------------------------------------------------------------------------
// >>>>> #9 : Understanding Optional and Default Parameters in TypeScript Functions in Hindi
// ---------------------------------------------------------------------------------------

// ----------------------
// >> Optional Parameters (It is a way to define a parameter which is not mandatory to pass)(Used by a ? after parameter name)
// >> Default Parameters (It is a way to define a parameter with a default value) 
// ----------------------

// const greet = (name:string, msg:string = "Good Morning", id?:number):string =>{
//     if(id){
//         return `Hello ${name}, ${msg}! Your ID is ${id}`;
//     }
//     return `Hello ${name}, ${msg}!`;
// }

// console.log(greet("Asad"));
// console.log(greet("Asad", "Good Evening"));
// console.log(greet("Asad", "Good Evening", 123));


// ----------------------------------------------------------------------------------------
// >>>>> TypeScript Array Tutorial #10: Initializing, Accessing, and Checking Length of an Array in Hindi
// ---------------------------------------------------------------------------------------

// ----------------------
// >> Array (It is a way to store multiple values in a single variable) (It is a collection of similar data types) (Can be defined by 3 ways: 1) Using square brackets 2) Using Array constructor 3) Using Array.of method)
// ----------------------

// const myArray1: number[] = [1, 2, 3, 4, 5]
// const myArray2: string[] = new Array("Asad", "Ali", "Ahmed")
// // const myArray3: boolean[] = Array.of(true, false, true, false) // Not working at this time

// console.log(myArray1);
// console.log(myArray2);

// ----------------------------------------------------------------------------------------
// >>>>> #11: TypeScript Arrays👉Methods and Iterations Explained with Practical Examples (for, foreach, forof loop) (for....in gives index and for....of gives value)
// ---------------------------------------------------------------------------------------

// const myArray1: number[] = [1, 2, 3, 4, 5]

// ----------------------
// >> Array Methods (It is a way to manipulate array data) (push, pop, shift, unshift)
// ----------------------
// myArray1.push(6)
// console.log(myArray1);
// myArray1.pop();
// console.log(myArray1);
// myArray1.shift();
// console.log(myArray1);
// myArray1.unshift(0);
// console.log(myArray1);

// ----------------------
// >> Loops (It is a way to iterate over an array)
// ----------------------

// for(let i = 0; i < myArray1.length; i++){
//     console.log(myArray1[i]);
// }

// myArray1.forEach((num:number)=>{
//     console.log(num);
// })

// for(const index in myArray1){
//     console.log(myArray1[index]);
// }

// for(const num of myArray1){
//     console.log(num);
// }

// ----------------------------------------------------------------------------------------
// >>>>> #12: TypeScript Array Map and Filter Methods Explained with Examples
// ---------------------------------------------------------------------------------------

// const myArray1: number[] = [1, 2, 3, 4, 5]

// ----------------------
// >> Map (It is a way to transform array data) (It returns a new array with the same length as the original array)
// ----------------------

// const myArray2 = myArray1.map((num:number)=>{
//     return num*2;
// })
// console.log(myArray2);

// const myArray3 = myArray1.map((num:number)=>{
//     return num > 2;
// })
// console.log(myArray3); // Limitation of map method

// ----------------------
// >> Filter (It is a way to filter array data) (On a condition like we use in filter, map method will return boolean value for the condition instead of values) (It returns a new array with the filtered data)
// ----------------------

// const myArray4:number[] = myArray1.filter((num:number)=>{
//     return num > 2;
// })
// console.log(myArray4);


// ----------------------------------------------------------------------------------------
// >>>>> #13: TypeScript Objects Explained: Everything You Need to Know with Real Life Example (Object is a collection of key value pairs) (Here problem is to define the type of object everytime we define an object)
// ---------------------------------------------------------------------------------------

// const person:{
//     name: string,
//     age: number,
//     isStudent: boolean,
//     hobbies: string[],
//     address: {
//         city: string,
//         country: string
//     }
// } = {
//     name: "Asad",
//     age: 23,
//     isStudent: true,
//     hobbies: ["Cricket", "Football", "Coding"],
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// }

// // person.address.city = 1234 // Type 'number' is not assignable to type 'string'.
// console.log(person.address.city);


// const person1:{
//     name: string,
//     age: number,
//     isStudent: boolean,
//     hobbies: string[],
//     address: {
//         city: string,
//         country: string
//     }
// } = {
//     name: "Ali",
//     age: 22,
//     isStudent: true,
//     hobbies: ["Cricket", "Football", "Coding"],
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// }
// console.log(person1.name);

// ----------------------------------------------------------------------------------------
// >>>>> #14: TypeScript Type Aliases: Making Your Code Easier to Read & Maintain (Type Aliases are a way to define a type and use it multiple times) (It provides benefits like code readability, maintainability, and reusability) (Syntax: type aliasName = typeDefinition) (Alias name should be in PascalCase)
// ---------------------------------------------------------------------------------------

// type Person = {
//     name: string,
//     age: number,
//     isStudent: boolean,
//     hobbies: string[],
//     address: {
//         city: string,
//         country: string
// }  
// }

// const person:Person = {
//     name: "Asad",
//     age: 23,
//     isStudent: true,
//     hobbies: ["Cricket", "Football", "Coding"],
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// }

// console.log(person.address.city);


// const person1:Person = {
//     name: "Ali",
//     age: 22,
//     isStudent: true,
//     hobbies: ["Cricket", "Football", "Coding"],
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// }
// console.log(person1.name);


// ----------------------------------------------------------------------------------------
// >>>>> #15: Call Signatures in TypeScript with Real-life Examples & Best Practices (Call Signature is a way to define a declaration of defination of a function which includes function's name, parameter type, return type) (Syntax: (parameter: type) => returnType) (Mostly used inside the objects to define the type of function)
// ---------------------------------------------------------------------------------------

// type Student = {
//     name: string,
//     age: number,
//     gender: string,
//     introduce: (msg: string) => void // Call Signature
//     // (msg: string): void         // Pure Call Signature ==> It will be called as: student1("Hi");
// }

// const student1: Student = {
//     name: "Asad",
//     age: 23,
//     gender: "Male",
//     introduce: (msg: string) => {
//         return `Hello, I am ${student.name}. ${msg}!`;
//     }
// }

// console.log(student1.introduce("I am a student of Computer Science"));


// ----------------------------------------------------------------------------------------
// >>>>> #16: Enums in Typescript Explained with Real-life Examples 👉 Used in Thapa Technical Website ( Enums are a way to define a set of named constants) (Enums are a way to define a collection of related values) (Its real life examples is that used in Mongodb Schema : email: ["valid", "invalid"]) (Enums automatically assigns numeric values to enum values in increasing manner)
// ---------------------------------------------------------------------------------------

// enum Role {
//     admin = "ADMIN",
//     user = "USER",
// }

// type LoginDetails = {
//     name: string,
//     email: string,
//     role: Role
// }

// const user1: LoginDetails = {
//     name: "Asad",
//     email: "asad@gmail.com",
//     role: Role.admin
// }

// const user2: LoginDetails = {
//     name: "Zaid",
//     email: "zaid@gmail.com",
//     role: Role.user
// }

// const roleChecking = (user: LoginDetails) => {
//     const {name, role} = user;
//     if(role === Role.admin){
//         console.log(`${name} is an admin`);
//     }
//     else{
//         console.log(`${name} is a user`);
//     }
// }

// roleChecking(user1);
// roleChecking(user2);



// ----------------------------------------------------------------------------------------
// >>>>> #17: TypeScript Tuples 🔥 Mastering Data Structures| Best Practices & Examples (Its usecase is that when there is point that fixed number of elements will be.) (Tuples are data structure that allows to store fixed-size collection of elements of different types) (They are similar to arrays but key difference is: the types of elements in a tuple are fixed and declared at the time of creation whereas arrays can hold elements of the same type and their sizes can vary) (Example: Let's we want to display person's basic information like name, age, has license or not ==> Here ORDER also matters)

// Tuples best practice: Make it read-only, otherwise it can be mutated and can be changed so it will not be a tuple anymore
// ---------------------------------------------------------------------------------------

// type PersonInfo = readonly [string, number, boolean];

// const person1: PersonInfo = ["Asad", 23, true];
// const person2: PersonInfo = ["Ali", 22, false];


// const displayPerson = (person: PersonInfo) => {
//     const [name, age, hasLicense] = person;
//     console.log(`Name: ${name}, Age: ${age}, Has License: ${hasLicense}`);
// }
// // person1.push("Karachi"); // It will give error as it is read-only
// displayPerson(person1);
// displayPerson(person2);
// console.log(person1);


// ----------------------------------------------------------------------------------------
// >>>>> #18: Master TypeScript Unions and Intersections - Real-Life Examples & Practical Tips 🚀
// ---------------------------------------------------------------------------------------


// ----------------------
// >> Unions (It is a way to define a variable with multiple types) (It is a way to combine multiple types into one type) (It is used when we want to accept multiple types for a variable) (Symbols is pipe |)

// In union, either use one signle alias as a complete type or all the alias types or one as a complete type and other as partial properties
// ----------------------

// const inputValue = (input: string | number | boolean) => {
//     if(typeof input === "string"){
//         console.log(`You entered a string: ${input}`);
//     }
//     else if(typeof input === "number"){
//         console.log(`You entered a number: ${input}`);
//     }
//     else if(typeof input === "boolean"){
//         console.log(`You entered a boolean: ${input}`);
//     }
// }

// inputValue("Asad");
// inputValue(23);
// inputValue(true);

// type Person = {
//     name: string,
//     age: number
// }

// type Employee = {
//     empId: number,
//     department: string
// }

// type UserProfile = Person | Employee;

// const user1: UserProfile = {
//     name: "Asad",
//     age: 23,
//     empId: 123,
//     department: "IT"
// }

// console.log(user1);


// ----------------------
// >> Intersections (It is a way to combine multiple types into one type) (It is used when we want to combine multiple types into one type) (Symbols is ampersand &) (Example: A user profile in a company can have properties of a person and a employee)

// In intersection, we have to use all the alias types as a complete type when creating an object.
// ----------------------

// type Person = {
//     name: string,
//     age: number
// }

// type Employee = {
//     empId: number,
//     department: string
// }

// type UserProfile = Person & Employee;

// const user1: UserProfile = {
//     name: "Asad",
//     age: 23,
//     empId: 123,
//     department: "IT"
// }

// console.log(user1);


// const myPersonalInfo : Person = {
//     name: "Asad",
//     age: 23
// }

// console.log(myPersonalInfo);


// ----------------------------------------------------------------------------------------
// >>>>> #19: Generics in Typescript 🚀 Make everything Reusable like JAVA & C# | Most Important Topic in TS (Generics in TypeScript allows to create resuable components or functions that can work with multiple data types.) (Syntax: <T> where T is just a name and can be anything)
// ---------------------------------------------------------------------------------------

// ----------------------
// >> Problem
// ----------------------

// const logAndReturn = (value: string | number): string | number => {
//     console.log(value);
//     return value;
// }

// const numberResult = logAndReturn(10);
// const stringResult = logAndReturn("Asad");
// const booleanResult = logAndReturn(true); // It will not work as it is not defined in function


// ----------------------
// >> Solution
// ----------------------

// const logAndReturn = <T> (value: T): T => {
//     console.log(value);
//     return value;
// }

// const numberResult = logAndReturn<number>(10); // It work. Better way to call function. It also work without <> it will automatically infer the type
// const stringResult = logAndReturn<string>("Asad"); 
// const booleanResult = logAndReturn<boolean>(true); 


// ----------------------------------------------------------------------------------------
// >>>>> VS Code Best Hidden Feature You Don't know Exists 🚀To Boost Your Coding Skills - Inlay Hints 🔥
// ---------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------
// >>>>> #20: Solving Function Overloading with TS Generics: Mastering Multiple Type Variables like a Pro 🚀 (Multiple type variables meaning now making more than one parameter generic.) (Function overloading means that function will call depending on the number and type of arguments.)
// ---------------------------------------------------------------------------------------

// ----------------------
// >> Problem : (Function Overloading Logic ==> See the image in the folder) 
// ----------------------

// ==> (Without overloads, if you only have a: any, b: any, the inferred return type would be any, which means you lose the benefits of strong typing.)
// ==> Benefits of Overloading:
// > (The primary purpose of the overload signatures is to provide type safety and type inference during development.)
// > (Overload signatures allow TypeScript to catch errors at compile-time. For example, if you accidentally try to add a number and a string, TypeScript will raise an error because there's no overload that supports this combination.)

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//     return a + b;
// }

// console.log(add(10, 20));
// console.log(add("Asad", " Ali"));
// // console.log(add("Asad",20)); // It will not work as it is not defined in function
// // console.log(add(20, "Asad")); // It will not work as it is not defined in function


// ----------------------
// >> Solution : (Here is use of Multiple Type Variable) *** (We can use non-generic/normal type like number, string etc with generic type like <T> ***
// ----------------------


// // function add<T>(a: T, b: T): void {
// function add<T, U>(a: T, b: U, c: boolean): void {
//     // console.log(typeof a, typeof b);
//     console.log(typeof a, typeof b, typeof c);
    
// }

// // add<number>(10, 20);
// // add<string>("Asad", " Ali");
// // add<string>("Asad", 10); // It will not work as above, as it is not defined in function

// // ==> (Now for above either provide both types or none, otherwise it will give error)
// add(10, 20);
// add<string, string>("Asad", " Ali", true);
// add<string, number>("Asad", 10, true); // It will as it is defined in function


// ----------------------------------------------------------------------------------------
// >>>>> #21: TypeScript Interface - Defining Contracts for Objects & Classes 📝 
// (Object in typescript can be represent using three ways: 1)Normally Defining the type of object elements 2) Interfaces 3) Type Alias ) 
// (Interfaces and objects are both same thing but difference is that objects mostly used in functional programming and interface in object-oriented programming ) 
// (Interface has not = symbol in syntax while object has.)
// (Interface is a contract for objects that defines the properties and methods that an object must have and their types)
// ---------------------------------------------------------------------------------------

// interface Greet {
//     name: string,
//     age: number,
// }

// const greetPerson = (person: Greet) => {
//     console.log(`Hi ${person.name}, You are ${person.age} years old`);
// };

// const person1: Greet = {
//     name: "Asad",
//     age: 23
// }

// greetPerson(person1);



// ----------------------------------------------------------------------------------------
// >>>>> #22: TypeScript Compiler & Project Configuration Explained 🚀 Watch Mode, rootDir, Lib, and More!
// ---------------------------------------------------------------------------------------


// ----------------------
// >> Watch Mode
// ---------------------- 

// console.log("Hello World");
// console.log("Hello World");

// ----------------------
// >> Root Directory & Out Directory (Where to find the files and where to put the compiled files)
// ---------------------- 

// ----------------------
// >> Lib (Add the libraries which you want to use in your project or which are default) (Remember it uses them by default if not written in config file.)
// "lib": ['ES2022', 'DOM'] etc
// ---------------------- 

// ----------------------
// >> Exclude and Include (Exclude is used to exclude the files from compilation and Include is used to include the files in compilation) (Like node_modules, dist, build etc) (Exlude and Include can be added in the config file if not added by default)
// ---------------------- 


// ----------------------------------------------------------------------------------------
// >>>>> #23: TypeScript Object-Oriented Programming Tutorial👉 Understanding Classes and Constructors in Hindi
// ---------------------------------------------------------------------------------------

// class Person {
//     name: string;
//     age: number;
//     hobbbies: string[];
//     constructor(name: string, age: number, hobbbies: string[]){
//         this.name = name;
//         this.age = age;
//         this.hobbbies = hobbbies;
//     }

    // displayPerson(){
    //     console.log(`Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbbies}`);
    // }
// }

// const person1 = new Person("Asad", 23, ["Cricket", "Football", "Coding"]);
// const person2 = new Person("Ali", 22, ["Cricket", "Football", "Coding"]);
// const person3 = new Person("Ahmed", 21, ["Cricket", "Football", "Coding"]);

// console.log(person2)


// ----------------------------------------------------------------------------------------
// >>>>> #24: Inheritance in TypeScript in Hindi | Extends & Super Keyword with Real Life Example
// ---------------------------------------------------------------------------------------

// class Person {
//     name: string;
//     age: number;
//     hobbies: string[];
//     constructor(name: string, age: number, hobbies: string[]){
//         this.name = name;
//         this.age = age;
//         this.hobbies = hobbies;
//     }

//     displayPerson(){
//         return(`I am ${this.name}, of ${this.age} years old. My hobbies are ${this.hobbies}.`);
//     }
// }

// class Student extends Person {
//     grade: number;

//     constructor(name: string, age: number, hobbies: string[], grade:number){
//         super(name, age, hobbies);
//         this.grade = grade;
//     }

    // displayPerson(){
    //     return(`${super.displayPerson()} I am in grade ${this.grade}`);
    // }
// }

// const person1 = new Person("Asad", 23, ["Cricket", "Football", "Coding"]);
// const person2 = new Person("Ali", 22, ["Cricket", "Football", "Coding"]);
// const person3 = new Person("Ahmed", 21, ["Cricket", "Football", "Coding"]);
// const student1 = new Student("Ahmed", 21, ["Cricket", "Football", "Coding"], 10)

// console.log(person2.displayPerson())
// console.log(student1.displayPerson();)

// ----------------------------------------------------------------------------------------
// >>>>> #25: Access Modifiers in OOP | Public, Protected and Private 
// Public    :  Accessible in Parent, Child and Outside the class
// Protected :  Accessible in Parent and Child 
// Private  :   Accessible in only Parent
// ===> Outside class means in main function or outside any class
// ---------------------------------------------------------------------------------------

// class Person {
//     public name: string;
//     protected age: number;
//     private hobbies: string[];
//     constructor(name: string, age: number, hobbies: string[]){
//         this.name = name;
//         this.age = age;
//         this.hobbies = hobbies;
//     }

//     displayHobbies(){
//         console.log(`My hobbies are ${this.hobbies}.`)
//     }

// }

// class Student extends Person {
//     grade: number;

//     constructor(name: string, age: number, hobbies: string[], grade:number){
//         super(name, age, hobbies);
//         this.grade = grade;
//     }

// }

// const person1 = new Person("Asad", 23, ["Cricket", "Football", "Coding"]);
// const student1 = new Student("Ahmed", 21, ["Cricket", "Football", "Coding"], 10)

// console.log(person1.name)
// // console.log(person1.age) // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
// // console.log(person1.hobbbies) // Property 'hobbbies' does not exist on type 'Person'.
// person1.displayHobbies()
// console.log(student1.age) // Sub Class using Protected Variable


// ----------------------------------------------------------------------------------------
// >>>>> #26: Shorthand Properties in Classes | OOPS
// ==> To avoid from passing parent class constructor arguments in Child class constructor like above :: constructor(name: string, age: number, hobbies: string[], grade:number) in class Student
// Above thing done using Access Modifier and TypeScript Infere Feature
// By default variable type is PUBLIC
// IF YOU ARE USING ACCESS MODIFIER, THEN THERE IS NO NEED TO DEFINE THE VARIABLES AND USING THIS.VARIABLENAME LIKE THINGS
// ---------------------------------------------------------------------------------------

// class Person {
//     constructor(public name: string, public age: number, protected hobbies: string[])
//     {   }

//     displayPerson(){
//         console.log(`Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies}`);
//     }

// }

// class Student extends Person {
//     constructor(name: string, age: number, hobbies: string[], public grade:number){
//         super(name, age, hobbies);
//         this.grade = grade;
//     }

// }
// const person1 = new Person("Asad", 23, ["Cricket", "Football", "Coding"]);
// person1.displayPerson()


// ----------------------------------------------------------------------------------------
// >>>>> #27: Getter & Setter in OOP :: 
// (Getters and Setters are used to control the access and modifications of class properties) 
// (*** Getter and setter are properties not methods ***)         
// (*** Getter take no parameter while setter take one parameter ***)
// Setters method allow to set the value of variable with additional logic or validation
// ***** To check why we need setter and getter see the video *****
// ---------------------------------------------------------------------------------------

// class Person {
//     private _age: number | undefined 
//     constructor(public name: string, protected hobbies: string[])
//     {   }

//     // Setter Property
//     public set age(age: number){
//         if(age > 150 || age < 0){
//             throw new Error("Age is not Valid!");
            
//         }
//         this._age = age
//     }

//     // Getter Property (Name cab be anything like age, agee or agee or givemeage etc)
//     public get age(){
//         if(this._age === undefined ){
//             throw new Error("Age is not Defined!");
            
//         }
//         return this._age
//     }

//     displayPerson(){
//         console.log(`Name: ${this.name}, Age: ${this._age}, Hobbies: ${this.hobbies}`);
//     }

// }

// const person1 = new Person("Asad", ["Cricket", "Football", "Coding"]);
// person1.age = 122 // This is setter use as property not method
// person1.displayPerson()
// console.log(person1.age)


// ----------------------------------------------------------------------------------------
// >>>>> #28: Paractise Question :: Bank Account and Temperature Converter
// ---------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------
// >>>>> #29: Static Properties and Methods in OOP :: 
// ==> Static properties and method are made to make them accessible directly without creating an instance of the class.
// ---------------------------------------------------------------------------------------

// class MathOperations {
//     public static pi: number = Math.pi;

//     public static addNumber(num1: number, num2: number){
//         return num1 + num2
//     }

//     public static subtNumber(num1: number, num2: number){
//         return num1 - num2
//     }

//     public static mulNumber(num1: number, num2: number){
//         return num1 * num2
//     }
// }

// console.log(MathOperations.pi)
// console.log(MathOperations.addNumber(4, 5)) 
// console.log(MathOperations.subtNumber(14, 3))
// console.log(MathOperations.mulNumber(4, 5)) 


// ----------------------------------------------------------------------------------------
// >>>>> #30: Abstract Classes :: 
// ==> Abstract Classes provide a way to define common properties and methods that derives classes can share | This promotes code reuse and helps establish a common interface between related classes
// ---------------------------------------------------------------------------------------

// abstract class Shape{
//     constructor(protected color: string){}

//     abstract calcArea():number // This and below notation are same
//     abstract displayArea() => void 
// }

// class Circle extends Shape {
//     constructor(protected color: string, protected radius:number){
//         super(color)
//     }

//     public calcArea(): number {
//         return Math.PI * this.radius * this.radius
//     }

//     public displayArea() {
//         console.log(`This is a circle of color ${this.color} with area ${Math.PI * this.radius * this.radius}`) 
//     }
// }

// const circle1 = new Circle("Red", 5)
// circle1.calcArea()
// circle1.displayArea()