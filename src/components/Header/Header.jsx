
import './Header.css'

const nav__links =[
  {
    path:'#home',
    display:'Home'
  },

  {
    path:'#about',
    display:'About'
  },

  {
    path:'#services',
    display:'Services'
  },

  {
    path:'#pricing',
    display:'Princing'
  },

  {
    path:'#contact',
    display:'Contato'
  },
]


const Header = ({theme, toggleTheme}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Fleury Group</h2>
          </div>

          {/* ========= navigation ========= */}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                  <li className="menu__item" key={index}>
                    <a href={item.path} className="menu__link">
                      {item.display}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* ===== light mode ===== */}
          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === 'light-theme' ? (
                <span>
                  <i class='ri-moon-line'></i>Dark
                </span>
              ) : (
                <span>
                  <i class="ri-sun-line"></i> Light
                </span>
              )}                
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header