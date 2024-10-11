import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendrequestChangePassword } from '../actions/userActions'; // Adjust the import based on your file structure
import './css/resetpasswordscreen.css'

const ResetPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const resetPassword = useSelector((state) => state.resetPassword) || {}; // Add a default empty object
    const { loading = false, success, error } = resetPassword; // Default loading to false
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(sendrequestChangePassword(email));
    };
  
    return (
      <body className='center'>
      
      <section className='hero'>
       

       <div className='center'>
   <img src='profile-icon-design-free-vector.jpg' className='pic' width='150' height='150'/>
        <h1 style={styles.header} className='font'>Reset Password <svg width="50px" height="50px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M25 38c-7.2 0-13-5.8-13-13 0-3.2 1.2-6.2 3.3-8.6l1.5 1.3C15 19.7 14 22.3 14 25c0 6.1 4.9 11 11 11 1.6 0 3.1-.3 4.6-1l.8 1.8c-1.7.8-3.5 1.2-5.4 1.2z"/><path d="M34.7 33.7l-1.5-1.3c1.8-2 2.8-4.6 2.8-7.3 0-6.1-4.9-11-11-11-1.6 0-3.1.3-4.6 1l-.8-1.8c1.7-.8 3.5-1.2 5.4-1.2 7.2 0 13 5.8 13 13 0 3.1-1.2 6.2-3.3 8.6z"/><path d="M18 24h-2v-6h-6v-2h8z"/><path d="M40 34h-8v-8h2v6h6z"/></svg></h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
            className='font'
          />
          
          <button type="submit" style={styles.button} disabled={loading} className='font'>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        {success && <p style={styles.successMessage}>Reset link sent! Check your email.</p>}
        {error && <p style={styles.errorMessage}>{error}</p>}
      </div>
      

        
   
 
        {success && <p style={styles.successMessage}>Reset link sent! Check your email.</p>}
        {error && <p style={styles.errorMessage}>{error}</p>}
   

  </section>
 </body>
    );
  };
  

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#f0b27a',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  successMessage: {
    color: 'green',
    marginTop: '10px',
  },
  errorMessage: {
    color: 'red',
    marginTop: '10px',
  },
};

export default ResetPasswordScreen;
