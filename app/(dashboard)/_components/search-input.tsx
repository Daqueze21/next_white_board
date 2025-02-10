'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';
import qs from 'query-string';
import useDebounce from '@/components/hooks/useDebounce';

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const debouncedSearchTerm = useDebounce(value, 1000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: {
          search: debouncedSearchTerm,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    router.push(url);
  }, [debouncedSearchTerm, router]);

  return (
    <div className='w-full relative'>
      <Search className='absolute top-1/2 left-3 h-4 w-4  transform -translate-y-1/2 text-muted-foreground' />
      <Input
        onChange={handleChange}
        value={value}
        placeholder='Search boards'
        className='w-full max-w-[516px] pl-9'
      />
    </div>
  );
};
