import styled from 'styled-components'

// Dashboard Components (Main Menu)
export const DashboardGridMobile = styled.div`
    width:100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 4vw;
    grid-column-gap: 3vw; 
    grid-auto-rows: 0.5rem;
    padding-bottom:2rem;
`

export const Darken = styled.div`
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.4);
    display: grid;
`

// Dashboard Button Components
<<<<<<< HEAD
export const Header = styled.div`
    border-radius: 0 0 20px 20px;
    background-repeat: no-repeat;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end:9;
    display: grid;
    grid-template-columns: 1fr repeat(12, 1fr) 1fr;
    grid-template-rows: repeat(6, 1fr);
    z-index:5;
    margin-bottom: 0.5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5)
`
=======
>>>>>>> 76b85008d41160af1e19e14c91e8ab99a38e1e57
export const DashboardButtonPicture = styled.div`
    grid-row-start: 1; 
    grid-row-end: 2; 
    margin:1vw 2vw 0 2vw;
    border-radius: 20px;
    display:flex;
`

export const DashboardButtonLabel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0;
    padding-left: 5vw;
    color: white;
    font-family:'Montserrat', sans-serif;
`

export const SubMenuItem = styled.div`
    display:flex;
    width: 50vw;
    background-color: white;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;  
    position:absolute;
    left: 46vw;
    box-shadow: 0 3px 3px 0 rgba(76, 75, 75, 0.4);
`