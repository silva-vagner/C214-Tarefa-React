import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function Select() {

    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);

    async function handleSelect(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        const update = await ClientUsers.SelectUser(data);
        
        if (update.status === 200) {
            console.log(update)
            const arr = [update.data]
            setUsers(arr)
            toast.success('Usuário resgatado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Buscar usuário">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSelect}>

                        <div class="table-wrapper">
                            <table class="fl-table">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Nome</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users && users.map((user, index) =>
                                        <tr key={index}>
                                            <td>{user.email} </td>
                                            <td>{user.nome} </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> 
                        <button type="submit">Buscar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}