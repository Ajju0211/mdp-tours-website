import { GetPackagesParams } from "@/types/package-itinerary";
import { api } from "./axios";

export async function getPackages(
    params: GetPackagesParams
): Promise<any> {
    try {
        const response = await api.get(`/packages`, {
            params,
        });

        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(
                error.response.data.message || "Failed to fetch packages"
            );
        } else {
            throw new Error(error.message || "Failed to fetch packages");
        }
    }
}

export async function getActivePublishedPackages(): Promise<any> {
    try {
        const response = await api.get(`/packages/active-published`);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(
                error.response.data.message || "Failed to fetch active published packages"
            );
        } else {
            throw new Error(error.message || "Failed to fetch active published packages");
        }
    }
}

export async function getPackageBySlug(slug: string): Promise<any> {
    try {
        const response = await api.get(`/packages/${slug}`);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(
                error.response.data.message || "Failed to fetch package by slug"
            );
        } else {
            throw new Error(error.message || "Failed to fetch package by slug");
        }
    }
}