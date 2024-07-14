import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { getMisc } from "@/lib/special-collections";

const miscPage = async () => {
    const miscProducts = await getMisc();

    return (
        <section>
            {miscProducts.length === 0 ? (
                <p className="py-3 text-lg">{`No products found in this collection`}</p>
            ) : (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={miscProducts} />
                </Grid>
            )}
        </section>
    );
};

export default miscPage;
