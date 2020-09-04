import axios from 'axios';
import { endpoint } from '../config.json';
import { useEffect, useState } from 'react';

export default function usePing() {
  const [awake, setAwake] = useState(false);
  useEffect(() => {
    if (!awake) {
      axios
        .get(`${endpoint}/ping`)
        .then(() => {
          setAwake(true);
        })
        .catch(() => {
          setAwake(false);
        });
    }
  }, [awake]);

  return awake;
}
