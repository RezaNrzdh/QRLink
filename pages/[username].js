import { useRouter } from "next/router";

const UserPoblicPage = () => {
    const router = useRouter();

    return (
        <>
            <h1>{router.query.username}</h1>
        </>
    );
}

export default UserPoblicPage;