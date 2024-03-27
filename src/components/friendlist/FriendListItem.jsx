import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendListItem}>
      <img
        className={styles.friendAvatar}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.friendName}>{name}</p>
      <p
        className={`${styles.friendStatus} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
