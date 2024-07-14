import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { getAmenities } from "@/lib/data-fetching/special-collections";
import { getCollectionProducts, getCollections } from "@/lib/shopify";
import { Product } from "@/lib/shopify/types";

const otherPage = async () => {
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

    return (
        <section>
            {exploreAmenities.length === 0 ? (
                <p className="py-3 text-lg">{`No products found in this collection`}</p>
            ) : (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={exploreAmenities} />
                </Grid>
            )}
        </section>
    );
};

export default otherPage;
