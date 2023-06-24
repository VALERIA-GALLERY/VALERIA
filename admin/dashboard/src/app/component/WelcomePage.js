import React from 'react'
import Image from 'next/image';
import app from '../../../assets/Design.jpg'
import app1 from '../../../assets/logo.png'

function WelcomePage() {
  return (
    <div style={styles.container} >
      <div style={styles.imagesContainer}>
        <Image src={app} style={styles.image} />
        <div style={styles.contentContainer}>
          <div style={styles.imageContainer}>
          <Image src={app1} style={styles.image1} />
          </div>
          <h6 style={styles.h6}>LOGIN</h6>

          <div style={styles.inputs}>
          <h5 style={styles.h5}>E-mail</h5>
            <input style={styles.input} placeholder='your email' type='email' />
            <h5 style={styles.h5}>Password</h5>
            <input style={styles.input} placeholder='your password' type='password' />
           <div>
           <a href='/test'>  <button style={styles.button}>Submit</button></a>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f0ede4',
    width: '100vw',
    height: '100vh', 
  },
  h6: {
    color: '#A47E53',
    textAlign: 'left', 
    fontSize: '50px', 
    fontWeight: 'bold',
  },
  h5: {
    color: '#A47E53',
    textAlign: 'left', 
    fontSize: '30px', 
  },
  imagesContainer: {
    display: 'flex',
    flexDirection: 'row', 
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '50vw',
    height: '100vh',
  },
  image1: {
    width: '35vw',
    height: '35vh',
  },
  imageContainer: {
    marginTop: '-460px', 
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginTop: '20px',
    
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '20px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#A47E53',
    color: '#FFF',
    padding: '10px 20px',
    fontSize: '20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
  }
}
export default WelcomePage