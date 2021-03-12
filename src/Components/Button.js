import React , {Component, useState} from 'react'
import { ThemeContext } from '../contexts/Theme'

class Button extends Component{
  static contextType = ThemeContext;
  render(){
    const{isLightTheme,toggleTheme} = this.context
    
    return(
      <button onClick={toggleTheme}>{
        isLightTheme?'Dark':'Light'
      }</button>
    )
  }
  
}

export default Button