import React from 'react';
import {oneOfType, arrayOf, node} from 'prop-types';

const PageContent = (props) => {
  return (
    <div className="page-content">
      {props.children}
    </div>
  );
};

PageContent.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default PageContent;
