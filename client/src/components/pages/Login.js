import PageHeader from "../PageHeader";

const Login = () => {
    return (
        <main>
            <PageHeader eyebrow="Login" title="Login to add scores" />
            <form className="form">
                <fieldset>
                    <label>Username</label>
                    <input
                        className=""
                        type="text"
                        placeholder="me@example.com"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    />
                </fieldset>
                <button className="btn">Login</button>
            </form>
        </main>
    );
};

export default Login;
