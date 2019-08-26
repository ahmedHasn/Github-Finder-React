import React , { useContext , useEffect } from 'react'
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext';

const User = () => {

    const githubContext = useContext(GithubContext);
    const { getUsers , users , isLoading } = githubContext;

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line
      }, [])

    if(isLoading){
        return <Spinner />
    }else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default User
