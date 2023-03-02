export const fetcher = async (
	path?: string,
	options?: RequestInit | undefined,
	baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_BASE_URL,
) => {
    if(baseUrl === undefined) throw new Error("Please set NEXT_PUBLIC_API_BASE_URL in env");
	const response = await fetch(`${baseUrl}${path}`, options);
	const data = await response.json();
	return data;
};
