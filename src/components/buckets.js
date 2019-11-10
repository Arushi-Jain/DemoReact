import React, { Component } from 'react'
import style from './buckets.module.css'
// import PropTypes from 'prop-types'
import Cards from './todocards.js'
import db from '../config/firebase.config.js'

export class buckets extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            todos:[]
        }

        db.collection("buckets").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({name:doc.data().name})
                // console.log('firebase doc name',doc.data().todos)
                JSON.parse(doc.data().todos).forEach((todos)=>{
                // console.log('firebase todos',this.state.todos)
                this.setState(previousState =>{previousState.todos.push(todos.message)})
            })
            })
        })
    }
    
     componentWillMount(){
       
     }
    render() {
        return (
            <div className={style.bucket}>
                  <div className={style.bucketheading}></div>
                  <div>
                      {this.state.name}
                  </div>
                  {this.state.todos.map((todo , index) => {
                    return (
                        <Cards
                        key={index}
                        name={todo}
                        />
                    )
                    })}
                  <div className={style.addnew}> + ToDo</div>
            </div>
        )
    }
}

export default buckets


