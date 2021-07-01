import React from "react";
import Modal from "react-bootstrap/Modal";

const SignIn = () => {
  const MAX_LENGTH_LOGIN = 20;
  const MAX_LENGTH_PASSWORD = 20;

  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {setIsOpen(true)};
  const hideModal = () => {setIsOpen(false)};

  const singIn = async event => {
    event.preventDefault() // Отмена редиректа

    const res = await fetch('', {
      body: JSON.stringify({
        login: event.target.login.value,
        password: event.target.password.value
      }),
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()

    alert(result)
    alert("Вход выполнен успешно!")

  }

  return(
    <>
      <button className="blue-button" onClick={showModal}>sign in</button>
      <Modal show={isOpen} onHide={hideModal} >
        <form onSubmit={singIn}>
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Login <input name="login" type="text" maxLength={MAX_LENGTH_LOGIN}/></label>
            <label>Password <input name="password" type="password" maxLength={MAX_LENGTH_PASSWORD}/></label>
          </Modal.Body>
          <Modal.Footer>
            <button className="blue-button" type="submit" name="OK">OK</button>
            <button type="submit">Cancel</button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default SignIn;
