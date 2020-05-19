import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export function Hello() {
  const [name, setName] = useState('zhangsan');
  console.log('-------------');
  console.log('-------------');
  console.log('-------------');
  console.log('-------------');
  useMemo(() => {
    console.log('heloo----useMemo---=');
    setTimeout(() => {
      setName('lisi');
    }, 1000);
  }, []);

  useEffect(() => {
    console.log('heloo----useEffect---=');
  }, []);
  return (
    <div>
      {' '}
      <Link to="/">login {name}</Link>link{' '}
    </div>
  );
}
