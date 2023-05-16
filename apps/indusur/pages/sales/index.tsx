import Sales from './Sales';
import { useAppSelector } from '../../hooks/useStore';
import { useRouter } from 'next/router';

export default function index() {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state.auth);
  if (
    (!auth.token && localStorage.getItem('T') === '') ||
    localStorage.getItem('T') === null
  ) {
    router.push('/');
    return <></>;
  }
  return <Sales />;
}
