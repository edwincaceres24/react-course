import React,{Component} from 'react';
import md5 from 'md5';



class GravatarImage extends Component {

// email = props.email;

// constructor(props){
//     super(props)
//     this.state={
       
//             email: "edwin.caceressilva@gmail.com",
//             hash: md5(this.state.email),
//             testValue: "HelloWorld"
//             }

// };
// setHash = () =>{
    
// }
// myFn= ()=>{
    //     console.log("Mundo");
    //     };
    // componentDidUpdate(prevProps,prevState){
        //         console.log(2,"Component state or props has changed")
        //         console.log(`User's email is ${this.emailUser}`)
        //         console.log(`User's email is ${this.state.email}`)
        //         console.log(prevProps) 
        //         console.log(prevState) 
        //     }
        myFunction(e){
            console.log(`This should print ${e}`)
        }
        componentDidUpdate(prevProps,prevState){
            console.log(prevState)
            console.log(prevProps)
            console.log("Component changed")
        }
        render(){
            const email = this.props.email,
                userName= this.props.userName,
                hash= md5(email);
                console.log(email)
            this.myFunction(hash);
            return(
    <>
        <img src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt={`Photo of ${userName}`} className="Badge__avatar" loading="lazy" />
    </>
    )
}
}


export default GravatarImage;