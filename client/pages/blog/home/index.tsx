import React, { useState, useEffect, useMemo } from 'react';
import { useSSRProps, PromiseList } from '../../../hooks/useSSRProps';
import { useSelector } from '../../../modal';

export function HomeC() {
  const { user } = useSelector('user');
  const [count, setCount] = useState(0);

  useSSRProps(() => {
    return Promise.resolve({
      user: {
        name: '张三',
        age: 19,
      },
    });
  });

  useMemo(() => {
    setCount(1);
    setTimeout(() => {
      setCount(5);
    }, 0);
  }, []);
  return <div>qqqq: {JSON.stringify(user)}</div>;
}

export class Home extends React.Component {
  componentWillUpdate() {
    console.log('dicomponentWillUpdatesd');
  }

  componentDidMount() {
    console.log('did');
  }

  render() {
    return <HomeC />;
  }
}
