import { redirect, type RouteObject } from 'react-router';
import { CharacterInfo } from '../pages/CharacterInfo/CharacterInfo';
import { CharacterList } from '../pages/CharacterList/CharacterList';
import { PATHS } from './constants';

const startUrl = '/characterList';

export const routeCharacterList: RouteObject = {
  path: PATHS.charactersList,
  Component: CharacterList
};

export const routeCharacterInfo: RouteObject = {
  path: PATHS.characterInfo,
  Component: CharacterInfo
};

const defaultRoute: RouteObject = {
  index: true,
  loader: () => redirect(startUrl)
};

export const routes: RouteObject[] = [
  defaultRoute,
  routeCharacterList,
  routeCharacterInfo
];
