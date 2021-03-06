import React from 'react';
import resourceData from '../resource-data';
import Resource from './resource';

export default class ContentCategories extends React.Component {
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
    
    let name = this.props.value;

    let resourceArray = resourceData.category;
    resourceArray = resourceArray.filter(category => category.resourceCategory === name);
    resourceArray = resourceArray[0].resourceArray;

    let resources = resourceArray.map((resource, index) => {
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
      <div className="html">
        <div className="h2-wrapper" onClick={this.toggleClick}>
          <h2 className={`${this.state.visibility ? 'h2-border' : 'h2-no-border'}`}>{name}</h2>
          <div className={`expand-text ${this.state.visibility ? 'h2-border' : 'h2-no-border'}`}>{expanded}</div>
        </div>
        <div className={`content-container ${this.state.visibility ? 'expand' : 'collapse'}`}>
          <ul className='resource-details'>
            {resources}
          </ul>
        </div>
      </div>
    )
  }
}