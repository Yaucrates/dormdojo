import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { getOthers } from "@/lib/special-collections";

const otherPage = async () => {
    const otherProducts = await getOthers()

    return (
        <section>
            {otherProducts.length === 0 ? (
                <p className="py-3 text-lg">{`No products found in this collection`}</p>
            ) : (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={otherProducts} />
                </Grid>
            )}
        </section>
    );
};

export default otherPage;
