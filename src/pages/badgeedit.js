import React,{Component} from 'react';
import Badge from '../components/badge.js';
import BadgeForm from '../components/badgeform.js';
import BadgeLogo from '../components/badgelogo.js';
import '../styles/badge.css';
import api from '../api.js';
import PageLoading from '../components/pageloading';

class BadgeEdit extends Component {
    state={
        loading:false,
        error: null,       
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle:'',
        twitter:'',
        avatarUrl: ''
    }}; //Inicializamos el un nuevo state

    componentDidMount(){
      this.fetchData()
    }

    fetchData = async e=>{
      this.setState({loading:true, error:null}) 
      try {
        const data =  await api.badges.read(this.props.match.params.badgeId)
        this.setState({loading: false, form: data})
        }
      catch (error){
        this.setState({error: error})
      }
    }
    handleChange=e=>{

        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,

            }
        })
    }
  
    handleSubmit=async e=>{
        e.preventDefault();
        this.setState({
            loading: true,
            error: null
        })
        try {
            await api.badges.update(this.props.match.params.badgeId ,this.state.form);
            this.setState({loading: false})
            this.props.history.push("/badges")
        }
        catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }
     }
    
    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        return(
    <main>
       <BadgeLogo name="" />
        <section className="container">
            <div className="row">
                <div className="col-6">
                    <Badge 
                        firstName={this.state.form.firstName || "Name"}
                        lastName={this.state.form.lastName || "Lastname"}
                        jobTitle={this.state.form.jobTitle || "Job title"}
                        twitter={this.state.form.twitter || "twitter"}
                        email={this.state.form.email || "emailUser"}
                        // avatarUrl={this.state.form.avatarUrl || "avatarURL"}  //We setup the ID but we aren't sending it
                        
                    />
                </div>
                <div className="col-6">
                <h1>New Edit</h1>
                    <BadgeForm 
                        formValues={this.state.form}
                        onChange= {this.handleChange} 
                        onSubmit= {this.handleSubmit} 
                        error={this.state.error}
                    />
                </div>
            </div>
        </section>
        {/* <LifeCycle/> */}
    </main>
            
        )

    }
}


export default BadgeEdit