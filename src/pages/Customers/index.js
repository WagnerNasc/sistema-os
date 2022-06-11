import './customers.css';
import { useState, useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Title from '../../components/Title';

import api from '../../services/apiMember';

import { FiSettings } from 'react-icons/fi';

export default function Customers() {

    const [ loading, setLoading ] = useState(true);
    const [code, setCode] = useState('');
    const [ member, setMembers ] = useState({});
    // const { id } = useParams(code);

    async function handleSave(e) {
        e.preventDefault();


        const response = await api.get(`mvservices/beneficiario/get/${code}`)
        setMembers( member => ({ 
            ...member,
            ...response
        }))
        setLoading(false);
        console.log(member);

        if (response.data > 0) {
            console.log('Matricula existe');
        }
        setLoading(true);
    }

    return (
        <div>
            <Header/>
            <div className="content">
                <Title name="CX">
                    <FiSettings size={25}/>
                </Title>
                <form className="form-customers" onSubmit={handleSave}>
                    
                    <label>Matricula Membro</label>
                    <input type="number" placeholder= "Matrícula" onChange={(e) => setCode(e.target.value)}/>
                    
                    <label>Nome Membro</label>
                    <input type="text" placeholder="" disabled={true}/>

                    <label>Data de Nascimento</label>
                    <input type="text" value={code.dtNascimento} disabled={true}/>

                    <label>Matricula Alternativa</label>
                    <input type="text" value={code.cdMatAlternativa} disabled={true}/>

                    <label>Status</label>
                    <input type="text" value={code.snAtivo && 'Ativo'} disabled={true}/>


                    <button type="submit">Buscar</button>

                    
                </form>

            </div>
        </div>

    )

}