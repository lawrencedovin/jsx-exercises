const Person = (({name, age, hobbies}) => {
    let message = age >= 18 ? "please go vote!" : "you must be 18.";
    let nameResult = name.length > 8 ? name.substring(0,6) : name;
    return (
        <div>
            <h1>{nameResult}</h1>
            <h3>Your age is {age}, {message}</h3>
            <ul>
                {hobbies.map((hobby) => <li>{hobby}</li>)}
            </ul>
        </div>
    );
})