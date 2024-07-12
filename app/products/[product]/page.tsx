const ProductPage = ({ params }: { params: { product: string } }) => {
    return (
        <p>{params.product}</p>
    );
}
 
export default ProductPage;