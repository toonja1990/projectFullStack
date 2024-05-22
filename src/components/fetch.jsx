import member1 from '../assests/img/team/team-1.jpg'; // Tell webpack this JS file uses this image
import { useState, useEffect } from 'react';
import Card from './Card';
const Fetch = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/query-1')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
       // console.log(data[0]);
        setPhotos(data[0]);
        console.log(photos[0]);
      });
  }, []);
  return (

    
    <div>
        
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          
      {photos.map((photo) => (
      
      <tr>
      <td>{photo.id}</td>
      <td>{photo.name}</td>
      <td>{photo.age}</td>
      <td>{photo.phone}</td>
      <td>{photo.email}</td>

  </tr>


      
      ))}
      </tbody>
       </table>
      

    </div>
  );
};
export default Fetch;