
import React from 'react';
import { Button } from 'antd';

export const isImg = /^data\:image\/png*?/;
export const isSvg = /.*\.svg?/;
export const getChildrenToRender = (item, i, isHover) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children = item.children;
  if (typeof item.children === 'string' && item.children.match(isSvg)) {
    children = React.createElement('img', { src: isHover ? item.children_hover : item.children });
  }

  if (typeof item.children === 'string' && item.children.match(isImg)) {
    children = React.createElement('img', { src: item.children, alt: 'img' });
  }

  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children
    });
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
