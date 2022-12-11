import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.cardlogin}>
           <h5 className="card-title">Welcome Back</h5>
            <div className={styles.cardbody}>
            <p className="card-text">To continue please login to your account.</p>
            <input placeholder='Email' type="email" name="email" id="email" />
            <input placeholder='Password' type="password" name="Pasword" id="password" />
            <div className="remember">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember Me</label>
              <a href="#" className="btn btn-primary">Forgot Password</a>   
            </div>
            <div className="loginbtn"><a href="#" className="btnlogin btn-primary">Login</a></div>  
            <div className="signinwithgoogle">
              <img  className='image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/40px-Google_%22G%22_Logo.svg.png" alt="" />
              <a href="#" className="btn signin btn-primary">Sign in with Google</a> 
            </div>  
          </div>
        </div>

        <div className={styles.card}>
           <h5 className="card-title title-signup">Welcome Back</h5>
            <div className={styles.cardbody}>
            <p className="card-text">To continue please SignUp to your account.</p>
            <input placeholder='Email' type="email" name="email" id="email" />
            <input placeholder='Password' type="password" name="Pasword" id="password" />
            <input placeholder='Confirm Password' type="password" name="Pasword" id="password" />
            <div className="remember2">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember Me</label> 
            </div>
            <div className="loginbtn">
            <a href="#" className="btnlogin btn-primary">Sign Up</a> 
            </div>   
            <div className="signinwithgoogle">
              <img className='image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/40px-Google_%22G%22_Logo.svg.png" alt="" />
              <a href="#" className="btn signin btn-primary">Sigup in with Google</a> 
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}
