const LoginForm = () => {
    return (
        <div className="container">
            <h2>Novell Services Login</h2>

            <table>
                <tbody>
                    <tr>
                        <td><label>Username:</label></td>
                        <td><input type="text" placeholder="Enter your username" /></td>
                    </tr>
                    <tr>
                        <td><label>Password:</label></td>
                        <td><input type="password" placeholder="Enter your password" /></td>
                    </tr>
                    <tr>
                        <td><label>City of Employment:</label></td>
                        <td><input type="text" placeholder="Enter city" /></td>
                    </tr>
                    <tr>
                        <td><label>Web Server:</label></td>
                        <td>
                            <select>
                                <option>-- Choose a server --</option>
                                <option>Server 1</option>
                                <option>Server 2</option>
                                <option>Server 3</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td><label>Please specify your role:</label></td>
                        <td className="radio-group">
                            <label><input type="radio" name="role" /> Admin</label><br></br>
                            <label><input type="radio" name="role" /> Engineer</label><br></br>
                            <label><input type="radio" name="role" /> Manager</label><br></br>
                            <label><input type="radio" name="role" /> Guest</label><br></br>
                        </td>
                    </tr>

                    <tr>
                        <td><label>Single Sign-on to the following:</label></td>
                        <td className="checkbox-group">
                            <label><input type="checkbox" /> Mail</label><br></br>
                            <label><input type="checkbox" /> Payroll</label><br></br>
                            <label><input type="checkbox" /> Self-service</label><br></br>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </div>
    );
};

// Render the component
ReactDOM.render(<LoginForm />, document.getElementById("main_div"));
