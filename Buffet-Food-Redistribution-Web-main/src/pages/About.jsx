// import React from 'react';
// import AboutChef1 from '../utils/img/about-chef1.webp';
// import AboutChef2 from '../utils/img/about-chef2.jpg';
// import backgroundImage from '../utils/img/contact-page-img.jpg';

// function About() {
//     return (
//         <div className='about-page'>
//            <header className='mt-5 d-flex justify-content-center align-items-center'
//                     style={{
//                         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
//                         height: '50vh',
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         backgroundRepeat: 'no-repeat'
//                     }}>
//                 <h1 className='text-light'>About</h1>
//             </header>

//             <div className='container my-5'>
//                 <p>
//                     At FoodShare Network, we are dedicated to combating food waste and hunger through our innovative food redistribution system. Founded on the belief that no edible food should go to waste while people in our communities are going hungry, we have been working tirelessly to create a more sustainable and equitable food system.
//                 </p>
//                 <p>Through our efforts, we not only reduce food waste and alleviate hunger but also foster a sense of community and solidarity. We believe that everyone deserves access to nutritious food, regardless of their circumstances, and we are proud to play a role in making this vision a reality.

//                     Join us in our mission to create a world where no one goes hungry and where surplus food serves a greater purpose. Together, we can make a difference, one meal at a time.
//                 </p>

//                 {/* <div className='row'>
//                     <div className='col-lg-6'>
//                         <img src={AboutChef1} className='img-fluid my-4' alt="" />
//                     </div>
//                     <div className='col-lg-6'>
//                         <img src={AboutChef2} className='img-fluid my-4' alt="" />
//                     </div>
//                 </div> */}
               
//                <div className='container my-5'>
//                     <div className='row'>
//                         <div className='col-lg-6 mb-4'>
//                             <div className='card'>
//                                 <img src={AboutChef1} className='card-img-top img-fluid' alt="" />
//                                 <div className='card-body'>
//                                     <p className='card-text text-center'>"Feeding the hungry is a powerful way to show love." — Unknown</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-lg-6 mb-4'>
//                             <div className='card'>
//                                 <img src={AboutChef2} className='card-img-top img-fluid' alt="" />
//                                 <div className='card-body'>
//                                     <p className='card-text text-center'>"No one has ever become poor by giving." — Anne Frank</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//                 <p className="text-center pb-5">
//                     <strong>  FoodShare Network - Fighting Hunger, Reducing Waste, Building Community.</strong>
//                 </p>

//             </div>
//                 <br>
//                 </br>
//         </div>
//     )
// }

// export default About;

import React from 'react';
import AboutChef1 from '../utils/img/about-chef1.webp';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import backgroundImage from '../utils/img/contact-page-img.jpg';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5 d-flex justify-content-center align-items-center'
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                        height: '50vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                <h1 className='text-light'>About</h1>
            </header>

            <div className='container my-5'>
                <p>
                    At FoodShare Network, we are dedicated to combating food waste and hunger through our innovative food redistribution system. Founded on the belief that no edible food should go to waste while people in our communities are going hungry, we have been working tirelessly to create a more sustainable and equitable food system.
                </p>
                <p>
                    Through our efforts, we not only reduce food waste and alleviate hunger but also foster a sense of community and solidarity. We believe that everyone deserves access to nutritious food, regardless of their circumstances, and we are proud to play a role in making this vision a reality.
                    Join us in our mission to create a world where no one goes hungry and where surplus food serves a greater purpose. Together, we can make a difference, one meal at a time.
                </p>

                <div className='row my-5'>
                    <div className='col-lg-6 mb-4'>
                        <div className='card'>
                            <img src={AboutChef1} className='card-img-top img-fluid' alt="Chef 1" />
                            <div className='card-body'>
                                <p className='card-text text-center'>
                                    "Feeding the hungry is a powerful way to show love." — Unknown
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mb-4'>
                        <div className='card'>
                            <img src={AboutChef2} className='card-img-top img-fluid' alt="Chef 2" />
                            <div className='card-body'>
                                <p className='card-text text-center'>
                                    "No one has ever become poor by giving." — Anne Frank
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center pb-5">
                    <strong>FoodShare Network - Fighting Hunger, Reducing Waste, Building Community.</strong>
                </p>
            </div>
        </div>
    );
}

export default About;
