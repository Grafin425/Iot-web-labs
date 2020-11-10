const BASE_URL = "http://localhost:8085";
const RESOURSE_URL = `${BASE_URL}/cars`;

const baseRequest = async({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }
        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getAllCars = async() => {
    const rawResponse = await baseRequest({ method: "GET" });
    return rawResponse.json();
};

export const postCars = (body) => baseRequest({ method: "POST", body });

export const updateCars = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteCars = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });