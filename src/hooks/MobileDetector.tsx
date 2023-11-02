import { useMediaQuery } from 'react-responsive';

export function MobileDetector() {
  const isMobile = useMediaQuery({ query: '(min-width: 900px)' });

  return isMobile;
}