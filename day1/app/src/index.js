import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.querySelector('div'));
const h1 = React.createElement('h1', null, 'React without CRA using Webpack as a bundler');
root.render(h1);