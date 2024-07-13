import { Collection } from "../shopify/types";

export const getExplore = async (collections: Collection[]) => {
    const explore = [...collections.filter(collection => collection.title.startsWith('Explore: ')),
        {
            handle: "misc",
            title: "Misc",
            description: "Browse other essentials and accessories to create your perfect dorm.",
            seo: { description: null, title: null },
            updatedAt: '2024-07-13',
            path: '/misc'
        }
    ];

    explore.forEach(item => {
        item.title = item.title.replace('Explore: ', '');
        item.path = item.path.replace('/search/explore-', '');
    })

    return explore as Collection[];
}

export const getAmenities = async (collections: Collection[]) => {
    const explore = [...collections.filter(collection => collection.title.startsWith('Amenities: ')),
        {
            handle: "other",
            title: "Other",
            description: "Explore everything else DormDojo has to offer.",
            seo: { description: null, title: null },
            updatedAt: '2024-07-13',
            path: '/other'
        }
    ];

    explore.forEach(item => {
        item.title = item.title.replace('Amenities: ', '');
        item.path = item.path.replace('/search/amenities-', '');
    })

    return explore as Collection[];
}