
const Logo = ({ width, height, className, ...rest }) => {
  return (
    <>
      <picture className={`picture ${className}`} {...rest}>
        <source srcSet='/static/images/logo/webp/logo.webp 600w, /static/images/logo/webp/logo@2x.webp 960w, /static/images/logo/webp/logo@3x.webp 1280w' type='image/webp' />
        <source srcSet='/static/images/logo/png/logo.png 600w, /static/images/logo/png/logo@2x.png 960w, /static/images/logo/png/logo@3x.png 1280w' type='image/png' />
        <img
          className='img'
          width='100%'
          src='/static/images/placeholder.gif'
          alt='three cicles in green' />
      </picture>
      <style jsx>{`
        .picture {
          display: flex;
        }
        .img {
          border-radius: 50%;
          width: ${width};
          height: ${height || 'auto'};
        }
      `}</style>
    </>
  );
};

export default Logo;
