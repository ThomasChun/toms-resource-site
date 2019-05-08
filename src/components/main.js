import React from 'react';
import ContentCategory from './content-category';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <ContentCategory value='Websites' />
        <ContentCategory value='JavaScript' />
        <ContentCategory value='HTML' />
        <ContentCategory value='CSS' />
        <ContentCategory value='Regular Expressions: RegEx' />
        <ContentCategory value='Articles & Blogs' />
        <ContentCategory value='Social Media' />
      </div>
    )
  }
}