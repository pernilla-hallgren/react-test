import React from 'react';
import { Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NewUser = ({ id, name, job, createdAt }) => {
  // let { id } = useParams();

  // const [userData, setUserData] = useState([]);
        // [error, setError] = useState(null);

  // useEffect(() => {
    
  //   GET('users/id').then(response => {
  //     console.log(response);
  //     setUserData(response.data);
  //   })
  //   .catch(error => {
  //       console.log(error.response.data);
  //       // setError(error.response.data.error)
  //     })

  // }, []);

 

  // const setData = (data) => {
  //   const { name, job, id } = data;
  //   localStorage.setItem('name', name);
  //   localStorage.setItem('job', job);
  //   localStorage.setItem('id', id);
  // }

  // console.log(setData)

  const cardStyle = {
    background: '#5D6475',
    padding: '0.5rem', 
    margin: '15px', 
    borderRadius: '20px',
    boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)',
  }

  return (
    <>
      <Col key={id} className="justify-content-center text-center">
        <Card style={cardStyle}>
            <Card.Body style={{ background: '#5D6475' }}>
            <Card.Title style={{ marginTop: '10px', textTransform: 'uppercase', background: 'none' }}>Success!</Card.Title>
              <Link style={{ background: 'none'}} to={`/users/${id}/profile`}> 
                <button className="small-btn mx-auto">Go To Profile</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
    </>
  )
}

export default NewUser;



