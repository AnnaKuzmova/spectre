import React, {useState,useEffect} from 'react';

const TeamMember = ({userId}) => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:8000/users/" + userId)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setUser(data);
        })
    },[]);
    return (
        <article className="team-memeber">
            {user && (
                <p key={userId}><i className="fas fa-user-circle"></i> {user.email}</p>
            )}
        </article>
    )
}

export default TeamMember;