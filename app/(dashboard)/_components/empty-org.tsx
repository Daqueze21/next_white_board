import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CreateOrganization } from '@clerk/nextjs';

export const EmptyOrg = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      {/* TODO: add some  image*/}
      <h2 className='mt-6 text-2xl font-semibold'>Welcome to Board</h2>
      <p className='mt-2 text-muted-foreground'>
        create an organization to get started
      </p>
      <div className='mt-6'>
        <Dialog>
          <DialogTrigger asChild>
            <Button size='lg' className='text-base'>
              Create an organization
            </Button>
          </DialogTrigger>
          <DialogContent className='max-w-[480px] p-0 bg-transparent border-none'>
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
