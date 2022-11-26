import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

//The props below are an example of destructuring an object
//A user object is passed as a prop, and we are only using the login and avatar url, so that's all we take.
function UserItem({user: {login, avatar_url}}) {
    return (
        <div className='card shadow-md compact side bg-base-100'>
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="Profile"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    {/* Below is an example of a dynamic route */}
                    <Link className="text-base-content text-opacity-40" to={`/users/${login}`}>
                        Visit Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
