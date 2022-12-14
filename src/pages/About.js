const About = () => {
  return (
    <div className="about-section">
      <h1> About Rated Our&reg;</h1>

      <div className="project-details">
        <p className="about-blurb">
          Rated Our is the newest and hottest resource for trusted
          recommendations for top-tier entertainment. Fans and crtics are able
          to voice their opinions, reactions, and takeaways from films available
          on our ever-growing catalogue. If you’re an entertainment fan looking
          for a recommendation, or to share an opinion, you’ve come to the right
          place.
        </p>

        <div className="team">
          <h2>Meet the Team</h2>
          <p className="about-blurb" > Rated Our could not exist without the members of our team.
            This full-stack project has been developed by this talented team of developers.
            Clicking the link will redirect you to their own personal LinkedIn profiles.
            Do not be shy and give them a follow.
          </p>
          <div className="team-grid">
            <div className="member-info">
              <div className="pfp-container">
                <img className="pfp" src="https://i.imgur.com/wDlekDg.jpg" />
              </div>
              <h2>Alexander Ab</h2>
              <a href="https://www.linkedin.com/in/alexander-ab-831b01182/" target="_blank">
                LinkedIn |
              </a><a href="https://github.com/Arkeda221"> GitHub </a>
            </div>
            <div className="member-info">
              <div className="pfp-container">
                <img className="pfp" src="https://i.imgur.com/HmNNWxc.png" target="_blank" />
              </div>
              <h2>Austin Taylor</h2>
              <a href="https://www.linkedin.com/in/austinrt/" target="_blank">LinkedIn |
              </a><a href="https://www.github.com/austin-rt" target="_blank"> GitHub </a>
            </div>
            <div className="member-info">
              <div className="pfp-container">
                <img className="pfp" src="https://i.imgur.com/YI3J5Lz.png" />
              </div>
              <h2>Deonte LaBorde</h2>
              <a href="https://www.linkedin.com/in/deonte-laborde/" target="_blank">LinkedIn |
              </a><a href="https://www.github.com/deontelaborde" target="_blank"> GitHub </a>
            </div>
            <div className="member-info">
              <div className="pfp-container">
                <img className="pfp" src="https://i.imgur.com/KQlDdCq.png" />
              </div>
              <h2>Russell Ochoa</h2>
              <a href="https://www.linkedin.com/in/russell-ochoa-7a2a9516/" target="_blank">
                LinkedIn |
              </a><a href="https://github.com/russellgochoa" target="_blank"> GitHub </a>
            </div>
          </div>
        </div>

        <h2>How does Rated Our work?</h2>
        <p className="about-blurb">
          Rated Our is a full-stack web application built on the PERN Stack.
          PostgreSQL manages our database which stores all information about
          users, movies, as well as the user's reviews for movies. Express is
          the framework that will request CRUD operations using different routes
          to access information in our database. There are requests to create,
          update, delete users, access all movies and their details, and even
          access and alter reviews that the user posts. React is the library
          that grants users the ability to interact with the application.
          selecting components to navigate and explore all features of the
          application. Node.js is the engine that runs it all. With a server
          environment, Node.js runs the application making everything come
          together.
        </p>

        <h2>How to use Rated Our?</h2>
        <p className="about-blurb">
          At the homepage, users will see all movies available throughout the
          database. Clicking on a movie will display details on the movies as
          well as reviews from other users. Here at Rated Our, we recommend all
          users to sign up to fully utilize the full capabitilies of
          this application. With a personal account, the user can leave a rating and explain
          their reasoning, sharing their viewpoints and perspective. If the user changes their mind, that is okay.
          The user can update or delete their review. We’re all about debate and discussion at Rated Our, and want to know what our fans think.
          We trust that you will be able to enjoy what we have to offer and you have a place in this community to share your thoughts
        </p>
      </div>

    </div>
  );
};
export default About;
