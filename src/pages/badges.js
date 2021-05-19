import React,{Component} from 'react';
import BadgesList from '../components/badgeslist.js';
import PageLoading from '../components/pageloading.js';
import PageError from '../components/pageerror.js';
import{Link} from 'react-router-dom';
import './styles/badges.css';
import '../styles/badgeslist.css';
import confLogo from '../images/badge-header.svg';
import api from '../api.js';



class Badges extends Component {
    constructor(props){
        super(props)
        console.log("1- Constructor")
        this.state = {
            data: undefined,
            error: null,
            loading: true
        }
    }
    // state = {
    //     data: undefined,
    //     error: null,
    //     loading: true
    // }
    componentDidMount(){
        console.log("3. Component Did Mount")
        this.fetchData()
    }
    
    fetchData = async ()=>{ //we define the function because we could use it many times
        this.setState({loading: true, error:null})  //We initialize original values in loading and error for each request
        try{
            const data = await api.badges.list(); //We intialize data value empty
            this.setState({loading: false, data: data}) //We add as prop of state.data and change loading to false
        }catch(error){ 
            this.setState({loading: false, error: error}) //We add change the loading property
    
        }
    }
    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()')
        console.log({
            prevProps: prevProps,
            prevState: prevState,		
        })
        console.log({
            props: this.props,
            state: this.state
        })
    }
    componentWillMount(){
        console.log('6. Component Will Mount')
    }
    render(){
        console.log("2. Render") 
        if(this.state.loading === true){ //We evaluate if loading is true
            return(<PageLoading/>)
        }
        if (this.state.error ){
            return (<PageError error={this.state.error}/>)
        }
        // if (this.state.data == ""){
        //     return (
        //         <>
        //         <h3>Suaveeee</h3>
        //         </>
        //         ) 
        //  }
        if(this.state.data.length > 0){
            return(
                <>
                    <main className="Badge">
                        <div className="Badges__hero">
                            <picture className="Badge__container">
                                <img className="Badges_conf_logo" src={confLogo} alt="Logo"/>
                            </picture>
                        </div>
                    <div className="Badge__container">
                        <div className="Badges__buttons">
                            <Link to="./badges/new" className="btn btn-primary">New Badge</Link>
    
                        </div>
                    </div>
                    <section className="BadgesList">
                            {console.log("You must see this",`${this.state.data.length}`)}
                            {this.state.data.map((badge)=><BadgesList badges={badge} key={badge.id}/>)}
                            {/*We print each card that is called from API */}
                    </section>
    
                    </main>
                </>
            )
        }
      
        

    }
}


export default Badges;