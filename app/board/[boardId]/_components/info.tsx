import { Skeleton } from "@/components/ui/skeleton";

export const Info = () => {
  return (
    <div className='absolute top-2 left-2 h-12 flex items-center px-2 rounded-md shadow-md bg-white'>
      Lorem ipsum dolor sit amet.
    </div>
  );
};

Info.Skeleton = function infoSkeleton() {
  return (
    <div className='absolute top-2 left-2 h-12 w-[300px] flex items-center px-2 rounded-md shadow-md bg-white'>
      <Skeleton className="h-full w-full bg-muted-400"/>
    </div>
  );
}
