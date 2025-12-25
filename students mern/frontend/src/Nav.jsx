import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <Link to="/">search</Link>
        <Link to="/add">add std data</Link>
        <Link to="/disp">Disp</Link>
    </div>
  )
}

export default Nav