import React from 'react';

export default class Css extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: false,
    }
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState({visibility: !this.state.visibility})
  }

  render() {
    return (
      <div className="css">
        <h2 className={`${this.state.visibility ? 'h2-border' : 'h2-no-border'}`} className={`${this.state.visibility ? 'h2-border' : 'h2-no-border'}`} onClick={this.toggleClick}>CSS</h2>
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