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


class dashboard extends Component {
    // Local State 
    state = {
        // Username, prolly userID?
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
            <div className="dashboard-bg">
                <Grid>
                    <Header />
                        <DashboardButton Event={this.CreateQuiz} label="create-quiz" />
                        <DashboardButton Event={this.CheckScores} label="scores" />
                        <DashboardButton Event={this.ArrangeClass} label="arrange-class" />
                        <DashboardButton Event={this.ManageSchedule} label="manage-schedule" />
                        <DashboardButton Event={this.SendResults} label="send-results" />
                        <DashboardButton Event={this.TestYourself} label="test-yourself" />
                </Grid>         
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(dashboard);