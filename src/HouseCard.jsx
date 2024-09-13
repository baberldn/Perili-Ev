import React from 'react'

const HouseCard = ({ image, details, additionalInfo, index, total }) => {
    return (
        <div className="house-card" key={details.id}>
          <p>{total} / {index + 1}</p>
          <img src={image} alt="House" />
          <div>
            <ul>
              {Object.keys(details).map((key) => (
                <li key={key}>
                  <span>{key}:</span> {details[key]}
                </li>
              ))}
              {Object.keys(additionalInfo).map((key) => (
                <li key={key}>
                  <span>{key}:</span> {additionalInfo[key] ? "Evet" : "Hayır"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default HouseCard