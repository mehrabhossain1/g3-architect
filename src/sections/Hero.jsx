/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: '64px',
          color: '#131313',
        }}
      >
        Brand New Group of Architects
      </h2>
      <p
        style={{
          textAlign: 'center',
          color: '#727272',
          fontWeight: '400',
          fontSize: '16px',
        }}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even
      </p>
      <button
        style={{
          color: '#FFFFFF',
          background: '#FF900E',
          fontWeight: '600',
          fontSize: '20px',
          padding: '20px 25px',
          border: 'none',
          borderRadius: '8px',
        }}
      >
        Explore More
      </button>
      <img src='../../images/banner.png' alt='' />
    </div>
  )
}

export default Hero
