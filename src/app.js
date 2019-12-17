class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subTitle = 'Put your life in hands of computer'
        const options =['ThingOne', 'ThingTwo', 'ThingFour']
        return (
            <div>
            <Header title={title} subTitle={subTitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
            <button>What should I do?</button>
            </div>
        );
    }

}

class Options extends React.Component{
    render(){
        return (
            <div>
            {
               this.props.options.map((options)=> <Option  key={options} optionText={options}  />) 
                
            }
            <Option />
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
            <p>AddOption Component here</p>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
            {this.props.optionText}
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));