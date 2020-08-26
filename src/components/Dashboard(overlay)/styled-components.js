import styled from 'styled-components'

export const Grid = styled.div`
    width:100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 4vw;
    grid-column-gap: 3vw; 
    grid-auto-rows: 0.5rem;
    padding-bottom: 2rem;
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

