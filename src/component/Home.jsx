import elipse from '../assets/ellipse 1.png'
import Line from './component/Line';
import Card from './component/Card';

// import LineCompWithBtn from './homeComponents/LineCompWithBtn';

const Home = () => {
    const lineItems = ["bi bi-grid", "bi bi-bell"]
    return (
        <div id="home">
            <div>
                <h3>overview</h3>
                <div className="row">

                    <div className="d-flex">
                        <div><img src={elipse} alt="" /></div>
                        <span>
                            <h2 className="text-capitalize">blaze | service main</h2>
                            <h4 className='text-uppercase'> rejected</h4>
                        </span>
                        <span className='text-small'>Created: 24/02/2019</span>
                    </div>
                </div>
            </div>
            <Line icon="bi bi-grid" contenu="Duis aute irure dolor in reprehenderit in voluptate velit esse
		  		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		  		proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "/>
            <Line
                icon="bi bi-bell"
                contenu='{<LineCompWithBtn />}' />
            <div>
                {/* CARD POUR MARIAMA */}
                <Card first={{
                    title: 'CLOUD DATABASE',
                    img: Tof2,
                    text: 'A cloud database is a basically a scalable content database running on a cloud computing platform that can be private, public, or hybrid.',
                    footer: 'UPGRADE ENTERPRISE'
                }} />
                <div className='col-md-4'><Card first={{
                    title: 'CLOUD DATABASE',
                    img: Tof,
                    text: <p class="card-text">Canned responses are used to answer the questions quickly, but not necessarily the lead to closing a sale. </p>,
                    footer: 'UPGRADE ENTERPRISE'
                }} />
                    <Card first={{
                        title: 'CLOUD DATABASE',
                        img: Tof3,
                        text: 'A cloud database is a basically a scalable content database running on a cloud computing platform that can be private, public, or hybrid.',
                        footer: 'UPGRADE ENTERPRISE'
                    }} />
                    
                </div>

            </div>
        </div>
    );
}

export default Home;