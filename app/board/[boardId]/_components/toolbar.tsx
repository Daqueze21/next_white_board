import { Skeleton } from "@/components/ui/skeleton";

export const Toolbar = () => {
  return (
    <div className='absolute top-[50%] left-2 -translate-y-[50%] flex flex-col gap-y-4'>
      <div className='flex flex-col items-center gap-y-1 p-1 rounded-md shadow-md bg-white'>
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
      </div>
      <div className="flex flex-col items-center p-2 shadow-md rounded-md bg-white">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};


Toolbar.Skeleton = function infoSkeleton() {
  return (
    <div className='absolute top-[50%] left-2 -translate-y-[50%] flex flex-col gap-y-4'>
      <div className='h-[100px] w-[60px] flex flex-col items-center gap-y-1 p-1 rounded-md shadow-md bg-white'>
        <Skeleton className='h-full w-full bg-muted-400' />
      </div>
      <div className='h-[70px] w-[60px] flex flex-col items-center p-2 shadow-md rounded-md bg-white'>
        <Skeleton className='h-full w-full bg-muted-400' />
      </div>
    </div>
  );
};