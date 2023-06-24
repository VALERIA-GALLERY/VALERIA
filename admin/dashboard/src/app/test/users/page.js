'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import link from '../../../../link';
import Image from 'next/image';
import app1 from '../../../../assets/logo.png'
import { BsFillPersonFill } from "react-icons/bs";
import { MdDashboard, MdPayments, MdDelete } from 'react-icons/md';
import { IoSettingsSharp, IoEyeSharp } from 'react-icons/io5';
import { FaBan } from "react-icons/fa";


const Guerfal = () => {
  const [dataUser, setDataUser] = useState([])

  useEffect(() => {
    axios.get(`${link}/users/users`)
      .then((res) => {
        console.log(res.dataUser);
        setDataUser(res.data)
      }).catch((err) => console.log(err));
  }, [])

  const handleDelete = (id) => {
    axios.delete(`${link}/users/user/${id}`)
      .then((res) => {
        console.log(res.dataUser);
        setDataUser(res.data)
        console.log("deleted")
        window.location.reload();
      }).catch((err) => console.log(err));
  }

  const handleBan = (id) => {
    const updatedData = dataUser.map((user) => {
      if (user.id === id) {
        return { ...user, banned: !user.banned };
      }
      return user;
    });
    setDataUser(updatedData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.imageContainer}>
          <Image src={app1} style={styles.image} />
        </div>
        <div style={{ borderTop: "5px solid ", width: "100%", color: "#A4783F" }}></div>
      </div>


      <div style={styles1.sidebar}>
        {/* Sidebar content */}
        <a style={styles1.link} href="/test"> <MdDashboard style={{ fontSize: "30px" }} />Dashboard</a>
        <hr style={styles1.hr} />
        <a style={styles1.link} href="/test/users"> <BsFillPersonFill style={{ fontSize: "30px" }} /> Users</a>
        <hr style={styles1.hr} />
        <a style={styles1.link} href="/test/balances"><MdPayments style={{ fontSize: "30px" }} />Balances</a>
        <hr style={styles1.hr} />
        <a style={styles1.link} href="#"><IoSettingsSharp style={{ fontSize: "30px" }} />Settings</a>
      </div>




      <div id="aa" style={styles.container1}>
        <div>
          <h3 style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: '60px'
          }}>All users</h3>
          <table>
            <thead>
              <tr style={styles.th}>
                <th>Id</th>
                <th>Profile Pic</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Username</th>
                <th>Email</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataUser.map((users) => (
                <tr key={users.id} style={users.banned ? { textDecoration: 'line-through', color: 'red' } : {}}>
                  <td>{users.id} </td>
                  <td><img src={users.profilepic} alt={users.firstname + " " + users.lastname} style={{ height: '50px', width: '50px' }} /></td>
                  <td>{users.firstname}</td>
                  <td>{users.lastname}</td>
                  <td>{users.lastname}</td>
                  <td>{users.email}</td>
                  <td>
                    <MdDelete style={{ fontSize: "30px" }} onClick={() => handleDelete(users.id)} />
                  </td>
                  <td>
                    <FaBan style={{ fontSize: "30px" }} onClick={() => handleBan(users.id)} />

                  </td>
                  <td>
                    <td>
                      <Link href={`/test/userDetails/`}>
                        <IoEyeSharp style={{ fontSize: "30px" }} />
                      </Link>
                    </td>
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
    width: '15vw',
    height: '15vh',

  },
  imagesContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  th: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '25px'
  }
}
const styles1 = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    height: '85vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '50px',
    marginTop: '120px',
    marginLeft: '-365px'

  },
  link: {
    margin: '80px 0',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '25px'
  },
  hr: {
    width: '100%',
    borderColor: '#ddd',
    fontSize: '25px'

  },
}
export default Guerfal;