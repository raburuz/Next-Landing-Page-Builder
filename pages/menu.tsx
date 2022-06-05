import { MetaTags } from '../interfaces/structural';
import { Main } from '../layouts';
import { Menu } from '../components/ui/Menu';

const metaTags: MetaTags = {
  title: 'Templates',
  description: 'Create your own Landing Page',
};

const MenuP = () => {
  return (
    <Main metaTags={metaTags}>
      <Menu />
    </Main>
  );
};

export default MenuP;
