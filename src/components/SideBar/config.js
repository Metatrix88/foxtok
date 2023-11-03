import { v4 as uuidv4 } from 'uuid';
import { Camera, Home, Users } from '../../icons';
import {PATH} from '../../constants/paths';

export const menu = [
  {
    id: uuidv4(),
    title: 'For You',
    Icon: Home,
    upper: false,
    href: PATH.index,
  },
  {
    id: uuidv4(),
    title: 'Following',
    Icon: Users,
    upper: false,
    href: '#',
  },
  {
    id: uuidv4(),
    title: 'Live',
    Icon: Camera,
    upper: true,
    href: '#',
  },
];
