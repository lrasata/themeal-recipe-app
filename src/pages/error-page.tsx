import MainNavigation from "../components/main-navigation";

const ErrorPage = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An error occurred!</h1>
                <p>Could not find this page!</p>
            </main>
        </>
    );
}

export default ErrorPage;