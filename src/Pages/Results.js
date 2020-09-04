import CodeViewer from '../Components/CodeViewer';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Button from '../Components/Button';
import styles from './Results.module.css';
import usePing from '../hooks/ping';

const Results = (props) => {
  const location = useLocation();
  const history = useHistory();
  usePing();

  let results = 'No results from server. Please Try again';
  let error = true;

  if (location.state) {
    results = location.state.results;
    error = location.state.error;
  }

  const back = () => {
    history.push('/');
  };

  const download = async () => {
    const fileName = 'receipt.json';
    const resultString = JSON.stringify(results, null, 2);
    const blob = new Blob([resultString], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <CodeViewer results={results} error={error} />
      <div className={styles.buttonContainer}>
        <Button variant="grey" onclick={back}>
          Back
        </Button>
        {!error && (
          <Button variant="blue" onclick={download}>
            Download
          </Button>
        )}
      </div>
    </div>
  );
};

export default Results;
