import React, { PureComponent, Fragment } from 'react';

import CommentArea from 'containers/CommentAreaContainer';
import CommentForm from 'containers/CommentFormContainer';
import generalStore from 'stores/generalStore';
import { fetchReqGen } from 'actions/generalActions';

export default class StartDialogContainer extends PureComponent {
   constructor(props) {
        super(props);
        this.state = {
            comments: [],
            id: '',
        }
    } 

    // componentDidMount() {
    //     console.log(this.props)
    //     const { match } = this.props;
    //     this.getApi(match.params.id);        
    // } 

    componentDidUpdate(prevProps) {
        generalStore.removeListener('fetchGen', this.stateUpdater);
        const {
          match: {
            params: { id }
          }
        } = this.props;
        const prevId = prevProps.match.params.id;
        if (prevId !== id) {
            this.getApi(id)
        }
      }

      getApi = (id) => {
        const url = `posts/${id}/comments`
        fetchReqGen({url});
        generalStore.on('fetchGen', this.stateUpdater);
        // fetch(`http://localhost:3001/posts/${id}/comments`)
        // .then(response => response.json())
        // .then(json => 
        //     this.setState(
        //     { 
        //         comments: json,
        //         id,
        //     })
        // )   
    }
    stateUpdater = (data) => {
        const {
            match: {
              params: { id }
            }
          } = this.props;
        console.log(data)
        this.setState({
            comments: data,
                id,
        })
    }

    render() {   
        const { comments, id } = this.state;    
        return ( 
            <Fragment>
                {/* <CommentArea comments={comments} />   */}
                <CommentArea />
                {/* <CommentForm id={id} onGetApi={this.getApi} />   */}
                <CommentForm />
            </Fragment>    
        );
    }
}

