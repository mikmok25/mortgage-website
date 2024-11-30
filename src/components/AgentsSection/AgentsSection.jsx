import React from 'react'
import './AgentsSection.scss'
import AgentsIcon from '../../assets/AgentsIcon.png'
import Agent1 from '../../assets/Agent1.png'
import Agent2 from '../../assets/Agent2.png'
import Agent3 from '../../assets/Agent3.png'
import Agent4 from '../../assets/Agent4.png'

function AgentsSection() {
  return (
    <div className='container'>
        <div className="flex-column">
            <img src={AgentsIcon} alt="Agents Icon" />
            <h2>Meet Our Agents</h2>
        </div>

        <div className="agents">
            <div className="agent agent-1">
                <div className="image-container">
                    <img src={Agent1} alt="" />
                    <div className="info-container">
                        <h5>Dalston Spencer</h5>
                        <p>Mortgage Broker</p>
                </div>
                </div>

                
            </div>
            <div className="agent agent-2">
                <div className="image-container">
                    <img src={Agent2} alt="" />
                    <div className="info-container">
                        <h5>John Jameer</h5>
                        <p>Mortgage Agent</p>
                </div>
                </div>

                
            </div>
            <div className="agent agent-3">
                <div className="image-container">
                    <img src={Agent3} alt="" />
                    <div className="info-container">
                        <h5>James Moorthy</h5>
                        <p>Mortgage Agent</p>
                </div>
                </div>

                
            </div>

            <div className="agent agent-4">
                <div className="image-container">
                    <img src={Agent4} alt="" />
                    <div className="info-container">
                        <h5>Hiring Agents</h5>
                        <p>Apply Now!</p>
                </div>
                </div>

                
            </div>
        </div>
      
    </div>
  )
}

export default AgentsSection
