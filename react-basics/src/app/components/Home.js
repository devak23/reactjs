import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-4 col-offset-1">
                    <div className="panel panel-default">
                        <p className="panel-heading">
                            <span className="pull-left">{this.props.user.name} ({this.props.user.age})</span>
                            <span className="pull-right">{this.props.user.department}</span>
                            <span className="clearfix"/>
                        </p>
                        <p className="panel-body">
                            <strong>TEAM: </strong> {this.props.user.team.join(", ")}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
