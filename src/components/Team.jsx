import member1 from '../assests/img/team/team-1.jpg'; // Tell webpack this JS file uses this image
import member2 from '../assests/img/team/team-2.jpg'; // Tell webpack this JS file uses this image
import member3 from '../assests/img/team/team-3.jpg'; // Tell webpack this JS file uses this image
import member4 from '../assests/img/team/team-4.jpg'; // Tell webpack this JS file uses this image
import Card from './Card';
//JSX Code
function Profile() {
  console.log("profile");
  return (
    <div className="row gy-4"> 
    <Card
        info={{ 
          name: 'Walter White',
          position: 'Chief Executive Officer',
          description:'Explicabo voluptatem mollitia et repellat qui dolorum quasi'
        }}
        imgSrc={member1}
        displayPosition={100}
      />
      <Card
        info={{ 
          name: 'Sarah Jhonson',
          position: 'Product Manager',
          description:'Aut maiores voluptates amet et quis praesentium qui senda para'
        }}
        imgSrc={member2}
        displayPosition={200}
      />
<Card
        info={{ 
          name: 'William Anderson',
          position: 'CTO',
          description:'Quisquam facilis cum velit laborum corrupti fuga rerum quia'
        }}
        imgSrc={member3}
        displayPosition={300}
      />
<Card
        info={{ 
          name: 'Amanda Jepson',
          position: 'Accountant',
          description:'Dolorum tempora officiis odit laborum officiis et et accusamus'
        }}
        imgSrc={member4}
        displayPosition={400}
      />
      </div>

  );
}

function Team() {
    return(
<section id="team" className="team section">

    
<div className="container section-title" data-aos="fade-up">
  <h2>Team</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<div className="container">

 

   <Profile />

 

</div>
</section>
    );
}
export default Team;