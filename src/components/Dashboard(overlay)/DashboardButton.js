import React, {Component} from 'react'

class DashboardButton extends Component {
    // State 
    state = {
        active: false,
        toggle: null,
        Zindex: 2,
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
        console.log(`${this.props.label} ${this.state.active}`)
   }

   // On Update
//    componentDidUpdate (prevState) {
//         if (prevState.active !== this.state.active) {
//            this.state.active === true ? this.setState({zIndex:5}) : this.setState({zIndex:2})
//         }
//    }


    // Render 
    render () {
         return (
            <React.Fragment>
                <div 
                    className={`${this.props.label} dashboard-button`} 
                    onClick={this.ButtonClick}
                    style={{
                        zIndex : `${this.state.active === true ? "5" : "2"}`
                    }}>
                </div>
            </React.Fragment>
        )
    }
}

export default DashboardButton