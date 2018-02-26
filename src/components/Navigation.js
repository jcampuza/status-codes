import { h } from 'hyperapp';
import { Link } from '@hyperapp/router';

const styles = {
  title: {
    margin: 0
  },
  header: {
    alignItems: 'center',
    background: '#16d67f',
    color: '#ECF0F1',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    padding: '1rem',
  },
  ul: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLinks: {
    margin: '1rem'
  }
}

const NavLink = ({ to }, children) => 
  <Link style={styles.navLinks} to={to}>{children}</Link>

const Navigation = () => (
  <header style={styles.header}>
    <h2 style={styles.title}>Status Codes</h2>
    <nav>
        <ul style={styles.ul}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/browse">Browse</NavLink>
            </li>
            <li>
                <NavLink to="/guess">Guess</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    </nav>
  </header>
)

export default Navigation