import * as React from 'react';
import {SEGMENTS_COUNT} from '../../utils/consts';

const Spinner: React.FC = () => (
  <div className="loadingio-spinner-spin-ndgslan05n">
    <div className="ldio-lenc1v6s21e">
      {new Array(SEGMENTS_COUNT).fill(``).map((item, i) => (
        <div key={i}>
          <div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Spinner;
