import React, { Component } from 'react' 
import { 
    SubMenuItem
} from './styled-components'

class SubMenu extends Component {
     // State 
     state = {
         pos:0
     }   

     // Render 
     render () {
         const {activeButton} = this.props
         return (
             
            ///////////////// Responsive Submenu For Mobile /////////////////

             <React.Fragment> 
                 {/* Create Quiz Sub Menu */}
                <div>
                    <SubMenuItem 
                        style={{
                            top: `${10.2+(((window.screen.width - 250) / 100)*2)}rem`,
                            zIndex:`${activeButton === 'create-quiz' ? '4' : '-1'}`,
                            height:`${2+(((window.screen.width - 250) / 100)*0.375)}rem`}}> 
                        <span 
                            className="align-self-center create-quiz-submenu-item-mobile"
                            style ={{ 
                                marginLeft: `${0.8+(((window.screen.width - 250) / 50) /10)}rem`,
                                fontSize: `${0.8+(((window.screen.width - 250) / 50) /10)}rem` }}>
                            Create New
                        </span> 
                    </SubMenuItem>

                    <SubMenuItem 
                    style={{
                        top: `${12.7+(((window.screen.width - 250) / 100)*2.7)}rem`,
                        zIndex:`${activeButton === 'create-quiz' ? '4' : '-1'}`,
                        height:`${2+(((window.screen.width - 250) / 100)*0.375)}rem`}}> 
                       <span 
                            className="align-self-center create-quiz-submenu-item-mobile"
                            style ={{ 
                                marginLeft: `${0.8+(((window.screen.width - 250) / 50) /10)}rem`,
                                fontSize: `${0.8+(((window.screen.width - 250) / 50) /10)}rem`}}>
                            My Quizzes
                        </span> 
                    </SubMenuItem>

                    <SubMenuItem 
                    style={{
                        top: `${15.2+(((window.screen.width - 250) / 100)*3.5)}rem`,
                        zIndex:`${activeButton === 'create-quiz' ? '4' : '-1'}`,
                        height:`${2+(((window.screen.width - 250) / 100)*0.375)}rem`}}> 
                        <span 
                            className="align-self-center create-quiz-submenu-item-mobile"
                            style = {{ 
                                marginLeft: `${0.8+(((window.screen.width - 250) / 50) /10)}rem`,
                                fontSize: `${0.8+(((window.screen.width - 250) / 50) /10)}rem` }}>
                            Question Bank
                        </span> 
                    </SubMenuItem>
                </div>
             </React.Fragment>
         )
     }
}

export default SubMenu