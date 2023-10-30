import { v4 as uuidv4 } from 'uuid';
import { Camera, Home, Users } from '../../icons';

export const menu = [
  {
    id: uuidv4(),
    title: 'For You',
    Icon: Home,
    upper: false,
    color: 'primary',
    href: '#'
  },
  {
    id: uuidv4(),
    title: 'Following',
    Icon: Users,
    upper: false,
    color: '',
    href: '#'
  },
  {
    id: uuidv4(),
    title: 'Live',
    Icon: Camera,
    upper: true,
    color: '',
    href: '#'
  },
];
