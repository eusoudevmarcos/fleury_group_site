import './Footer.css'

const quickLinks01 = [
    {
        path: '#',
        display: 'Marketing',
    },
    {
        path: '#',
        display: 'Analytics',
    },
    {
        path: '#',
        display: 'Commerce',
    },
];

const quickLinks02 = [
    {
        path: '#',
        display: 'Pricing',
    },
    {
        path: '#',
        display: 'Documentation',
    },
    {
        path: '#',
        display: 'Guides',
    },
];

const quickLinks03 = [
    {
        path: '#about',
        display: 'About',
    },
    {
        path: '#services',
        display: 'Services',
    },
    {
        path: '#blog',
        display: 'Blog',
    },
]

const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <h2>Fleury Group</h2>
                    <p className='description'>Grow with us</p>

                    <p className="small__text description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, voluptatem. Quod possimus exercitationem, beatae fugit totam accusantium dolor eveniet qui!</p>
                </div>

                <div className="footer__quick-links">
                    <h3 className="quick__links-title">Solutions</h3>
                    <ul className='quick__links'>
                        {quickLinks01.map((item,index) => (
                            <li className='quick__link-item' key={index}>
                                <a href={item.path}>{item.display}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__quick-links">
                    <h3 className="quick__links-title">Support</h3>
                    <ul className='quick__links'>
                        {quickLinks02.map((item,index) => (
                            <li className='quick__link-item' key={index}>
                                <a href={item.path}>{item.display}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__quick-links">
                    <h3 className="quick__links-title">Company</h3>
                    <ul className='quick__links'>
                        {quickLinks03.map((item,index) => (
                            <li className='quick__link-item' key={index}>
                                <a href={item.path}>{item.display}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="copyright">Copyright {year}, developed by StarLab Tech. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer