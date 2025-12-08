# Mant - Mantine UI React Dashboard

A modern React 19 + TypeScript + Vite application with Mantine UI components, React Router v7 for navigation, and Firebase integration.

## Project Overview

**Mant** is a full-featured dashboard application built with:

- **React 19** - Latest React with improved hooks and features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool with HMR
- **Mantine UI v8** - Comprehensive component library with theming
- **React Router v7** - Modern client-side routing with nested routes
- **Firebase** - Backend services integration
- **Tabler Icons** - Icon library integration
- **ESLint & Prettier** - Code quality and formatting

## Architecture

### Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppMenu.tsx      # Main navigation menu with dropdowns
│   ├── AppContainer.tsx # Container component
│   ├── Menu.tsx         # Menu component
│   └── NewMenu.tsx      # New menu variant
├── layouts/             # Page layout components
│   ├── Dashboard.tsx    # Dashboard layout with sidebar nav
│   ├── Profile.tsx      # User profile card component
│   └── *.module.css     # Scoped CSS modules
├── assets/              # Static assets
├── App.tsx              # Root layout with AppShell
├── main.tsx             # Router configuration and app entry
├── index.css            # Global styles
└── App.css              # App component styles
```

### Routing Architecture

The app uses **React Router v7** with nested route support:

```
/                           → App (Root layout)
├── /home                   → Home Page
├── /dashboard              → Dashboard layout
│   ├── profile             → User profile
│   ├── security            → Security settings
│   └── settings            → Other settings
└── /features (commented)   → Future feature routes
```

**Key Features:**

- Nested routes with `<Outlet />` for nested component rendering
- Client-side navigation with `<Link>` components
- Route-based code splitting
- Automatic navigation state management

### Component Architecture

#### Root Layout (`App.tsx`)

- Uses Mantine's `AppShell` for consistent layout
- Header with `AppMenu` component
- Navbar area (currently empty, ready for sidebar)
- Main content area with `<Outlet />` for child routes
- Mantine theme configuration (blue primary color, system fonts)

#### AppMenu Component

- Dropdown navigation menu
- Hover trigger
- Nested submenus using `Menu.Sub`
- React Router `Link` integration
- Navigation items:
  - Dashboard
  - Features (submenu)
  - Settings (submenu)

#### Dashboard Layout

- Side navigation with icon labels
- Uses Tabler Icons for visual consistency
- Nested routing for dashboard sections:
  - Profile
  - Security
  - Settings
- `<Outlet />` for nested child route rendering

#### Profile Component

- Mantine Card component
- Avatar display with background image
- Statistics display
- Responsive design with scoped CSS module

## Technology Stack

### Core

- **react@^19.2.1** - Latest React with hooks
- **react-dom@^19.2.1** - DOM rendering
- **typescript@~5.9.3** - Type safety
- **vite@^7.2.4** - Build tool

### UI & Styling

- **@mantine/core@^8.3.9** - Component library
- **@mantine/hooks@^8.3.9** - Custom hooks
- **@mantine/form@^8.3.9** - Form management
- **@mantine/dates@^8.3.9** - Date components
- **@tabler/icons-react@^3.35.0** - Icon library
- **postcss** - CSS processing
- **postcss-preset-mantine** - Mantine CSS configuration

### Routing & State

- **react-router@^7.10.1** - Client-side routing with nested routes

### Backend

- **firebase@^12.6.0** - Backend services (authentication, database, etc.)
- **dayjs@^1.11.19** - Date manipulation

### Development

- **@vitejs/plugin-react@^5.1.1** - React HMR support
- **eslint** - Code linting
- **prettier** - Code formatting
- **@typescript-eslint** - TypeScript linting
- **eslint-plugin-react** - React-specific lint rules

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with HMR at `http://localhost:5173`.

### Build

```bash
npm run build
```

Compiles TypeScript and builds with Vite for production.

### Preview

```bash
npm run preview
```

Preview the production build locally.

### Lint

```bash
npm run lint
```

Run ESLint to check code quality.

## Mantine Theme Configuration

The app uses a custom Mantine theme defined in `App.tsx`:

```typescript
const mantineTheme = {
  primaryColor: 'blue',
  fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
};
```

Customize colors, fonts, spacing, and component defaults here.

## React Router v7 Setup

Router configuration is in `main.tsx` using `createBrowserRouter`:

```typescript
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/home', element: <div>Home Page</div> },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          { path: 'profile', element: <Profile /> },
          // nested child routes...
        ],
      },
    ],
  },
]);
```

**Important:** Child route paths are relative to their parent path.

## Navigation Best Practices

### Using Links in Mantine Components

Use `component={Link}` prop to integrate React Router with Mantine:

```tsx
import { Link } from 'react-router';
import { Menu, Button, Text } from '@mantine/core';

// In Menu items
<Menu.Item component={Link} to="/dashboard">
  Dashboard
</Menu.Item>

// In other components
<Button component={Link} to="/home">
  Home
</Button>

// Wrap text or custom components
<Text component={Link} to="/profile">
  Go to Profile
</Text>
```

## TypeScript Configuration

The project uses strict TypeScript settings:

- `strict: true` - Enables all strict type checking
- `noUnusedLocals: true` - Error on unused variables
- `noUnusedParameters: true` - Error on unused parameters
- `jsx: "react-jsx"` - Uses new JSX transform

## Future Enhancements

Currently commented out routes for:

- `/features` - Feature showcase pages
- `/about` - About page

Uncomment and implement as needed.

## Notes

- React Router v7 consolidated `react-router-dom` into `react-router` package
- Always use `<Outlet />` in parent components that have child routes
- Use relative paths for nested child routes (no leading `/`)
