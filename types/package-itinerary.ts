export type ImageItem = {
    url: string;
    key: string;
    size: number;
    alt?: string;
    id?: string;
};

export type PackageCategory =
    | "Family"
    | "Couple"
    | "Adventure"
    | "Luxury"
    | "Women-only"
    | "Solo";

export type Package = {
    id: string;
    minGroupSize: number;
    maxGroupSize: number;
    title: string;
    destinationName: string;
    nights: number;
    days: number;
    pricePerPerson: number;
    coverImage: ImageItem | null;
    slug: string;
    isActive: boolean;
    isPublic: boolean;

    category: PackageCategory[];

    description: string;

    inclusions: string[];
    exclusions: string[];

    discountPercent: number;
    availableDates: string[];

    metaTitle: string;
    metaDescription: string;

    rating?: number;
    reviewsCount?: number;
};

export type DayMeals = {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
};

export type DayLocation = {
    lat?: number;
    lng?: number;
};

export type DayPlan = {
    dayNumber: number;
    title: string;
    description?: string;

    activities: string[];
    images?: ImageItem[];

    optionalActivities?: string[];

    meals?: DayMeals;

    location?: DayLocation;

    transport?: string;
    notes?: string;
};

export type Itinerary = {
    id: string,
    packageId: string;
    days: DayPlan[];
};

export type PackageWithItinerary = {
    package: Package;
    itinerary: Itinerary;
};



export interface GetPackagesParams {
    q?: string;
    minPrice?: number;
    maxPrice?: number;
    category?: string;
    type?: string;
    minGroupSize?: number;
    maxGroupSize?: number;
    limit?: number;
    cursor?: string;
}

export interface GetPackagesResponse {
    data: Package[];
    nextCursor: string | null;
    hasMore: boolean;
}