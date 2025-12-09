import { Menu, Button, PopoverTarget, PopoverDropdown } from '@mantine/core';
import { Link } from 'react-router';
import type { User } from '../Types';

function AppMenu({
  user,
  setUser,
  opened,
  onClick,
}: {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  opened: boolean | false;
  onClick: () => void;
}) {
  return (
    <Menu withArrow={true} width={200} opened={opened} position="bottom-start">
      <Menu.Target>
        <Button onClick={onClick}> &gt; </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={onClick} component={Link} to="/dashboard">
          Dashboard
        </Menu.Item>
        <Menu.Sub openDelay={120} closeDelay={150}>
          <Menu.Sub.Target>
            <Menu.Sub.Item onClick={onClick}>Features</Menu.Sub.Item>
          </Menu.Sub.Target>
          <Menu.Sub.Dropdown>
            <Menu.Item component={Link} to="/feature1">
              Feature 1
            </Menu.Item>
            <Menu.Item component={Link} to="/feature2">
              Feature 2
            </Menu.Item>
            <Menu.Item component={Link} to="/feature3">
              Feature 3
            </Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>
        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Settings</Menu.Sub.Item>
          </Menu.Sub.Target>
          <Menu.Sub.Dropdown>
            <Menu.Item component={Link} to="/settings/profile">
              Profile
            </Menu.Item>
            <Menu.Item component={Link} to="/settings/security">
              Password and Security
            </Menu.Item>
          </Menu.Sub.Dropdown>
          <Menu.Item>
            {user?.loggedIn ? (
              <Button
                onClick={() =>
                  setUser((prev: User) => ({ ...prev, loggedIn: false }))
                }
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={() =>
                  setUser((prev: User) => ({ ...prev, loggedIn: true }))
                }
              >
                Login
              </Button>
            )}
          </Menu.Item>
        </Menu.Sub>
      </Menu.Dropdown>
    </Menu>
  );
}

export default AppMenu;
