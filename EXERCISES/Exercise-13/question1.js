const helloReactNoJSX = React.createElement("h1", null, "Hello, React!");
const helloReactJSX = <h1>Hello, React!</h1>;
const message = "Hello, React!";
const displayMessage = <h1>{message}</h1>;

const fruits = ["Apple", "Banana", "Cherry"];
const fruitList = (
    <ul>
        {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
    </ul>
);

const styledMessage = <p style={{ color: "blue", fontSize: "20px" }}>This is a styled message.</p>;

function SumOfSquares() {
    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const sum = num1 ** 2 + num2 ** 2;

    return (
        <div>
            <input type="number" placeholder="Enter first number" onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" placeholder="Enter second number" onChange={(e) => setNum2(Number(e.target.value))} />
            <p>Sum of squares: {sum}</p>
        </div>
    );
}

const currentHour = new Date().getHours();
const greeting = <h2>{currentHour < 12 ? "Good Morning" : "Good Evening"}</h2>;

const currentDay = new Date().toLocaleDateString(undefined, { weekday: "long" });
const dayMessage = <p>Today is {currentDay}.</p>;

function PrimeChecker() {
    const [number, setNumber] = React.useState("");
    const [result, setResult] = React.useState("");

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function checkPrime() {
        setResult(isPrime(Number(number)) ? "is a prime number" : "is not a prime number");
    }

    return (
        <div>
            <input type="number" placeholder="Enter a number" onChange={(e) => setNumber(e.target.value)} />
            <button onClick={checkPrime}>Check Prime</button>
            <p>{number} {result}</p>
        </div>
    );
}

function TemperatureConverter() {
    const [temp, setTemp] = React.useState("");

    function convertToFahrenheit() {
        alert(`${temp}°C is ${(temp * 9/5 + 32).toFixed(2)}°F`);
    }

    function convertToCelsius() {
        alert(`${temp}°F is ${((temp - 32) * 5/9).toFixed(2)}°C`);
    }

    return (
        <div>
            <input type="number" placeholder="Enter temperature" onChange={(e) => setTemp(e.target.value)} />
            <button onClick={convertToFahrenheit}>Convert to °F</button>
            <button onClick={convertToCelsius}>Convert to °C</button>
        </div>
    );
}

function StringReverser() {
    const [inputString, setInputString] = React.useState("");
    const [reversed, setReversed] = React.useState("");
    const [isPalindrome, setIsPalindrome] = React.useState(false);

    function handleReverse() {
        const rev = inputString.split("").reverse().join("");
        setReversed(rev);
        setIsPalindrome(inputString === rev);
    }

    return (
        <div>
            <input type="text" placeholder="Enter a string" onChange={(e) => setInputString(e.target.value)} />
            <button onClick={handleReverse}>Reverse String</button>
            <p>Reversed: {reversed}</p>
            <p>{isPalindrome ? "It is a palindrome" : "It is not a palindrome"}</p>
        </div>
    );
}

function RandomNumber() {
    function handleClick() {
        alert(`Random Number: ${Math.floor(Math.random() * 100) + 1}`);
    }
    return <button onClick={handleClick}>Generate Random Number</button>;
}

const currentYear = new Date().getFullYear();
const isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);
const leapYearMessage = <p>{currentYear} is {isLeapYear ? "a leap year" : "not a leap year"}.</p>;

function UserGreeting() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    
    return (
        <div>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
            <input type="text" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            <h1>Hello, {firstName} {lastName}!</h1>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("main_div")).render(
    <div>
        {helloReactNoJSX}
        {helloReactJSX}
        {displayMessage}
        {fruitList}
        {styledMessage}
        <SumOfSquares />
        {greeting}
        {dayMessage}
        <PrimeChecker />
        <TemperatureConverter />
        <StringReverser />
        <RandomNumber />
        {leapYearMessage}
        <UserGreeting/>
    </div>
);
