let count = 0;
const minusOne= () =>{
count--;
renderCounterApp();
};

const reset= () =>{
    count = 0;
    renderCounterApp();
};



const renderCounterApp= () =>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={minusOne}> -1</button>
            <button onClick={reset}>Reset</button>
        
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();