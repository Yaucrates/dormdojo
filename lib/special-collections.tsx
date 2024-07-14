import { getCollectionProducts, getCollections, getProducts } from "./shopify";
import { Collection, Product } from "./shopify/types";

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

export const getMisc = async () => {
    const products = await getProducts({});
    const collections = await getCollections();
    const explore = await getExplore(collections);
    const exploreFiltered = explore.filter(
        (item) => item.handle != "explore-all" && item.handle != "misc"
    );

    let exploreProducts: Product[] = [];
    for (let i = 0; i < exploreFiltered.length; i++) {
        const products = await getCollectionProducts({
            collection: exploreFiltered[i].handle,
        });
        exploreProducts = exploreProducts.concat(products);
    }
    const ids = exploreProducts.map(product => product.id);

    const miscProducts = products.filter(item => !ids.includes(item.id))

    return miscProducts;
}

export const getOthers = async () => {
    const products = await getProducts({});
    const collections = await getCollections();
    const amenities = await getAmenities(collections);
    const amenitiesFiltered = amenities.filter(
        (item) => item.handle != "other"
    );

    let exploreAmenities: Product[] = [];
    for (let i = 0; i < amenitiesFiltered.length; i++) {
        const products = await getCollectionProducts({
            collection: amenitiesFiltered[i].handle,
        });
        exploreAmenities = exploreAmenities.concat(products);
    }
    const ids = exploreAmenities.map(product => product.id);

    const otherProducts = products.filter(item => !ids.includes(item.id))

    return otherProducts;
}