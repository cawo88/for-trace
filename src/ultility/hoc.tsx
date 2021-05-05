/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import { ComponentType } from 'react';

/**
 * Wrap component with hook function with will be called in HOC component render
 */
function hoc<SP, HP>(hook: (props: SP) => HP, Source: ComponentType<HP & SP>) {
  const Result: {
    Original: unknown;
    hook: unknown;
  } = (props: SP) => <Source {...(hook(props) || ({} as HP))} {...props} />;

  Result.Original = Source;
  Result.hook = hook;

  return (Result as unknown) as ComponentType<Partial<HP> & SP> & {
    Original: ComponentType<HP & SP>;
    hook: typeof hook;
  };
}

export { hoc };
