import React from 'react';

export default class Websites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: false,
    }
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState({ visibility: !this.state.visibility })
  }

  render() {
    let expanded = '+';
    expanded = this.state.visibility ? '- collapse' : '+ expand';
    
    return (
      <div className="websites">
        <div className="h2-wrapper" onClick={this.toggleClick}>
          <h2 className={`${this.state.visibility ? 'h2-border' : 'h2-no-border'}`}>Websites</h2>
          <div className={`expand-text ${this.state.visibility ? 'h2-border' : 'h2-no-border'}`}>{expanded}</div>
        </div>
        <div className={`content-container ${this.state.visibility ? 'expand' : 'collapse'}`}>
          <ul>
            <li>Web Resources</li>
            <li>Coding Practice</li>
            <li>Videos</li>
            <li>Courses</li>
            <li>Books</li>
            <li>Articles & Blogs</li>
          </ul>
        </div>
      </div>
    )
  }
}