import React from 'react';
import clsx from 'clsx';

import './Container.scss';

export interface ContainerProps {
  children?: any;
  className?: string;
  viewContainer?: boolean;
}

const Container = (props: ContainerProps) => {
  const { children, className, viewContainer } = props;

  return <div className={clsx(['Container', { viewContainer: viewContainer }, className])}>{children}</div>;
};

export default Container;
