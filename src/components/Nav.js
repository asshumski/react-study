import React from 'react';
import * as Apps from './apps';

export default class Nav extends React.Component {
    state = {
        apps: []
    };

    render() {
        console.log(Apps);
        return (
            <div className="nav">
                <ul>
                    {this.state.apps.map((app, index) => (
                        <li key={index}>hello</li>
                    ))}
                </ul>
            </div>
        );
    }
}