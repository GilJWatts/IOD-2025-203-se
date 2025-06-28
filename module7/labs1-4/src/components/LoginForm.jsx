function LoginForm() {
  return (
    <form className="LoginForm componentBox">
      <div className="form-row">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-row">
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;
