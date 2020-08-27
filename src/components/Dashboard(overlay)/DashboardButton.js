import React, {Component} from 'react'
import { DashboardButtonPicture, DashboardButtonLabel } from './styled-components'

class DashboardButton extends Component {
    // State 
    state = {
        active: false,
        toggle: null,
        screenSize: 0,        
    }

   // On Click 
   ButtonClick = () => {
        const Event = async() => {
            await this.setState(state=>({
                active: !state.active,
            }))
                  this.props.Event()
                  this.props.toggleOverlay()
        }
        Event()
   }

    // Render 
    render () {
         return (
            <React.Fragment>
                <div 
                    className={`${this.props.class} dashboard-button-mobile`} 
                    onClick={this.ButtonClick}
                    style={{
                        zIndex : `${this.state.active === true ? "5" : "2"}`,
                        gridTemplateRows: "2fr 1fr"
                    }}>
                    {/* Picture Part */}
                        <DashboardButtonPicture className="dashboard-logo" />
                    {/* Text Part */}
                        <DashboardButtonLabel
                            className="dashboard-label"
                            style={{ fontSize: `${0.8+((window.screen.width - 250) / 100)*0.2}rem` }}>
                                {
                                    // Map Text Array to 2 lines
                                    this.props.label.map( (label,index) => (
                                        <div key={index} style={{overflowY:"hidden"}}>{label}</div>
                                    ))
                                }
                        </DashboardButtonLabel>
                </div>
            </React.Fragment>
        )
    }
}

export default DashboardButton