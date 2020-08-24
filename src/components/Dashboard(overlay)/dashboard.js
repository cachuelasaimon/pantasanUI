import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
//////// Redux Actions ////////

// Buttons 
import Header from './header'
import DashboardButton from './DashboardButton'

// Styled Components
import styled from 'styled-components'

const Grid = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 4vw;
    grid-column-gap: 1vw; 
    grid-auto-rows: 0.5rem;
`
const Darken = styled.div`
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.5);
`

class dashboard extends Component {
    // Local State 
    state = {
        // Username, prolly userID?
        isActive: false,
        toggleOverlay: () => {
            this.setState(state=>({
                isActive: !state.isActive,
            }))
        }
    }

    // Create Quiz Handler 
    CreateQuiz = () => {
        console.log('Create Quiz Event')
    }

    // Check Scores Handler 
    CheckScores = () => {
        console.log('Check Scores Event')
    }

    // Arrange Class Handler
    ArrangeClass = () => {
        console.log('Arrange Class Event')
    }

    // Manage Schedule Handler 
    ManageSchedule = () => {
        console.log("Manage Schedule Event")
    }

    // Test Yourself Handler 
    TestYourself = () => {
        console.log('Test Yourself Event')
    }

    // Send Results Handler
    SendResults = () => {
        console.log('Send Results Event')
    }

    // Render 
    render () {
        return ( 
            <div>
                <Darken className="overlay" style= {{ zIndex: `${this.state.isActive === false ? "-1" : "3"}` }}/> 
                <div className="dashboard-bg">
                    <Grid>
                        <Header />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.CreateQuiz} label="create-quiz" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.CheckScores} label="scores" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.ArrangeClass} label="arrange-class" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.ManageSchedule} label="manage-schedule" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.SendResults} label="send-results" />
                            <DashboardButton toggleOverlay={this.state.toggleOverlay} Event={this.TestYourself} label="test-yourself" />
                    </Grid>         
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(dashboard);