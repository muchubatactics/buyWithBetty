import '../styles/logo.css';
import PropTypes from 'prop-types';

export function Logo({children}) {
  return (
    <div className="logo">
      <span className='b' >buy</span>
      <span className='w' >with</span>
      <span className='by' >betty</span>
      {children}
    </div>
  );
}

export function AnimLogo() {
  return (
    <div className="anim">
      <Logo >
        <span className='f' >from</span>
      </Logo>
    </div>
  );
}

Logo.propTypes = {
  children: PropTypes.oneOfType(
    [
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]
  ),
}