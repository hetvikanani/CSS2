import React, { Component } from 'react';


class Label extends Component{
    render()
    {
        return(
            <div>
                
                    <label>
                        {this.props.Label}

                    </label>
                
            </div>
        )
    }
}

export default Label;