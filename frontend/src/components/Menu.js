import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


//redux
import { connect } from 'react-redux'
import { fetchCategories, changeMenuActiveItem } from '../actions'

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
                    <Link 
                        to={`/${cat.name}`} 
                        onClick={() => this.props.changeMenuActiveItem(`${cat.name}`)} //calls action to change active item on menu reducer
                    >
                        <Menu.Item 
                            name={`/${cat.name}`}
                            active={this.props.activeItem === `${cat.name}`} 
                        /> 
                    </Link>
                    </span>
                )
            )
        )
    }

    render() {

        return (
        <Menu inverted stackable>
            <Link 
                to="/" 
                onClick={() => this.props.changeMenuActiveItem('All')}    
            >
                <Menu.Item 
                    name='All' 
                    active={this.props.activeItem === 'All'} 
                />
            </Link>

            {this.displayMenu()}

            <Menu.Item className='right' >
                <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/psatler/Readable"
                >
                    <Icon name='code' />
                </a>
            </Menu.Item>
           
        </Menu>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        changeMenuActiveItem: (option) => dispatch(changeMenuActiveItem(option)),
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoryReducer.categories,
        activeItem: state.menuReducer.activeItem,
    }
}

MenuApp.propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    changeMenuActiveItem: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    activeItem: PropTypes.string.isRequired,
}


export default connect(mapStateToProps,mapDispatchToProps)(MenuApp);