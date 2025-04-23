import styles from './Profile.module.css';

const Profile = () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      avatar: 'https://i.pravatar.cc/100?img=3'
    };

    return(
      <section className={styles.profile}>
        <img src={user.avatar} alt={user.name} className={styles.avatar}/>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.email}>{user.email}</p>
        <button className={styles.logout}>Выйти</button>
      </section>
    );
  };
  
  export default Profile;