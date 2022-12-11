import { proxy } from 'valtio';
import Loading from '../../../../libs/shared/ui/src/lib/loading/loading';

interface Store {
  isAuth: boolean;
  loading: boolean;
}

const store = proxy({
  isAuth: true,
  loading: true,
});
