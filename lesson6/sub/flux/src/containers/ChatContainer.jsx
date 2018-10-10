import React, { Component } from 'react';

import Chat from 'components/Chat';

import generalStore from 'stores/generalStore';
import { fetchReqGen } from 'actions/generalActions';

export default class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            res: [],
            loading: true, 
        };
      }

      stateUpdater = (data) => {

        // if(data.name)
        this.setState({
            res: data,
            loading: false,
        })
        // this.setState({
        //     name_reg: data.name_reg,
        //     isDisabled: data.isDisabled, 
        // })
    }

    // statusCheck( status ) {
    //     this.status = status;
    // }

    // componentDidUpdate() {
    //    this.go();
        
        
        
        
    // }
    
    // go() {
    //     let url = 'profile';
    //     fetchReqGen({url});
    //     generalStore.on('fetchGen', this.stateCorrector);
        
    // }

    // componentDidUpdate(generalStore.loading) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.userID !== prevProps.userID) {
    //       this.fetchData(this.props.userID);
    //     }
    //   }
    componentDidMount() {
        // this.setState({loading: true})
        console.log('mount')

        let url = 'profile';
            fetchReqGen({url});

            generalStore.once('fetchGen', this.stateUpdater);
        // generalStore.on('fetchGem', this.statusCheck)
        // const sst = generalStore.on('checkGen', this.stateCorrector)
        console.log(generalStore.loading)
        // console.log(sst.loading)

            

        
        

    

        
        // // let addData = json => this.setState(
        // //     { 
        // //         res: json,
        // //         loading: false,
        // //     });
        // let text = undefined;
        // let method = 'GET'

        // const BASE_URL = 'http://localhost:3001';
        //     fetch(`${BASE_URL}/${url}`, {
        //         method: method,
        //         body: JSON.stringify(text) || null,
        //         headers: {
        //             "Content-type": "application/json; charset=UTF-8"
        //         }
        //     })
        //     .then(response => response.json())
        //     .then(json => this.setState(
        //         { 
        //             res: json,
        //             loading: false,
        //         })
        //     )  
       
        // fetchReqGen({url});

        // fetch('http://localhost:3001/profile')
        // .then(response => response.json())
        // .then(json => this.setState(
        //     { 
        //         res: json,
        //         loading: false,
        //     })
        // )          
    } 
    componentWillUnmount() {
        generalStore.removeListener('changeGen', this.stateCorrector);
    }


    render() {  

        const { res, loading } = this.state;   
        return (  
            //  <Chat res={res.name} /> 
            loading && !res.length ? 'loading ...' : <Chat res={res.name} />                   
        );
    }
}
