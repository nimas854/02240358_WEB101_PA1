const SlamAwards = () => {
    return (
      <section className="slam-awards">
        <div className="awards-banner">
          <div className="vote-now">
            <h2>VOTE NOW</h2>
          </div>
          <div className="awards-content">
            <div className="awards-logo">
              <img src="/placeholder.svg?height=80&width=80" alt="Slammy Awards" />
            </div>
            <div className="awards-info">
              <h2>The 2025 Slammys: The Fans Choice Awards</h2>
            </div>
            <div className="awards-action">
              <button className="awards-button">Make Your Selections →</button>
            </div>
          </div>
          <button className="close-button">×</button>
        </div>
      </section>
    )
  }
  
  export default SlamAwards
  
  