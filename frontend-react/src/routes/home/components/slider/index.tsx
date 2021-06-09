function Slider() {
  return (
    <section id="slider" className="slider-element clearfix" style={{
      height: '500px',
      background: "url('/demos/ethernal-promises/images/hero-image.jpg') bottom center no-repeat",
      backgroundSize: 'cover'
    }}>
      <div className="vertical-middle">
        <div className="container clearfix">
          <div className="clearfix center divcenter" style={{ maxWidth: '700px' }}>
            <img src="/images/logo-wh.svg" style={{ width: '400px', maxWidth: '100%' }} alt="logo"/>
            <div className="emphasis-title">
              <p style={{ fontWeight: 300, color: '#FFF', textShadow: '0 -4px 20px rgba(0, 0, 0, .25)' }}>... Por medio de las cuales nos han dado preciosas y grandísimas promesas, para que por ella llegaseis a ser participantes de la naturaleza divina</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Slider;