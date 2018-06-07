import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class MenuApp extends Component {

    state = { activeItem: 'all' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
        <Menu pointing>
            <Link to="/" >
            <Menu.Item name='All' active={activeItem === 'all'} onClick={this.handleItemClick} />
            </Link>

            <Link to="/react" >
            <Menu.Item name='React' active={activeItem === 'react'} onClick={this.handleItemClick} />
            </Link>

            <Link to="/redux" >
            <Menu.Item name='Redux' active={activeItem === 'redux'} onClick={this.handleItemClick} />
            </Link>
        </Menu>
        )
    }
}

export default MenuApp;