import React from "react";

export default class Coin extends React.Component {
    render() {
        const { data } = this.props;
        return(
            <div>
                {this.props.id}
            </div>
        )
    }
}
