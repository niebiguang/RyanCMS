import React, { useState, useEffect, useMemo } from 'react';
import { useSSRProps, PromiseList } from '../../../hooks/useSSRProps';
import { useSelector } from '../../../modal';

export function Home() {
  const { user } = useSelector('user');
  const [count, setCount] = useState(0);

  useSSRProps(() => {
    return Promise.resolve({
      user: {
        name: '李四',
        age: 19,
      },
    });
  });

  return <div>名字：{user && user.name}</div>;
}
