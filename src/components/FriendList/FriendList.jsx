import css from './FriendList.module.css'

export const FriendsList = ({ friends }) => {
    return (
        <div className={css.box}>
       <ul className={css.friendList}>
                {friends.map(friend => {
                    const statusStyle = {
                        backgroundColor: friend.isOnline ? 'green' : 'red',
                        borderRadius: '50%',
                        height: '25px',
                        width: '25px',
                    };
return (
 <li className={css.item} key={friend.id}>
<span style={statusStyle}>{friend.isOnline}</span>
  <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{friend.name}</p>
</li>
      );
     })}
    </ul>
 </div>
    );
};