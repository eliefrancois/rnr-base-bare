import { Slot } from 'expo-router';
import { SessionProvider, useSession } from '@/context/index';

export default function Root() {
  const session = useSession()
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
