import React, { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <div>
                <button type = {this.props.type}>
                    {this.props.text}
                </button>
            </div>
        )
    }

}

export default Button;