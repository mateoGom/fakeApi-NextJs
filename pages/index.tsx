
import { useState } from 'react';
import Link from 'next/link'
import Layout from '../components/layout'


export default function Users({ initialData }) {
    const [data, setData] = useState(initialData);

    const fetchData = async () => {
        const req = await fetch('https://randomuser.me/api/?gender=male&results=100');
        const newData = await req.json();

        return setData(newData.results);
    };

    const handleClick = (event) => {
        event.preventDefault();
        fetchData();
    };

    return (
        <Layout>
            <button onClick={handleClick}>FETCH DATA</button>
            {data.map((user) => {
                return (
                    <div>
                        {user.email}
                        <img src={user.picture.medium} alt="" />
                    </div>
                );
            })}
        </Layout>
    );
}

Users.getInitialProps = async () => {
    const req = await fetch('https://randomuser.me/api/?gender=female&results=10');
    const data = await req.json();
    return { initialData: data.results };
};