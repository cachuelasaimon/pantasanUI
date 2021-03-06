import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
//////// Redux Actions ////////

// Buttons 
import Header from './header'
import DashboardButton from './DashboardButton'

// Styled Components
import {
    DashboardGridMobile,
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
                <div className="dashboard-bg" >
                <SubMenu activeButton={this.state.activeButton} />
                    <DashboardGridMobile>
                        <Header />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} label={["Create","Quiz"]} Event={this.CreateQuiz} class="create-quiz-mobile" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} label={["Check","Scores"]} Event={this.CheckScores} class="scores-mobile" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} label={["Arrange","Class"]} Event={this.ArrangeClass} class="arrange-class-mobile" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} label={["Manage","Schedule"]} Event={this.ManageSchedule} class="manage-schedule-mobile" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} label={["Send","Results"]} Event={this.SendResults} class="send-results-mobile" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} label={["Test","Yourself"]} Event={this.TestYourself} class="test-yourself-mobile" />
                    </DashboardGridMobile>         
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(dashboard);