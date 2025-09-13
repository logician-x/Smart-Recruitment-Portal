export function Login() {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <form action="" className="border border-2 border-primary rounded p-4" style={{ minWidth: '300px' }}>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button type="submit" className="btn btn-success rounded text-white mt-3">Submit</button>
            </form>
        </div>
    );
}
