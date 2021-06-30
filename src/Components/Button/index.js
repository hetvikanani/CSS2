import React, { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <div>
                <button>
                    {this.props.Button}
                </button>
            </div>
        )
    }

}

export default Button;