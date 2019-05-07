import React from 'react';

export default class LeftNav extends React.Component {
  render() {
    return (
      <div className="left-nav">
        <h2>Resources</h2>
        <ul className="categories">
          <li>HTML</li>
          <li>CSS</li>
            <ul>
              <li>Flexbox</li>
              <li>Grid</li>
              <li>Sass/Scss</li>
            </ul>
          <li>JavaScript</li>
          <ul>
            <li>React.js</li>
            <li>Redux</li>
          </ul>
          <li>Coding Challenges</li>
          <li>Websites</li>
          <li>Articles & Blogs</li>
          <li>Social Media</li>
        </ul>
      </div>
    )
  }
}