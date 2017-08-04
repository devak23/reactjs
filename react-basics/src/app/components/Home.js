import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.user.age,
            status: 'Active',
            homeLink: 'Changed Link'
        }
    }

    makeMeOlder() {
        this.setState({
           age: this.state.age + 1
        });
    }

    onChangeLinkText() {
        console.log("user object's link name: ", this.props.user.linkName);
        this.state.homeLink = this.props.user.linkName;

        this.props.changeLinkName(this.state.homeLink);
        //this.props.changeLinkName(this.props.user.linkName);
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-8 col-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <span className="pull-left">{this.props.user.name} ({this.state.age})</span>
                            <span className="pull-right">{this.props.user.department}</span>
                            <span className="clearfix"/>
                        </div>
                        <div className="panel-body">
                            <p><strong>Status: </strong>{this.state.status}</p>
                            <p><strong>TEAM: </strong></p>
                            <ul>
                                {this.props.user.team.map((member, index) => <li key={index} value={index}>{member}</li>)}
                            </ul>
                            <p></p>
                        </div>
                        <hr />
                        <div>
                            {this.props.children}
                        </div>
                        <div>
                            <button onClick={this.makeMeOlder.bind(this)}>Make me Older</button>
                            <button onClick={this.props.greet}>Greet</button>
                            <button onClick={this.onChangeLinkText.bind(this)}>Change Text</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


Home.PropTypes = {
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
    greet: React.PropTypes.func
};