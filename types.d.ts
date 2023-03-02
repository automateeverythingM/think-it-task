type User = {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

type Post = {
    userId: string;
    id: string;
    title: string;
    body: string;
}