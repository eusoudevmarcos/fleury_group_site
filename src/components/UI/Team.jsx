import '../styles/Team.css'

import team01 from '../imagens/team-01.png'
import team02 from '../imagens/team-02.png'
import team03 from '../imagens/team-02.png'
import team04 from '../imagens/team-03.png'


const teamMember = [
    {
        imgUrl: team01,
        name:'Marcos Carvalho',
        position: 'Product Developer'
    },
    {
        imgUrl: team02,
        name:'Cinthia Fleury',
        position: 'CEO & Recruiter Management'
    },
    {
        imgUrl: team03,
        name:'Nicole Fleury',
        position: 'Tech Recruiter'
    },
    {
        imgUrl: team04,
        name:'Eric Fleury',
        position: 'Developer FullStack & Design'
    },
]

const Team = () => {
  return (
    <section className='our__team'>
        <div className="container">
            <div className="team__content">
                <h6 className='subtitle'>Our Team</h6>
                <h2 className=''>Meet with
                    <span className='highlight'> our team</span>
                </h2>
            </div>

            <div className="team__wrapper">
                {
                    teamMember.map((item,index)=>(
                        <div className="team__item" key={index}>
                    <div className="team__img">
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <div className="team__details">
                        <h4>{item.name}</h4>
                        <p className='description'>{item.position}</p>

                        <div className="team__member-social">
                            <span><i class='ri-linkedin-line'></i></span>
                            <span><i class="ri-instagram-line"></i></span>
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Team