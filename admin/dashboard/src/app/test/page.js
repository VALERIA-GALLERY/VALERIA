"use client"
import React ,{useEffect,useState}from 'react';
import axios from 'axios';
import { BsFillPersonFill } from "react-icons/bs";
import { MdDashboard ,MdPayments} from 'react-icons/md';
import { IoSettingsSharp  } from 'react-icons/io5';


import Image from 'next/image';
import app1 from '../../../assets/logo.png'
import comments from '../../../assets/comments.jpg'
import likes from '../../../assets/likes.jpg'
import follow from '../../../assets/follows.jpg'
import act from '../../../assets/BlueModern .jpg'
import link from '../../../link';

export default function Test() {
  const [like,setLike]=useState([])
  const [com,setCom]=useState([])

  useEffect(()=>{
    axios.get(`${link}/post/likes`)
.then((res)=>{
  console.log(res.like);
  setLike(res.data)
}).catch((err) => console.log(err));
  },[])

  useEffect(()=>{
    axios.get(`${link}/post/comment`)
.then((res)=>{
  console.log(res.com);
  setCom(res.data)
}).catch((err) => console.log(err));
  },[])
  return (
    
    <div style={styles.container}>
      {/* Header content */}

      <div style={styles.header}>
        <div style={styles.imageContainer}>
          <Image src={app1} style={styles.image} />
        </div>
        <div style={{ borderTop: "5px solid ", width: "100%", color: "#A4783F" }}></div>
      </div>


      <div style={styles1.sidebar}>
        {/* Sidebar content */}
        <a style={styles1.link} href="#"> <MdDashboard style={{ fontSize: "30px" }} />Dashboard</a>
        <hr style={styles1.hr} />
        <a style={styles1.link} href="/test/users"> <BsFillPersonFill style={{ fontSize: "30px" }} /> Users</a>
        <hr style={styles1.hr} />
        <a style={styles1.link} href="#"><MdPayments style={{ fontSize: "30px" }} />Balances</a>
        <hr style={styles1.hr} />
        <a style={styles1.link} href="#"><IoSettingsSharp style={{ fontSize: "30px" }} />Settings</a>
      </div>

     

      <div style={styles4.contentContainer}>
        
      <div style={styles2.contentContainer}>
          {/* Card content */}
        <div style={styles4.card}>
          <h3 style={styles4.cardTitle}>Likes </h3>
          <p style={styles4.statistic}>Total Likes: {like.length}</p>
          <p style={styles4.statistic}>Artist Users: {like.length-6} </p>
          <Image src={likes}  /> 

        </div>
        </div>


        <div style={styles2.contentContainer}>
          <div style={styles3.card}>
            <h3 style={styles3.cardTitle}>Comments </h3>
            <p style={styles3.statistic}>Total Comments: {com.length}</p>
            <p style={styles3.statistic}>Artist Users: {com.length}</p>
            <Image src={comments}  /> 
          </div>
        </div>

        <div style={styles2.contentContainer}>
          <div style={styles3.card}>
            <h3 style={styles3.cardTitle}>Follows </h3>
            {/* <p style={styles3.statistic}>Total Users: {totalUsers}</p> */}
            <p style={styles3.statistic}>Total Follows: </p>
            {/* <p style={styles3.statistic}>Artist Users: {artistUsers}</p> */}
            <p style={styles3.statistic}>Artist Users: </p>
            {/* <p style={styles3.statistic}>Artists: {artistPercentage.toFixed(2)}%</p> */}
            <Image src={follow}  /> 
          </div>
        </div>

      </div>


      <div>
      <Image src={act} style={{ fontSize: "5px",    marginTop: '120px',  }} /> 

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
    marginLeft: '-765px'

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
const styles2 = {
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '-380px',
    marginRight: '2%',
  fontSize:'40%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    width: '300px',

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
};
const styles3 = {
 
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    width: '300px',

  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  statistic: {
    fontSize: '16px',
    margin: '5px 0',
  },
}

const styles4 = {
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '-480px',
    marginRight: '2%'

  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    width: '300px',

  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  statistic: {
    fontSize: '16px',
    margin: '5px 0',
  },
}