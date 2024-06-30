import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function SelectUser({ changeUser }) {
    const { userId } = useContext(UserContext);

    const changeUser = e => {
        changeUser(e.target.value);
        console.log(e.target.value);
    };

    return (
        <>
            <select name="user" id="user" value={userId} onChange={changeUser}>
                <option value="1">Антон</option>
                <option value="2">Вася</option>
            </select>
        </>
    );
}

export default SelectUser;