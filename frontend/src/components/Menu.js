import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

//redux
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class MenuApp extends Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    // state = { activeItem: 'all' }

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    displayMenu = () => {
        const categories = this.props.categories;

        return (
            categories.map( cat => (
                    <span key={cat.name}>
                    <Link to={`/${cat.name}`}>
                        <Menu.Item name={`/${cat.name}`} /> 
                    </Link>
                    </span>
                )
            )
        )
    }

    render() {
        const {categories} = this.props; //categories fetched from the server

        return (
        <Menu pointing>
            <Link to="/" >
            <Menu.Item name='All' />
            {/* <Menu.Item name='All' active={activeItem === 'all'} onClick={this.handleItemClick} /> */}
            </Link>

            {this.displayMenu()}
           
        </Menu>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoryReducer.categories
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuApp);