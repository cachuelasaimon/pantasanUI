import React, {Component} from 'react'
import { Header } from './styled-components'

class header extends Component {
    // State 
    state = {}

    // Render 
    render () {
        return (
            <React.Fragment>
                {/* Header */}
                <Header 
                    className="header"
                    style = {{
                        background: "#042788",
                }}>
                    <div className="header-logo"></div>
                </Header>
            </React.Fragment>
        )
    }
}

export default header 