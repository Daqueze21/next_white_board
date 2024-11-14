import { ReactNode } from 'react';
import { Sidebar } from './_components/sidebar';
import { OrganizationSidebar } from './_components/organization-sidebar';
import { Navbar } from './_components/navbar';


interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className='h-full'>
      <Sidebar />
      <div className='h-full pl-[60px]'>
        <div className='h-full flex gap-x-3'>
          <OrganizationSidebar />
          <div className='h-full flex-1'>
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;