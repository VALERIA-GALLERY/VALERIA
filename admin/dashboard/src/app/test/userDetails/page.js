'use client'
import React,{useEffect} from 'react'
import Image from 'next/image';
import app1 from '../../../../assets/logo.png'
import { BsFillPersonFill } from "react-icons/bs";
import { MdDashboard ,MdPayments ,MdDelete} from 'react-icons/md';
import { IoSettingsSharp ,IoEyeSharp } from 'react-icons/io5';
import link from '../../../../link';
function page() {
   const users = [{
    username: "johnDoe123",
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    profilepic: "https://example.com/profile.jpg",
    premium: true,
    birthday: "1990-01-01",
  }
]
  // console.log(window.location.pathname.split("/")[1])
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


      <div style={stylesUser.contentContaine}>
        <div style={stylesUser.card}>
        <h6 style={stylesUser.cardTitle}>Details profile</h6>
        <img src={users.profilepic} alt={users.username} style={stylesUser.image}/>
        <p style={stylesUser.statistic}>Username: {users.username}</p>
        <p style={stylesUser.statistic}>First name: {users.firstname}</p>
        <p style={stylesUser.statistic}>Last name: {users.lastname}</p>
        <p style={stylesUser.statistic}>Email: {users.email}</p>
        <p style={stylesUser.statistic}>Premium: {users.premium ? "Yes" : "No"}</p>
        <p style={stylesUser.statistic}>Birthday: {users.birthday}</p>
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
    th:{
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
      marginLeft: '-65px',
  marginRight:'1250px'
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
  const stylesUser = {
    contentContainer: {
      // display: 'flex',
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
    //   marginTop: '110px',
    fontSize:'100%',
    // marginRight:'1950px'

    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      width: '300px',
        marginTop: '180px',
          marginRight:'850px'
  
    },
    cardTitle: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    statistic: {
      fontSize: '16px',
      margin: '5px 0',
      fontWeight: 'bold',
  
    },
    image: {
      width: '15vw',
      height: '15vh',
  
    },
  };
  
export default page