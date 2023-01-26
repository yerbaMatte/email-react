import React from 'react';

export default function Form(props) {
  const { email, message } = props.data;
  console.log(props.data);
  const [emailStatus, setEmailStatus] = React.useState(false);

  function defaultPrevented(e) {
    e.preventDefault();
  }

  return (
    <div className='welcome-box'>
      <form onSubmit={defaultPrevented}>
        <label>
          Email to:
          <input
            name='email'
            value={email}
            type='email'
            onChange={props.updateForm}
          ></input>
        </label>
        <label>
          Message:
          <textarea
            name='message'
            value={message}
            onChange={props.updateForm}
          />
        </label>
        <p className='notification'>
          {emailStatus
            ? 'Email has been sent'
            : 'Click the button to send the message'}
        </p>
        <button
          onClick={() => setEmailStatus((prev) => !prev)}
          className='start-btn'
        >
          Send
        </button>
      </form>
    </div>
  );
}
