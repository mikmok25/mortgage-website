import React, { useState } from "react";
import "./AgentsSection.scss";
import AgentsIcon from "../../assets/AgentsIcon.png";
import PhoneIcon from "../../assets/PhoneIcon.png";
import EmailIcon from "../../assets/EmailIcon.png";
import ArrowIcon from "../../assets/ArrowIcon.png";
import agents from "./agents";

function AgentsSection() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  console.log(selectedAgent);

  return (
    <div className="container">
      <div className="flex-column">
        <img src={AgentsIcon} alt="Agents Icon" />
        <h2>Meet Our Agents</h2>
      </div>

      {selectedAgent ? (
        // Show selected agent details
        <div className="selected-agent">
          <div className="flex-row">
                <div className="flex-col">
                    <div className="agent-image">
                      <img src={selectedAgent.image} alt={selectedAgent.name} />
                    </div>
                    <div className="view-agents">
                        <img src={ArrowIcon} alt="arrow-icon" />
                        <a onClick={() => setSelectedAgent(null)}>View Agents</a></div>
                </div>

            <div className="agent-info">
              <div className="agent-name-title">
                <h3>{selectedAgent.name}</h3>
                <span>{selectedAgent.title}</span>
              </div>
              <div className="agent-description">{selectedAgent.content}</div>
              <div className="agent-contact">
                <div className="phone">
                  <img src={PhoneIcon} alt="telephone-icon" />
                  {selectedAgent.phoneNumber}
                </div>
                <div className="email">
                  <img src={EmailIcon} alt="email-icon" />
                  {selectedAgent.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Show list of agents if no agent is selected
        <div className="agents">
          {agents.map((agent, index) => (
            <div
              className="agent"
              key={index}
              onClick={() => {
                setSelectedAgent(agent);
              }}
            >
              <div className="image-container">
                <img src={agent.image} alt={`Agent-${index + 1}`} />
                <div className="info-container">
                  <h5>{agent.name}</h5>
                  <p>{agent.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AgentsSection;
