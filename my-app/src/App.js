import React from 'react';

function SumOfSquares() { /* your code */ }
function PrimeChecker() { /* your code */ }
function TemperatureConverter() { /* your code */ }
function StringReverser() { /* your code */ }
function RandomNumber() { /* your code */ }
function UserGreeting() { /* your code */ }

function App() {
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

    const currentHour = new Date().getHours();
    const greeting = <h2>{currentHour < 12 ? "Good Morning" : "Good Evening"}</h2>;

    const currentDay = new Date().toLocaleDateString(undefined, { weekday: "long" });
    const dayMessage = <p>Today is {currentDay}.</p>;

    const currentYear = new Date().getFullYear();
    const isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);
    const leapYearMessage = <p>{currentYear} is {isLeapYear ? "a leap year" : "not a leap year"}.</p>;

    return (
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
            <UserGreeting />
        </div>
    );
}

export default App;
