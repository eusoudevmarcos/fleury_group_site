
import '../styles/Blog.css'

import videoImg from '../imagens/video.png'
import articleImg from '../imagens/article.png'
import caseStudy from '../imagens/case-study.png'

const blogData = [
  {
    imgUrl: videoImg,
    title: 'Video',
    desc: 'To know about work. Watch some video for more....',
    linkUrl: '#'
  },
  {
    imgUrl: articleImg,
    title: 'Articles',
    desc: 'Do you want to improve the way your brand interacts with customer? Lets talk....',
    linkUrl: '#'
  },
  {
    imgUrl: caseStudy,
    title: 'Case Study',
    desc: 'Boost your conversation rate with us....',
    linkUrl: '#'
  },
]

const Blog = () => {
  return (
    <section id='blog' className='blog'>
      <div className="container">
        <div className="blog__top-content">
          <h6 className='subtitle'>Our Blog</h6>
          <h2>Let's have a look form our<span className="highlight"> recent Blog</span></h2>
        </div>

        <div className="blog__wrapper">
          {
            blogData.map((item,index) => (
              <div className="blog__item" key={index}>
            <h3>{item.title}</h3>
            <div className="blog__img">
              <img src={item.imgUrl} alt="" />
            </div>
            <p className="description">
                {item.desc}
            </p>
            <div className="learn__more">
              <a href={item.linkUrl} className="learn__more">
                <i class='ri-arrow-right-line'></i>
              </a>              
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog