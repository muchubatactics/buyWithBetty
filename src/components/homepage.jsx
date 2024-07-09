import { AnimLogo, Logo } from './logo.jsx';

import { Link } from 'react-router-dom';

import cssStyle from '../styles/homepage.module.css';
import dragonImg from '../assets/dragon.png';
import rdrImg from '../assets/rdr.png';

export default function Homepage() {
  return (
    <div className={cssStyle.homepage}>
      <header >
        <Logo />
        <Link to='/shop'><button>Get Started</button></Link>
      </header>
      <main>
        <AnimLogo />
        <article>
          This is a shopping cart. It has mob nice stuff guys please buy hahah.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris quis magna sit amet nisl pulvinar congue. Proin lacinia nulla eget est dapibus, et accumsan sem blandit.
          Cras ex libero, fermentum sagittis dui quis, convallis eleifend turpis. Maecenas feugiat semper sapien vel ornare.
          Cras aliquam imperdiet nibh in pharetra. Aenean faucibus enim nec dui venenatis, id euismod justo condimentum. Cras ullamcorper aliquam fermentum.
          Pellentesque gravida nulla felis, id condimentum ante molestie eget. Nullam id urna a metus posuere fermentum at sit amet lectus.
          Maecenas id varius nunc, id commodo sapien. Nullam lacinia ullamcorper rhoncus.
          Nullam turpis magna, lobortis vel maximus vitae, luctus cursus est. Fusce egestas dui ac lacus venenatis, sed auctor odio condimentum.
          Aenean id sem id nibh faucibus iaculis vitae et erat. Nam blandit nec metus vel congue. Suspendisse dapibus arcu ac dolor auctor, id sollicitudin quam ornare.
        </article>
        <Link to='/shop'><button>Start Shopping</button></Link>
        <img src={dragonImg} alt="Mario from Super Smash Bros" />
        <img src={rdrImg} alt="Arthur Morgan from Red Dead Redemptio" />
      </main>
    </div>
  );
}