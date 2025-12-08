import { Menu, Button } from '@mantine/core';
import { Link } from 'react-router';

function AppMenu({
  opened,
  onClick,
}: {
  opened: boolean | false;
  onClick: () => void;
}) {
  return (
    <Menu width={200} trigger={'hover'} opened={opened} position="bottom-start">
      <Menu.Target>
        <Button onClick={onClick}>GO</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={onClick} component={Link} to="/dashboard">
          Dashboard
        </Menu.Item>

        <Menu.Sub>
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
          <Menu.Item>Logout</Menu.Item>
        </Menu.Sub>
      </Menu.Dropdown>
    </Menu>
  );
}

export default AppMenu;
