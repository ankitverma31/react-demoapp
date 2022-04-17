import './UsersList.css';
import Card from '../UI/Card/Card';

const UsersList = props => {
    return (
        <Card className="users-list___wrapper">
            <ol className='users-list'>
                {
                    props.users.map(user => (
                        <li className='users-list__item' key={user.id}>
                            {`${user.name} (${user.age} years old)`}
                        </li>
                    ))
                }
            </ol>
        </Card>
    )
}
export default UsersList;