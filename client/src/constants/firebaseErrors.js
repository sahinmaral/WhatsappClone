export const returnLocalizatedError = (error) => {
    switch (error) {
        case "auth/email-already-in-use":
            return "Email is already in use"
        case "auth/email-already-exists":
            return "Email already exists"
        default:
            return error
    }
}