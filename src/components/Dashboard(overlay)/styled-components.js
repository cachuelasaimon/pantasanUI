import styled from 'styled-components'

export const Grid = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 4vw;
    grid-column-gap: 1vw; 
    grid-auto-rows: 0.5rem;
`

export const Darken = styled.div`
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.2);
    display: grid;
`

export const SubMenuItem = styled.div`
    display:flex;
    height: 2rem;
    width: 50vw;
    background-color: white;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    z-index:5;
    position:absolute;
`