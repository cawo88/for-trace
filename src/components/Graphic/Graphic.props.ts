import { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GraphicProps {}

/**
 * <Graphic /> Props
 */
const useGraphicProps = (props: GraphicProps) => {
  const [active, setActive] = useState(false);
  const { x } = useSpring({ config: { duration: 800 }, x: active ? 1 : 0 });
  const { y } = useSpring({ config: { duration: 800 }, y: active ? 1 : 0 });
  useEffect(() => {
    const id = setTimeout(() => {
      setActive(!active);
    }, 2000);

    return () => clearTimeout(id);
  }, [active]);

  useEffect(() => {
    setActive(true);
  }, []);
  return {
    ...props,
    x,
    y,
  };
};

export { useGraphicProps };
