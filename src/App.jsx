import './App.css';
import Button from './components/Button/Button';
import TextInput from './components/TextInput/TextInput';
import { useState } from 'react';

function App() {
  const [account, setAccount] = useState({
    username: '',
    password: ''
  });

  const handleAccountChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    setAccount((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const submitButtonOnClick = (event) => {
    event.preventDefault();
    if (account.username === 'admin' && account.password === 'password') {
      alert('Successfully logged in!');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className='bg-yellow-100 flex justify-center items-center h-screen w-full overflow-hidden'>
      <div className='bg-white flex gap-4 shadow-md rounded p-8 pt-16 w-fit rounded-lg flex-col'>
        <div className=''>
          <TextInput id='username' type='text' placeholder='Username' onChange={handleAccountChange} />
        </div>
        <div className=''>
          <TextInput id='password' type='password' placeholder='Password' onChange={handleAccountChange} />
        </div>
        <div className='flex items-center justify-end mt-2'>
          <Button disabled={account.username.length === 0 || account.password.length === 0} onClick={submitButtonOnClick}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
