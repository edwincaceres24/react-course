import React,{Component} from 'react';


class Timer extends Component {
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
        console.log(3,"Component has been un-mounted of DOM")
    }
    render(){
        return ( 
        <>
        <p>{this.props.date}</p>
        </>
        )
    }
}
class LiFeCycle extends Component {
    constructor(props){
        super(props)
        console.log(0, "Constructor method initialize the component but it doesn't render in DOM yet")
        this.state={
            date: new Date().toLocaleTimeString(),
            visibile: false
        }
        this.timer=null;
    }
    ticTacEvent=()=>{
        this.timer= setInterval(()=>{ //setInterval runs a code after an specific time-frame
            this.setState({
                date: new Date().toLocaleTimeString() //Add a new event
            })
        },1000)
    }
    start=()=>{
        this.ticTacEvent()
        this.setState({
            visible:true
        })
    }   //Initialize ticTac method. This will cause many re-renders
    stopTimer=()=>{
        clearInterval(this.timer)
        this.setState({
            visible:false 
        })
    } //Close the interval
    componentDidMount(){
        console.log(1,"Component is in DOM ")
        //Here you use asyncronys request
    }
    componentDidUpdate(prevProps,prevState){
        console.log(2,"Component state or props has changed")
        console.log(prevProps) //Currently won't print anything because there are any props
        console.log(prevState) //This will print the time with one second of delay
    }
   
    render() {
        console.log(4, "Component (re)render because there is a change in the DOM, state or props.")
        return(
    <>
    <hr />
        <section>
            <h2>Component Life Cycle</h2>
            <div className="container flex-column align-items-center">
                {this.state.visible && <Timer date={this.state.date} />}  {/*We assing "date" prop to Timer component */}
                <div className="flex-row justify-content-center">
                    <button onClick={this.start}>Start</button>
                    <button onClick={this.stopTimer}>Stop </button>
                </div>
            </div>
        </section>
    </>
            )
    }
}


export default LiFeCycle;