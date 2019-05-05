import React from 'react';

export default class Javascript extends React.Component {
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
      <div className="javascript">
        <h2 className={`${this.state.visibility ? 'h2-border' : 'h2-no-border'}`} onClick={this.toggleClick}>JavaScript</h2>
        <div className={`content-container ${this.state.visibility ? 'expand' : 'collapse'}`}>
          <ul>
            <li>Web Resources</li>
            <li>Coding Practice</li>
            <li>Videos</li>
            <li>Courses</li>
            <li>Books</li>
              <ul>
                <li>
                  <h3>Eloquent Javascript: A Modern Introduction to Programming by Marijn Haverbeke</h3>
                </li>
              </ul>
            <li>Articles & Blogs</li>
          </ul>
        </div>
      </div>
    )
  }
}