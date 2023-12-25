const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ fontWeight: '700', fontSize: '45px', color: '#131313' }}>
        logo
      </div>
      <div>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Contact Us</a>
        <a href=''>Login</a>
      </div>
    </div>
  )
}

export default Header
