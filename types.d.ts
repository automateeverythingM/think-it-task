type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}