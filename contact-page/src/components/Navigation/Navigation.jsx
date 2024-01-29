import styles from './Navigation.module.css';

const Navigation = () => {

    console.log(styles);
    return (
      <nav className= {`${styles.navigation} navigation`}>
          <div className="logo">
              <img src="/images/logo.png" alt="logo" />
          </div>
          <ul>
                  <li href="#">Home</li>
                  <li href="#">About</li>
                  <li href="#">Contact</li>
          </ul>
  
      </nav>
    )
  }
  
  export default Navigation;