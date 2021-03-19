import React from 'react';
import Feed from './Feed';
import './Blog.css';
import Widgets from './Widgets';
import { useStateValue } from '../StateProvider';

function Blog() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='app__body'>
      <Feed />
      <Widgets />
    </div>
  );
}

export default Blog;
