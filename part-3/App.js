const App = () => {
    return (
        <div>
            <Person name="Lawrence" age={18} hobbies={["Ukulele", "Oud", "Eggs4sides"]} />
            <Person name="Miguel" age={15} hobbies={["Video Games", "Reading", "Dogs"]}/>
            <Person name="DanimalsAnimals" age={14} hobbies={["Bicycle", "TV"]}/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"));