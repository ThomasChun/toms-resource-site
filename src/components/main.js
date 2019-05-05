import React from 'react';
import Html from './html';
import Css from './css';
import Javascript from './javascript';
import Websites from './websites';
import ArticlesBlogs from './articles-blogs';
import SocialMedia from './social-media';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Html />
        <Css />
        <Javascript />
        <Websites />
        <ArticlesBlogs />
        <SocialMedia />
      </div>
    )
  }
}