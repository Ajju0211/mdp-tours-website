import { api } from "./axios";

export async function createQueryStatus(
    data: any
): Promise<any> {
    try {
        const response = await api.post(
            `/queries`,
            data
        );

        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || "Failed to update status");
        } else {
            throw new Error(error.message || "Failed to update status");
        }
    }
}