import React from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch,
} from '@nextui-org/react';

import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { setThemeMode } from 'redux/slices/settings';

const Header: React.FC = () => {
  const {
    settings: { themeMode },
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleChangeTheme = (): void => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Logo</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            onPress={handleChangeTheme}
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Switch
            size="lg"
            color="primary"
            defaultSelected={themeMode === 'dark'}
            onChange={handleChangeTheme}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
