import "./aboutPage.scss";
import profileImg from "../../assests/profileImg.jpg"; // load the assest in the js module with webpack and return the path

function AboutPage(props) {
  return (
    <div className="about container">
      <h2 className="heading-1">About</h2>
      <p className="paragraph about__para">
        Aqua Go is a website that provide you tools to calculate many
        aquaculture parameters such as feed, oxygen and much more. Also, provide
        some articles and tutorials to help aquaculture engineers to take
        precise decisions. In the future we intend to add some more sections
        such as blogger and ERP system. The tool helps to develop this field and
        make the engineer's life easier by doing aquaculture tasks faster and
        safer.
      </p>
      <h2 className="heading-1">Development | author</h2>
      <div className="about__author">
        <img
          src={profileImg}
          alt="Kareem shousha"
          className="about__authorImg"
        />
        <p className="about__authorText paragraph">
          Hey, geeks! <br />I am Kareem shousha a front-end developer. My
          academic study is in fishers and aquaculture science. I loved the
          programming development area. so, I decided to direct my
          self-study there. I have developed this app for aquaculture engineers
          to make their lives easier.{" "}
        </p>
      </div>
      <h2 className="heading-1">Thanks to</h2>
      <p className="about__thankText paragraph">
         Saif Abdalla, Mohamed elsayed, Zaid sakr and Taha mohamed. <br />
         For their support and technical knowledge, they had provided.
        </p>
    </div>
  );
}

export default AboutPage;
