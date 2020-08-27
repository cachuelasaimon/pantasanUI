import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
//////// Redux Actions ////////

// Buttons 
import Header from './header'
import DashboardButton from './DashboardButton'

// Styled Components
import {
    Grid,
    Darken,
} from './styled-components'
import SubMenu from './SubMenu'



class dashboard extends Component {
    // Local State 
    state = {
        // Username, prolly userID?
        activeButton: '',
        dashboardIsActive: false,
        toggleOverlay: () => {
            this.setState(state=>({
                dashboardIsActive: !state.dashboardIsActive,
            }))
        }
    }

    // Create Quiz Handler 
    CreateQuiz = () => {
        console.log('Create Quiz Event')
        this.state.activeButton === '' ? this.setState({activeButton:'create-quiz'}) : this.setState({activeButton:''})
    }

    // Check Scores Handler 
    CheckScores = () => {
        console.log('Check Scores Event')
        this.state.activeButton === '' ? this.setState({activeButton:'check-scores'}) : this.setState({activeButton:''})
    }

    // Arrange Class Handler
    ArrangeClass = () => {
        console.log('Arrange Class Event')
        this.state.activeButton === '' ? this.setState({activeButton:'arrange-class'}) : this.setState({activeButton:''})
    }

    // Manage Schedule Handler 
    ManageSchedule = () => {
        console.log("Manage Schedule Event")
        this.state.activeButton === '' ? this.setState({activeButton:'manage-schedule'}) : this.setState({activeButton:''})
    }

    // Test Yourself Handler 
    TestYourself = () => {
        console.log('Test Yourself Event')
        this.state.activeButton === '' ? this.setState({activeButton:'test-yourself'}) : this.setState({activeButton:''})
    }

    // Send Results Handler
    SendResults = () => {
        console.log('Send Results Event')
        this.state.activeButton === '' ? this.setState({activeButton:'send-results'}) : this.setState({activeButton:''})
    }

    // Render 
    render () {
        return ( 
            <div>
                <Darken className="overlay" style= {{ zIndex: `${this.state.dashboardIsActive ? "3" : "-1"}` }}/> 
                <div className="dashboard-bg">
                <SubMenu activeButton={this.state.activeButton} />
                    <Grid>
                        <Header />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.CreateQuiz} label="create-quiz-mobile" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.CheckScores} label="scores-mobile" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.ArrangeClass} label="arrange-class-mobile" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.ManageSchedule} label="manage-schedule-mobile" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.SendResults} label="send-results-mobile" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.TestYourself} label="test-yourself-mobile" />
                    </Grid>         
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(dashboard);