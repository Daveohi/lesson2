import React, { Component } from 'react'
import Button from './Button'

export class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>This is Class Component</h2>

        <Button props={"class button"}/>
      </div>
    )
  }
}

export default ClassComponent