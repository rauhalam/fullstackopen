const Notification = ({ message, errorMessage }) => {
    if (message === null && errorMessage === null) {
        return null
    } else if (message !== null) {
        return (
            <div className="notification">
                {message}
            </div>
        )
    } else {
        return (
            <div className="error">
                {errorMessage}
            </div>
        )
    }
}

export default Notification