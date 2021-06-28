const App = () => {
    return (
        <div>
            <FirstComponent />
            <NameComponent name="Lawrence" />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));