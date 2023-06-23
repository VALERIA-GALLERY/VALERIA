'use client'
import React from 'react'
import Image from 'next/image';
import app1 from '../../../../assets/logo.png'
import { BsFillPersonFill } from "react-icons/bs";
import { MdDashboard ,MdPayments ,MdDelete} from 'react-icons/md';
import { IoSettingsSharp ,IoEyeSharp } from 'react-icons/io5';
import { FaBan } from "react-icons/fa";

function page() {
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
        <a style={styles1.link} href="#"><MdPayments style={{ fontSize: "30px" }} />Balances</a>
        <hr style={styles1.hr} />
        <a style={styles1.link} href="#"><IoSettingsSharp style={{ fontSize: "30px" }} />Settings</a>
      </div>
<div>
    <h6>details profile</h6>
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
export default page