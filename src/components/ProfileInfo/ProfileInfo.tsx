import React, { memo, useState } from 'react';
import styles from './ProfileInfo.module.scss';
import { IProfileData } from '../../types';

const BIO_LENGTH = 100;

const ProfileInfo: React.FC<Partial<IProfileData>> = (
  {
    avatar_url,
    name,
    email,
    location,
    created_at,
    following,
    followers,
    bio,
  }) => {

  const [showFullBio, setShowFullBio] = useState<boolean>(true);

  const handleToggleBio = () => setShowFullBio(!showFullBio);

  return (
    <>
      <div className={styles.wrapper}>
        <img width="100%" height="auto" src={avatar_url} alt={name} />
        <div className={styles.userInfo}>
          <h3>{name}</h3>
          {email && <p>{email}</p>}
          <p><span className={styles.infoLabel}>Followers:</span> {followers}</p>
          <p><span className={styles.infoLabel}>Following:</span> {following}</p>
          {
            created_at &&
            <p><span className={styles.infoLabel}>Join Date:</span> {new Date(created_at).toDateString()}</p>
          }
          {
            location &&
            <p><span className={styles.infoLabel}>Address:</span> {location}</p>
          }

        </div>
      </div>
      {bio && <p>
        {showFullBio && bio.length > BIO_LENGTH ? bio.slice(0, BIO_LENGTH) + '...' : bio}
        {
          bio.length > BIO_LENGTH &&
          <span onClick={handleToggleBio} className={styles.showMore}>{showFullBio ? 'show more' : 'show less'}</span>
        }
      </p>}
    </>
  )
};

export default memo(ProfileInfo);