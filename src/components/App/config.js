import { v4 as uuidv4 } from 'uuid';

// images
import nasa from '../../assets/images/nasa_official.jpg';
import happy_family from '../../assets/images/happy_family.jpg';
import emily_ko from '../../assets/images/emily_ko.jpg';
import national_geographic from '../../assets/images/national_geographic.jpg';

// videos
import nasaVideo from '../../assets/videos/nasa_official.mp4';
import happyVideo from '../../assets/videos/happy_family.mp4';
import emilyVideo from '../../assets/videos/emily_ko.mp4';
import nationalVideo from '../../assets/videos/national_geographic.mp4';

export const posts = [
  {
    id: uuidv4(),
    avatar: nasa,
    altText: 'Nasa official',
    author: 'nasa_official',
    video: nasaVideo,
  },
  {
    id: uuidv4(),
    avatar: national_geographic,
    altText: 'National geographic',
    author: 'national_geographic',
    video: nationalVideo,
  },
  {
    id: uuidv4(),
    avatar: emily_ko,
    altText: 'Emily ko',
    author: 'emily_ko',
    video: emilyVideo,
  },
  {
    id: uuidv4(),
    avatar: happy_family,
    altText: 'Happy family',
    author: 'happy_family',
    video: happyVideo,
  },
];