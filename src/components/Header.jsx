import './Header.css'

function Header() {
  return (
    <header className="header">
      <img className='header__logo' src="./images/logo.svg" width="24" height="24" alt="" />
      <h1 className="header__title">my travel journal.</h1>
    </header>
  )
}

export default Header