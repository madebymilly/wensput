const Header = ({ current, total, showProgress = false }) => {
  return (
    <header className="header">
        <div class="logo"><img src="/images/logo.svg" alt="logo"/></div>
        {showProgress && <p class="progress">
        Vraag {current} van {total}
        </p>}
      </header>
  )
}

export default Header;
