import React,{Component} from 'react'
import './cards.css'
import edit from '../images/edit.svg'
import unstar from '../images/unstar.svg'
import deletee from '../images/delete.svg'
class cards extends Component{
  constructor(props){
      super()
      this.state={
        
      }
  }  
  render(){
      return (
        <div>
            <div className="card">
               {this.props.name}
               <img src={unstar} alt="w"/>
               <img src={deletee} alt="d"/>
               <img src={edit} alt="d"/>               
            </div>
        </div>
      )
   }
}
export default cards