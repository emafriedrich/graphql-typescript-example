import Logo from './logo';
import Headlines from './headlines';

function Header() {
  return (
    <header id="header">
      <div id="header-wrap">

        <div className="container clearfix">

          <div id="primary-menu-trigger"><i className="icon-reorder" style={{ color: '#525975' }}></i></div>

          <div className="market-header clearfix">
            <Logo />
            <Headlines />
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;