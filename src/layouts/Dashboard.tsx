import { Outlet, Link } from 'react-router';
import classes from './navbarsimplecolored.module.css';
import {
  IconFingerprint,
  IconAccessible,
  IconSettings,
} from '@tabler/icons-react';

const data = [
  { link: 'profile', label: 'Profile', icon: IconAccessible },
  { link: 'security', label: 'Security', icon: IconFingerprint },
  { link: 'settings', label: 'Other Settings', icon: IconSettings },
];

export default function Dashboard() {
  return (
    <>
      <nav className={classes.navbar}>
        {data.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.label} to={item.link} className={classes.link}>
              <Icon className={classes.linkIcon} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </>
  );
}
