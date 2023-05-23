import React, { useState, useEffect } from 'react';

const IntervalExample = (props) => {
  const [seconds, setSeconds] = useState(' ');
  var text = props.text;
  var arr = text.split(' ');
  var len = arr.length;
  var index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => arr[index]);
      index++;
    }, len/8);
    if (len === index) {
      return;
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header>
        {seconds} seconds have elapsed since mounting.
      </header>
    </div>
  );
};

export default IntervalExample;