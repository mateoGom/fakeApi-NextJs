
import Layout from '../components/layout'
import User from '../components/user'
import { useState } from 'react';
import Head from 'next/head'

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
        <Head>
        <title>show user</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
          <button onClick={handleClick}>FETCH DATA</button>
          {data.map((user) => {
          return (<User key={user.login.uuid} email={user.email} login={user.login.uuid} picture={user.picture.medium}/> );
      })}
      </Layout>
  );
}

Users.getInitialProps = async () => {
  const req = await fetch('https://randomuser.me/api/?gender=female&results=10');
  const data = await req.json();
  return { initialData: data.results };
};