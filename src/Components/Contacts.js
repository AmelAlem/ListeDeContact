import React from 'react';
import './Contact.css'


class Contacts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         status: false,
         };
    }
    render() {
        const statusOnline = (
            <div className="status">
            <div className="status-online"/>
            <div className="status-text">Online</div>
            </div>
        );
        const statusOffline = (
            <div className="status">
            <div className="status-offline"/>
            <div className="status-text">Offline</div>
            </div>
        );

    return (
    <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
           <h4 className="name" >{this.props.name}</h4>
           <div className="status">
                <span className={this.state.status ? 'statusOnline' : 'statusOffline'} 
                onClick={event => {
                const newStatus = !this.state.status;
                this.setState({ status: newStatus });
                }}
                >
                    {this.state.status ? statusOnline : statusOffline}
                </span>
            </div>
        </div>
        
    </div>
        );
    }
}
export default Contacts;
