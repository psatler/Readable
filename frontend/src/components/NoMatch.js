import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


//https://tylermcginnis.com/react-router-handling-404-pages/

class NoMatch extends Component {
    render() {
        return (
            <div>
                <h3>No match for <code>{this.props.location.pathname}</code></h3>

                <h3 className="error404">404</h3>
                <h5 className="error404">The page you were looking for was not found</h5>
                {/* <h3>No match</h3> */}
            </div>
        )
    }
}

export default withRouter(NoMatch);


