import React from 'react';

export default class Resource extends React.Component {

  render() {
    let resource = this.props.value.map((resource, index) => {
      return (
        <li className='resource-item' key={index}>
          <h4><a href={`${resource.link}`} target='_blank' rel='noopener noreferrer'>{resource.title}</a></h4>
          <div>{resource.description}</div>
        </li>
      )
    })
    return (
      <div>
        {resource}
      </div>
    )
  }
}