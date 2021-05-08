import React from 'react';
import { useTrail, config } from 'react-spring';

interface TrailProps {
  className?: string;
  children: React.ReactNode;
  open: boolean;
}

/**
 * <Trail /> Props
 */
const useTrailProps = (props: TrailProps) => {
  const { children, open } = props;
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: config.gentle,
    opacity: open ? 1 : 0,
    y: open ? 0 : -20,
    from: { opacity: 0, y: -20 },
    delay: 600,
  });
  return {
    ...props,
    items,
    trail,
  };
};

export { useTrailProps };
