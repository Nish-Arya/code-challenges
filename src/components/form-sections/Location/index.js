import './Location.css';

const Location = () => {
  return (
    <div className="location-section">
      <div>Where will you purchase the fare?</div>
      <div className="location-radio-buttons">
        <div>
          <input type="radio" name="Station Kiosk" value="Station Kiosk" />
          <label htmlFor="Station Kiosk">Station Kiosk</label>
        </div>
        <div>
          <input type="radio" name="Onboard" value="Onboard" />
          <label htmlFor="Onboard">Onboard</label>
        </div>
      </div>
    </div>
  );
}

export default Location;