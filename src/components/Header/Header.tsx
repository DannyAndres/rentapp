import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Switch,
  Avatar,
} from '@nextui-org/react';

import Logo from 'assets/logo.png';

import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { setThemeMode } from 'redux/slices/settings';
import { logout } from 'redux/slices/auth';

interface MoonIconProps {
  className: string;
}

interface SunIconProps {
  className: string;
}

const MoonIcon: React.FC<MoonIconProps> = (props: MoonIconProps) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
};

const SunIcon: React.FC<SunIconProps> = (props: SunIconProps) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
};

const Header: React.FC = () => {
  const navigate = useNavigate();

  const {
    settings: { themeMode },
    auth: { authenticated },
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleChangeTheme = (): void => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  const logoutSubmit = (): void => {
    dispatch(logout());
  };

  return (
    <Navbar className="bg-white border border-b-gray-200 dark:border-0 dark:bg-secondary">
      <NavbarBrand>
        <button
          data-testid="header-logo-button"
          onClick={() => {
            navigate('/', { replace: true });
          }}
          className="h-12 w-12 flex justify-center items-center rounded-md"
        >
          <img
            src={Logo}
            alt="logo"
            className="filter invert dark:filter-none block h-10 w-auto"
          />
        </button>
      </NavbarBrand>
      <NavbarContent justify="end">
        {!authenticated && (
          <NavbarItem className="hidden lg:flex">
            <Button
              data-testid="header-login-button"
              onClick={() => {
                navigate('/login');
              }}
              color="primary"
              variant="light"
            >
              Login
            </Button>
          </NavbarItem>
        )}
        {!authenticated && (
          <NavbarItem>
            <Button
              data-testid="header-signup-button"
              onClick={() => {
                navigate('/register');
              }}
              color="primary"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
        )}
        {authenticated && (
          <NavbarItem>
            <Avatar name="Eve" />
          </NavbarItem>
        )}
        {authenticated && (
          <NavbarItem>
            <Button
              data-testid="header-logout-button"
              onClick={() => {
                logoutSubmit();
              }}
              color="primary"
              variant="flat"
            >
              Log out
            </Button>
          </NavbarItem>
        )}
        <NavbarItem>
          <Switch
            size="lg"
            color="primary"
            data-testid="header-darkmode-button"
            defaultSelected={themeMode === 'dark'}
            onChange={handleChangeTheme}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          >
            <SunIcon className="hidden" />
            <MoonIcon className="hidden" />
          </Switch>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
