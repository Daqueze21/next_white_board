
import { OrganizationProfile } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Plus className='h-4 w-4 mr-2' />
          Invite member
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[800px] p-0 bg-transparent border-none'>
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};

