export function autoLogin(jwt, props) {
  if (jwt) {
    fetch('http://localhost:3000/auto_login', {
      headers: {
        'Authorization': jwt
      }
    })
    .then(r => r.json())
    .then(res => {
      if (res.errors) {
        alert(res.errors);
      } else {
        props.dispatch({ type: 'SET_USER_ID', payload: res.id })
      };
    });
  } else {
    props.history.push('/login');
  };
};
