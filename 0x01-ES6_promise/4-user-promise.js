export default function signUpUser(firstName, lastName) {
  return Promise
  .then((res) => ({firstName, lastName}));  
}
