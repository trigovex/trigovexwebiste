import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css'; // Assuming you create a separate CSS file for styling

const Timeline = () => {
    return (
        <div className="container my-5">
            {/* Title Section */}
            <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600', paddingBottom: '50px' }}>
    Our Software Approach To Clients
</h1>

            <div className="row">
                {/* Timeline Section */}
                <div className="col-md-5">
                    <div className="timeline">
                        {/* Breaking Barriers Section */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title">Breaking Barriers</h5>
                            <p><img src="https://adya.ai/assets/Check-0de30ea4.svg" alt="Check" /> Let's tear down those entry barriers, leveling the playing field for sellers.</p>
                            <p><img src="https://adya.ai/assets/Check-0de30ea4.svg" alt="Check" /> Say goodbye to corporate monopolies, ONDC is all about fair play.</p>
                        </div>
                        {/* Nurturing Fair Commerce Section */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title">Nurturing Fair Commerce</h5>
                            <p><img src="https://adya.ai/assets/Check-0de30ea4.svg" alt="Check" /> Picture a world where commerce is equitable, where every business, big or small, has a chance.</p>
                            <p><img src="https://adya.ai/assets/Check-0de30ea4.svg" alt="Check" /> ONDC is here to foster fairness in digital markets.</p>
                        </div>
                        {/* Choice and Inclusivity Section */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title">Choice and Inclusivity</h5>
                            <p><img src="https://adya.ai/assets/Check-0de30ea4.svg" alt="Check" /> Embrace a world where shoppers revel in a wealth of choice.</p>
                            <p><img src="https://adya.ai/assets/Check-0de30ea4.svg" alt="Check" /> ONDC's inclusive approach brings new domains and industries into the digital commerce fold.</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="col-md-7 text-center">
                    <img src="https://cdn.dribbble.com/users/8775467/screenshots/16220709/finance_app_light_mode_presentation_4x.png" alt="ONDC Image" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
