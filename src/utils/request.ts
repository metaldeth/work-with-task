import { ACCESS_TOKEN, BASE_URL } from "../constants/system";

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export const request = <
    Req extends {} | undefined = undefined,
    Res extends {} | undefined = undefined
>(url: string, method: Method = Method.GET, data?: Req ): Promise<Res> => {
    const options: RequestInit = {
        method,
        headers: {}
    }

    const token = localStorage.getItem(ACCESS_TOKEN)

    if (token) {
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        }
    }

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json'
        };
    }

    return fetch(`${BASE_URL}${url}`, options)
        .then((response) => {
            if (!response.ok) throw new Error(String(response.status));
            const contentType = response.headers.get("content-type");
            const hasJSON = contentType && contentType.includes("application/json");
            return hasJSON ? response.json() : undefined;
        })
}