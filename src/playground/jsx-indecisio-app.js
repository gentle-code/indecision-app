console.log("App.js is up and running!");

// JSX Javascript XML
const app = {
    title: 'Indecision App',
    subtitle:'Put your life in hands of computer!',
    options:[]
};

const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value=''; 
        renderFormSub();
    }
    
};
const removeAll = () =>{
    app.options=[];
    renderFormSub();
    };
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);
};
   
const appRoot = document.getElementById('app');

const renderFormSub= () =>{
    const template =(
        <div> 
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here is your options' : 'No Option'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>

            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
              }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderFormSub();
