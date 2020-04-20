import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import Button from '../Components/Button';
import { useHistory } from 'react-router-dom';
import { endpoint } from '../config.json';
import styles from './Home.module.css';

function Previews(props) {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const history = useHistory();

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const upload = async () => {
    if (status) {
      return;
    }

    setStatus(`Uploading...`);
    // setup progress in case it takes a long time
    const config = {
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        if (percentCompleted === 100) {
          setStatus('Processing...');
        } else {
          setStatus(`Uploading ${percentCompleted}%`);
        }
      },

      onDownloadProgress: function (progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setStatus(`Downloading Response ${percentCompleted}%`);
      },
    };

    // add data to form
    let data = new FormData();
    data.append('file', files[0]);

    try {
      const results = await axios.post(endpoint, data, config);

      history.push({
        pathname: '/results',
        state: { results: results.data, error: false },
      });
    } catch (e) {
      const errorData = e.response
        ? e.response.data
        : 'Something went wrong with the application';

      history.push({
        pathname: '/results',
        state: { results: errorData, error: true },
      });
    }
  };

  // create thumbnail components
  const thumbs = files.map((file) => (
    <div className={styles.thumb} key={file.name}>
      <div className={styles.thumbInner}>
        <img src={file.preview} className={styles.img} alt={file.name} />
      </div>
    </div>
  ));

  return (
    <section className={styles.container}>
      <CSSTransition
        in={!files.length}
        timeout={100}
        classNames="display"
        unmountOnExit
      >
        {/*drop zone*/}
        <div {...getRootProps({ className: styles.dropZoneStyle })}>
          <input {...getInputProps()} multiple={false} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop your receipt here, or click to select the image</p>
          )}
        </div>
      </CSSTransition>

      {/*  thumbnail */}
      <aside className={styles.thumbsContainer}>{thumbs}</aside>
      <p>{status}</p>

      {/*  conditional button */}
      {!!files.length && (
        <Button variant="blue" onclick={upload}>
          Fetch Details
        </Button>
      )}
    </section>
  );
}

export default Previews;
