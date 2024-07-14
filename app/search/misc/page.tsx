import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { getExplore } from "@/lib/data-fetching/special-collections";
import { getCollectionProducts, getCollections } from "@/lib/shopify";
import { Product } from "@/lib/shopify/types";

const miscPage = async () => {
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

    return (
        <section>
            {exploreProducts.length === 0 ? (
                <p className="py-3 text-lg">{`No products found in this collection`}</p>
            ) : (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={exploreProducts} />
                </Grid>
            )}
        </section>
    );
};

export default miscPage;
