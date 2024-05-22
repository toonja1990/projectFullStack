//JSX Code
function About() {
    return <div>
<section id="about" className="about section">

  <div className="container section-title" data-aos="fade-up">
    <h2 className="">About Us</h2>
  </div>

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
        <p>
          หน้าเว็บนี้ เป็น Mini Project ส่งอาจารย์ในวิชา Basic fullStack Development 2024 ระยะเวลาในการเรียนทั้งหมด 4 สัปดาห์ เรียนทุกวันพฤหัส(Online) และวันศุกร์(Onsite) Project นี้ได้ใช้เครื่องมือดังต่อไปนี้
        </p>
        <ul>
          <li><i className="bi bi-check2-circle"></i> <span>Web template ที่ชื่อว่า Arsha จากออนไลน์นำมาแก้ไขให้เข้ากับ Format ของ React.JS</span></li>
          <li><i className="bi bi-check2-circle"></i> <span>Backend จากการบ้านข้อ 3.1 นำมาปรับปรุงเพิ่ม API อีก 2 คำสั่งและ Table ไว้เก็บค่าอีก 2 Table</span></li>
          <li><i className="bi bi-check2-circle"></i> <span>เครื่องมือที่ใช้ในการพัฒนาได้แก่ Visual Studio code, Postman, Xampp</span></li>
        </ul>
      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <p>งานชิ้นนี้ไม่ได้ก็อบปี้ทุกอย่างจาก Templat มาใช้ทั้งหมดแต่เลือกมาเฉพาะแค่บางเท่านั้น มีการปรับ Content บางอย่างให้เหมาะสมกับสิ่งที่อาจารย์สอนมากยิ่งขึ้น เช่นการ แยก Component การ Reuse component(การสร้างการ์ด) </p>
        <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
      </div>

    </div>

  </div>

</section></div> 
};
export default About;