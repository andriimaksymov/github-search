import React, { memo } from 'react';
import styles from './ProfileInfo.module.scss';

const ProfileInfo: React.FC = () => {
  // const { name, avatar } = data;
  return (
    <div className={styles.wrapper}>
    {/*//   <img width={40} height={40} src={avatar} alt={name} />*/}
    {/*//   <div className={styles.userInfo}>*/}
    {/*//     <h3>{name}</h3>*/}
    {/*//   </div>*/}
    </div>
  )
};

export default memo(ProfileInfo);