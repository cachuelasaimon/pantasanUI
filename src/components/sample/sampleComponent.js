import React, { Component } from 'react'
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group'
import { 
    Container, 
    Button, 
    ListGroup, 
    ListGroupItem
} from 'reactstrap'

import { connect } from 'react-redux'
import { Get, Add, Delete } from '../../Actions/sampleActions'

class sampleComponent extends Component {
    // Initial State
    state = {
        items : []
    }
    // On Mount
    componentDidMount() {
        const { items } = this.props
        this.setState({
            items: items
        })
    }
    // Add Item
    AddItem = () => {
        // Get User Input 
        const newItem = prompt('Enter an Item')
        // Check Input 
        const isWord = /[a-zA-Z]/;
        // Add Item To Glbal State
        if( newItem && isWord.test(newItem)) {
           this.props.Add(newItem)
        }
    }
    // Delete Item
    DeleteItem = (id) => {
        console.log(id)
        this.props.Delete(id)
    }
    // On Update 
    componentDidUpdate(prevProps) {
        if(prevProps.items !== this.props.items) {

        }
    }
    // Render 
    render () {
        const { items } = this.props
        return (
            <Container>
                {/* Add Item Button */}
                    <Button
                        onClick={this.AddItem}
                        color="dark"
                        className="m-3"
                        >Add Item</Button>
                {/* List Group */}
                <ListGroup>
                    <TransitionGroup>
                        { items.map( ({id,name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {/* Delete Button */}
                                        <Button
                                            onClick={()=>this.DeleteItem(id)}
                                            color='danger'
                                            className="ml-auto mr-3">
                                                &times;
                                            </Button>
                                    {/* Item Name */}
                                        { name }
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    items: [...state.sampleItem.list]
})

export default connect(mapStateToProps, { Get, Add, Delete })(sampleComponent)