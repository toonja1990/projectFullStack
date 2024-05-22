import skill from '../assests/img/skills.png'; // Tell webpack this JS file uses this image
//JSX Code
function Skill() {
    return  (
    
    <section id="skills" className="skills section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row">

          <div className="col-lg-6 d-flex align-items-center">
            <img src={skill} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 content">

            <h3>Skills</h3>
            <p className="fst-italic">
              ความรู้ที่ได้รับในครั้งนี้ มีมากมายหลายอย่าง ผมขอยกตัวอย่างบางสิ่งตามตารางด้านล่างครับ(ปล.หลอดพลังมันไม่ขึ้นนะครับ)
            </p>

            <div className="skills-content skills-animation">

              <div className="progress">
                <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>Database</span> <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
    
);
}
export default Skill;