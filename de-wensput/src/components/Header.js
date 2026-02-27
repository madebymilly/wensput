const Header = ({ current, total, showProgress = false }) => {
  return (
    <header className="header">
        {/* <div className="logo"><img src="/images/logo.svg" alt="logo"/></div> */}
        {showProgress && <p className="progress">
        Vraag {current} van {total}
        </p>}
      </header>
  )
}

export default Header;
