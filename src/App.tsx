import { AppShell, Burger } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router';
import AppMenu from './components/AppMenu';
import { useDisclosure } from '@mantine/hooks';

const mantineTheme = {
  primaryColor: 'blue',
  fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
};

export default function App() {
  const [user, setUser] = useState({ loggedIn: false });
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <MantineProvider theme={mantineTheme}>
      <AppShell
        padding="md"
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header>
          <AppMenu
            user={user}
            setUser={setUser}
            opened={opened}
            onClick={toggle}
          />
        </AppShell.Header>
        <AppShell.Navbar></AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
