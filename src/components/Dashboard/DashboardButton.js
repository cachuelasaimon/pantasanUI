import React, {Component} from 'react'

class DashboardButton extends Component {
    // State 
    state = {}

    // Render 
    render () {
        const { Event } = this.props
         return (
            <React.Fragment>
                {/* SendResults */}
                <div className={`${this.props.label} dashboard-button`} onClick={Event}></div>
            </React.Fragment>
        )
    }
}

export default DashboardButton