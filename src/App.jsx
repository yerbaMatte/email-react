import React from 'react';
import Form from './components/Form';
import Welcome from './components/Welcome';
import './App.css';

export default function App() {
  const [isClicked, setIsClicked] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    message: '',
  });

  function clickHandle() {
    setIsClicked((prev) => !prev);
  }

  function updateForm(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      {isClicked ? (
        <Form data={formData} updateForm={updateForm} />
      ) : (
        <Welcome isClicked={clickHandle} />
      )}
    </div>
  );
}
