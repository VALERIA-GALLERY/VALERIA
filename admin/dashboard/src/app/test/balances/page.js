import React from 'react';
import app1 from '../../../../assets/logo.png';
import img1 from '../../../../assets/prem1.jpg';
import img2 from '../../../../assets/prem2.jpg';
import Image from 'next/image';
import { BsFillPersonFill } from "react-icons/bs";
import { MdDashboard, MdPayments, MdDelete } from 'react-icons/md';
import { IoSettingsSharp, IoEyeSharp } from 'react-icons/io5';
import { FaBan } from "react-icons/fa";


function Page() {
  return (
    <div style={styles.container}>
         
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
        
      <div style={styles.header}>
        <div style={styles.imageContainer}>
          <Image src={app1} style={styles.image} />
        </div>
        <div style={{ borderTop: "5px solid", width: "100%", color: "#A4783F" }}></div>
      </div>

      <div style={styles.imagesContainer}>
        <Image src={img1} />
        <Image src={img2} />
      </div>
    </div>
  );
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
  header: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '-1240px',
  },
  imageContainer: {
    width: '15vw',
    height: '15vh',
  },
  imagesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid black',
    padding: '10px',
  },
  image: {
    width: '100%',
    height: '100%',
  },
};
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
      marginLeft: '-25px'
  
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
export default Page;
