import React, { useMemo } from 'react';
import { Link as ReactLink, LinkProps } from 'react-router-dom';
import { useBlogger } from '@/client/selector/useBlogger';


export function Link(props: LinkProps) {
  const { blogger } = useBlogger();

  const formatPath = useMemo(() => {
    if (!blogger) return props.to;
    const isAcceptDomain = blogger.domain === window.location.hostname;
    return isAcceptDomain ? props.to : `/${blogger.nickname}${props.to}`.replace(/\/$/, '');
  }, [blogger, props.to]);

  return <ReactLink {...props} to={formatPath} />;
}