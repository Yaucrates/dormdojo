import { Collection } from "../shopify/types";

export const getExplore = async (collections: Collection[]) => {
    const explore = [...collections.filter(collection => collection.title.startsWith('Explore: ')),
        {
            handle: "misc",
            title: "Misc",
            description: "Browse other essentials and accessories to create your perfect dorm.",
            seo: { description: null, title: null },
            updatedAt: '2024-07-13',
            path: '/search/misc'
        }
    ];

    explore.forEach(item => {
        item.title = item.title.replace('Explore: ', '');
    })

    return explore as Collection[];
}

export const getAmenities = async (collections: Collection[]) => {
    const amenities = [...collections.filter(collection => collection.title.startsWith('Amenities: ')),
        {
            handle: "other",
            title: "Other",
            description: "Explore everything else DormDojo has to offer.",
            seo: { description: null, title: null },
            updatedAt: '2024-07-13',
            path: '/search/other'
        }
    ];

    amenities.forEach(item => {
        item.title = item.title.replace('Amenities: ', '');
    })

    return amenities as Collection[];
}

export const getPinned = async (collections: Collection[]) => {
    const pinned = collections.filter(collection => collection.title.startsWith('Pinned: '))[0]

    pinned.title = pinned.title.replace('Pinned: ', '');

    return pinned as Collection;
}