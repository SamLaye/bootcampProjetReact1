import elipse from '../assets/ellipse 1.png'
import Card from './card'
import Tof1 from '../assets/tof1.jpg'
import Tof2 from '../assets/tof2.jpg'
import Tof3 from '../assets/tof3.jpg'
import Line from './Line'


// import LineCompWithBtn from './homeComponents/LineCompWithBtn';

const Home = () => {
    return (
        <div id="home">
            <div>
                <h3>overview</h3>
                <div className="row">

                    <div className="d-flex">
                        <div><img src={elipse} alt="" /></div>
                        <div className='mx-3'>
                            <h2 className="text-capitalize fs-5">blaze | service main</h2>
                            <span className='text-muted p-0'>Created: 24/02/2019</span>
                        </div>
                        <div>
                            <h4 className='text-uppercase fs-5'> rejected</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-2" id='line'>
                <Line 
                    colorIcone= "bgLineIcon1"
                    icon="bi bi-grid"
                    contenu="Duis aute irure dolor in reprehenderit in voluptate velit esse
		  		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		  		proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "/>
                <Line
                    colorIcone= "bgLineIcon2"
                    icon="bi bi-pencil-fill"
                    contenu='{<LineCompWithBtn />}' />
            </div>
            <div className='container'>
                <div className='row'>
                    {/* CARD POUR MARIAMA */}
                    <Card first={{
                        title: '7/24 LIVE HELP',
                        img: Tof1,
                        text: <div>
                                <p class="card-text fs-6">Canned responses are used to answer the questions quickly, but not necessarily the lead to closing a sale. </p>
                                <p class="card-text fs-6">
                                Faster response 
                                <br />Right tone of language
                                <br />Consistency in brand experience
                                </p>
                            </div>,
                        footer: 'UPGRADE ENTERPRISE'
                    }} />
                    <Card first={{
                        title: 'CLOUD DATABASE',
                        img: Tof2,
                        text: 'A cloud database is a basically a scalable content database running on a cloud computing platform that can be private, public, or hybrid.',
                        footer: 'UPGRADE ENTERPRISE'
                    }} />
                    <Card first={{
                        title: 'ENTERPRISE ACCOUNT',
                        img: Tof3,
                        text: "Enterprise solutions are designed to integrate multiple facets of a company's business through the interchange of information from various business process ...",
                        footer: 'UPGRADE ENTERPRISE'
                    }} />
                </div>

            </div>
        </div>
    );
}

export default Home;