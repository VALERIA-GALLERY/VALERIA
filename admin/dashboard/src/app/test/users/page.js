'use client'
import React from 'react'
// import {Col, Row, User, Text, Tooltip} from '@nextui-org/react';
import Image from 'next/image';
import app1 from '../../../../assets/logo.png'
// import {EditIcon} from '../icons/table/edit-icon';
// import {EyeIcon} from '../icons/table/eye-icon';
// import {users} from './data';
// import {IconButton, StyledBadge} from './table.styled';

 const Guerfal = () => {
  const users = [
    { id: 1, firstname: "John", lastname: "Doe", email: "john@example.com" },
    { id: 2, firstname: "Jane", lastname: "Doe", email: "jane@example.com" }
    // add more users here
  ];
  return (
    <div style={styles.container}>
    <div style={styles.header}>
        <div style={styles.imageContainer}>
          <Image src={app1} style={styles.image} />
        </div>
        <div style={{ borderTop: "5px solid ", width: "100%", color: "#A4783F" }}></div>
      </div>
      <div id="aa" style={styles.container1}>
      <div>
        <h3 style={{ 
            color: 'black',
    fontWeight: 'bold',
    fontSize: '50px'}}>All users</h3>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <button style={{backgroundColor: "red", color:"white"  , borderRadius: '10px'}} >Delete</button>
                </td>
                <td>
                  <button style={{backgroundColor: "red", color:"white",    borderRadius: '10px'}} >Ban user</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <style jsx>{`
          #aa{
            margin-top: 100px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }

          th, td {
            text-align: left;
            padding: 8px;
          }

          th {
            background-color: #f2f2f2;
          }

          tr:nth-child(even) {
            background-color: #f9f9f9;
          }
        `}</style>
      </div>
    </div>




      
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f0ede4',
    width: '100vw',
    height: '100vh',
    padding: '50px',
  },
  container1: {
    justifyContent: 'space-between',
    width: '120vw',
    height: '120vh',
    padding: '50px',
    marginTop: '140px'

  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '-1240px'

  },
  image: {
    width: '30vw',
    height: '30vh',

  },
  imagesContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
}
export default Guerfal;