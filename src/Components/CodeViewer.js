import ReactJsonSyntaxHighlighter from 'react-json-syntax-highlighter';
import React from 'react';
import './CodeViewer.css';

const CodeViewer = ({ results, error }) => {
  return error ? (
    <div className="errorContainer">
      <span className="error">{results}</span>
    </div>
  ) : (
    <ReactJsonSyntaxHighlighter obj={results} />
  );
};

export default CodeViewer;
