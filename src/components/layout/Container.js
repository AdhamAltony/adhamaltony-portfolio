import { cn } from '../../lib/utils';

export default function Container({ as: Component = 'div', className, children }) {
  return (
    <Component className={cn('mx-auto w-full max-w-6xl px-6 sm:px-7 lg:px-10', className)}>
      {children}
    </Component>
  );
}
