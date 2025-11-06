'use client';
import {
   useMutation,
   useQuery,
   Authenticated,
   Unauthenticated,
} from 'convex/react';
import { api } from '@workspace/backend/_generated/api';
import { Button } from '@workspace/ui/components/button';
import { SignInButton, UserButton } from '@clerk/nextjs';

export default function Page() {
   const users = useQuery(api.users.getMany);
   const addUser = useMutation(api.users.add);
   return (
      <>
         <Authenticated>
            <div className='flex items-center justify-center min-h-svh'>
               <div className='flex flex-col items-center justify-center gap-4'>
                  <UserButton />
                  <Button onClick={() => addUser()}>Add</Button>
                  <h1 className='text-2xl  font-bold'>app/web</h1>
                  <p className='text-center'>{JSON.stringify(users)}</p>
               </div>
            </div>
         </Authenticated>
         <Unauthenticated>
            <div>
               <SignInButton>Login</SignInButton>
               <h2>Please Login</h2>
            </div>
         </Unauthenticated>
      </>
   );
}
