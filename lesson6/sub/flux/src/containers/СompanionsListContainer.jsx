import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import СompanionsList from 'components/СompanionsList';
import CompanionItem from 'components/CompanionItem';

import generalStore from 'stores/generalStore';
import { fetchReqGen } from 'actions/generalActions';


class СompanionsListContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true, 
        }
    }  

    stateUpdater = (data) => {
        console.log(data)
        this.setState({
            posts: data,
            loading: false,
        })
    }

    componentDidMount() {
        let url = 'posts';
        let event = 'getCompanions';
        fetchReqGen({url, event});
        generalStore.once(event, this.stateUpdater);     
      
    }
        // fetch('http://localhost:3001/posts')
        // .then(response => response.json())
        // .then(json => this.setState(
        //     { 
        //         posts: json,
        //     })
        // );      
        // componentWillUnmount() {   
        //     // removeListener('fetchGen', this.stateUpdater);          
        // }

    render() {     
        const { posts, loading } = this.state; 
        const { location } = this.props;
        let companionsRend;
        // loading && !posts.length ? 'loading ...' : 
        console.log(generalStore)

        if(posts.length && !loading)
        {
            companionsRend = posts.map((companion, idx) => {
                return (<CompanionItem key={idx} text={companion.name} id={companion.id} location={location.pathname} />)         
            });  
        }  

        return (  
            <СompanionsList companionsRend={companionsRend} /> 
            // loading && !posts.length ? 'loading ...' : <СompanionsList companionsRend={companionsRend} />  
        );
    }
}

export default withRouter(СompanionsListContainer);