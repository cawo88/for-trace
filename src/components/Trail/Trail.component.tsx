import React from 'react';
import { useTrailProps } from './Trail.props';
import { hoc } from '../../ultility/hoc';
import { animated } from 'react-spring';

const Trail = hoc(useTrailProps, ({ className, items, trail }) => {
  return (
    <>
      {trail.map(({ ...style }, index) => (
        <animated.div className={className} key={index} style={style}>
          <animated.div>{items[index]}</animated.div>
        </animated.div>
      ))}
    </>
  );
});

export { Trail };
