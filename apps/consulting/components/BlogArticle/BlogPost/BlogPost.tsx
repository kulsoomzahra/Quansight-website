import { FC, useEffect } from 'react';

import 'highlight.js/styles/a11y-dark.css';

import hljs from 'highlight.js';

import { createMarkup } from '@quansight/shared/utils';

import { TBlogPostProps } from '../types';

export const BlogPost: FC<TBlogPostProps> = ({ postText }) => {
  useEffect(() => {
    hljs.highlightAll();
    hljs.configure({
      ignoreUnescapedHTML: true,
    });
  }, [postText]);

  return (
    <div
      className=" prose-code:px-0 prose-pre:px-0 prose-img:mx-auto mb-[5rem] min-w-full text-[1.8rem] leading-[2.7rem] text-black  prose-code:bg-transparent prose-pre:bg-transparent prose-code:rounded-lg prose"
      dangerouslySetInnerHTML={createMarkup(postText)}
    />
  );
};
