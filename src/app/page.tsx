
'use client';

import { useState } from 'react';
import ClientForm from '@/app/components/ClientForm';
import ServerRedirect from '@/app/components/ServerRedirect'; // Ensure this path is correct or update it to the correct path

export default function Home() {
  const [password, setPassword] = useState('');

  return (
    <>
      <ClientForm onSubmit={setPassword} />
      {password && <ServerRedirect password={password} />}
    </>
  );
}