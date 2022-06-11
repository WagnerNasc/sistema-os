import './requests.css';
import { useState, useContext } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/auth';

import { FiHome } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function Customers() {
    const { user, setUser } = useContext(AuthContext);
    return (
        <div>
            <Header/>
            <div className="content">
                <Title name="Solicitações Time MV">
                    <FiHome size={25}/>
                </Title>
            </div>
        </div>

    )

}