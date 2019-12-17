console.log("Hey there!");
let visibility = false;

const viewDetail = () =>{
    visibility = !visibility;
    render();
};

const appRoot = document.getElementById('app');

const render = ()=> {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={viewDetail}>
            {visibility ? ' Hide Detail' : 'Show Detail'}
            </button>
            {visibility &&(
                <div>
                <p>Here is some detail you can see now!</p>
                </div>
            )}
            
        </div>
    )

   ReactDOM.render(template, appRoot);
};

render();