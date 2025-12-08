import { AppShell } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router';
import AppMenu from './components/AppMenu';

const mantineTheme = {
  primaryColor: 'blue',
  fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
};

export default function App() {
  const [opened, setOpened] = useState(false);
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
          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
          <AppMenu opened={opened} onClick={() => setOpened(!opened)} />
        </AppShell.Header>

        <AppShell.Navbar></AppShell.Navbar>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
