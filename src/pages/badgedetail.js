import React,{Component} from 'react';
import BadgeLogo from '../components/badgelogo'
import PageLoading from '../components/pageloading'
import PageError from '../components/pageerror.js'
import api from '../api.js';
import Badge from '../components/badge.js';
import {Link} from 'react-router-dom';

class BadgeDetail extends Component {
    state={
        loading:false,
        error: null,       
        data: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle:'',
            twitter:''
        }
    };

    componentDidMount(){
        this.fetchData()

    }
    fetchData = async ()=>{
        this.setState({loading: true, error:null})
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading: false, data: data})
        }catch(error){
            this.setState({loading: false, error:error })
        }

    }
    render(){
        if(this.state.loading){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error} />
        }
        return(
        <>
            <BadgeLogo 
            data={`${this.state.data.firstName} ${this.state.data.lastName}`}
            />
            <div className="container">
                <div className="container-fluid">
                    <div className="row">
                        <Badge 
                            firstName={this.state.data.firstName}
                            lastName={this.state.data.lastName}
                            email={this.state.data.email}
                            jobTitle={this.state.data.jobTitle}
                            twitter={this.state.data.twitter}
                            />
                             <div className="col">
                                <h2 className="text-left ml-4">Actions</h2>
                                <div className="d-flex flex-column ml-4">
                                    <div>

                                          <Link className="btn btn-primary mb-4" to={`/badges/${this.state.data.id}/edit`}>Edit</Link>
                                    </div>
                                    <div>
                                         <button className="btn btn-danger">Delete</button>
                                     </div>
                                 </div>
                            </div>
                     </div>
                </div>

                   
                    </div>
        </>
        
        )
    }
}


export default BadgeDetail;