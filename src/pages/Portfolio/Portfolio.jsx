import image1 from '../../assets/img/for-faruk.jpg';
import image2 from '../../assets/img/for-faruk-mockup2.jpg';
import image3 from '../../assets/img/quickbite.png';

const Portfolio = () => {
    return (
        <div className="my-8">
            <h2 className="text-2xl text-center text-white mb-12">My Project Wrk</h2>
            <div className='space-y-12'>
                <div className="w-1/2 mx-auto border-4 border-white">
                    <a href="https://quick-bites-tau.vercel.app"><img src={image3} alt="" /></a>
                </div>
                <div className="w-1/2 mx-auto border-4 border-white">
                    <a href="https://techtreasure12-8bdab.web.app"><img src={image2} alt="" /></a>
                </div>
                <div className="w-1/2 mx-auto border-4 border-white">
                    <a href="https://radiant-reverie.web.app"><img src={image1} alt="" /></a>
                </div>

            </div>


        </div>
    );
};

export default Portfolio;