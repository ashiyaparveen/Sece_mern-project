import React from "react";
class ReactLifecycleMethods extends React.Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    updateNum(){
        
    }
render(){
    return(<div>
        <h1>this is React LifeCycle Methid</h1>
        <h2> the state value is {this.state.number}</h2>
        <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
    </div>)
}

}
export default ReactLifecycleMethods;