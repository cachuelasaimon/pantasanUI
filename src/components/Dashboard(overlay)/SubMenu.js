import React, { Component } from 'react' 
import { 
    SubMenuItem
} from './styled-components'

class SubMenu extends Component {
     // State 
     state = {}       

     // Render 
     render () {
         const {activeButton} = this.props
         return (
             <React.Fragment>
                 {/* Create Quiz Sub Menu */}
                <div>
                    <SubMenuItem style={{
                        top: "10rem",
                        left: "45vw",
                        zIndex:`${activeButton === 'create-quiz' ? '4' : '-1'}`
                    }}> <span className="ml-2 align-self-center create-quiz-submenu-item">Create New</span> </SubMenuItem>
                    <SubMenuItem style={{
                        top: "12.5rem",
                        left: "45vw",
                        zIndex:`${activeButton === 'create-quiz' ? '4' : '-1'}`
                    }}> <span className="ml-2 align-self-center create-quiz-submenu-item">My Quizzes</span> </SubMenuItem>
                    <SubMenuItem style={{
                        top: "15rem",
                        left: "45vw",
                        zIndex:`${activeButton === 'create-quiz' ? '4' : '-1'}`
                    }}> <span className="ml-2 align-self-center create-quiz-submenu-item">Question Bank</span> </SubMenuItem>
                </div>
             </React.Fragment>
         )
     }
}

export default SubMenu