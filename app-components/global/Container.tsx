import { cn } from '@/lib/utils';

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('w-full mx-auto md:w-300 px-4 md:px-0 text-sm', className)}>
      {children}
    </div>
  );
}
export default Container;