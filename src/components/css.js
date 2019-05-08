import React from 'react';
import Resource from './resource';
import resourceData from '../resource-data';

export default class Css extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: true,
    }
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState({ visibility: !this.state.visibility })
  }
  
  render() {
    let expanded = '+';
    expanded = this.state.visibility ? '- collapse' : '+ expand';
    let cssResourceArray = resourceData.category.css;
    let cssResources = cssResourceArray.map((resource, index) => {
      return (
        <li key={index} className='resource-type'>
          <h3>{resource.title}</h3>
          <ul>
            <Resource value={resource.resources} />
          </ul>
        </li>
      )
    })

    return (
      <div className="css">
        <div className="h2-wrapper" onClick={this.toggleClick}>
          <h2 className={`${this.state.visibility ? 'h2-border' : 'h2-no-border'}`}>CSS</h2>
          <div className={`expand-text ${this.state.visibility ? 'h2-border' : 'h2-no-border'}`}>{expanded}</div>
        </div>
        <div className={`content-container ${this.state.visibility ? 'expand' : 'collapse'}`}>
          <ul className='resource-details'>
          {cssResources}
          </ul>
        </div>
      </div>
    )
  }
}