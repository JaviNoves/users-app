import { LoginPage } from "./auth/pages/LoginPage";
import { UserModalForm } from "./components/UserModalForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";
import { UsersPage } from "./pages/UsersPage";


export const UsersApp = () => {

    return (
        <>
        <LoginPage />
        {/*<UsersPage />*/}
        </>
    );
}