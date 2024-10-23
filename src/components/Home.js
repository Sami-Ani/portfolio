function Home() {
  return (
    <section className="home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>SAMUEL ASEFFA</span>
        </div>

        <div className="des"></div>
        <div className="avatar">
          tiam lacinia porta lacinia. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nam in suscipit metus,
          id scelerisque felis. Aliquam vulputate, purus nec luctus dictum, dui
          tortor facilisis nunc, et semper leo augue sed diam. In commodo in
          elit ac cursus. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Nulla faucibus nisl egestas pulvinar
          condimentum. Vivamus rutrum sapien velit, nec vehicula turpis vehicula
          eget. In pellentesque, ex sed vestibulum dignissim, magna turpis
          sodales augue, non vehicula metus tellus ut arcu.
        </div>
        <a href="./MyCV.pdf" target="_blank" rel="noopener noreferrer">
          Download My CV
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img style={{ width: "100px" }} src="../avatar.png" alt="" />
          <div className="info">
            <div>Developer</div>
            <div>Ethiopian</div>
            <div>03/12</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
