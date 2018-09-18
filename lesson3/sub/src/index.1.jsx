import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        const myStyle = {
            color: this.props.color,            
        }
        console.log(this.props);
        return (
        <div>
            <h1 style={myStyle}>{this.props.text}</h1>
            {/* <Link 
                title={this.props.text + ' - ссылка'} 
                href="/index.html" 
            /> */}
            {/* исопользование children */}
            <Link href="/index.html" >
                ссылка с использоваием children
            </Link>
        </div>
        )
    }
};


//1 вариант со вставкой текста с помощью props
// class Link extends Component {
//     render() {
//         return  <a href={this.props.href}>{this.props.title}</a>
//     }
// }
//1 вариант со вставкой текста с помощью children
class Link extends Component {
    render() {
        return  <a href={this.props.href}>{this.props.children}</a>
    }
}
const app = document.getElementById('app');


ReactDOM.render(
   <div>
       <App color="red" text="My Code(text)"/>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quo!</p>
   </div>, app
)