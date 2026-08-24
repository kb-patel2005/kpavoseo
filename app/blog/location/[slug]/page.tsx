import DetailBlog from "./DetailBlog";

export default async function AhmedabadVadodaraTaxi(
    {
        params,
    }: {
        params: { slug: string };
    }
) {

    const uri = await params;

    return (
        <DetailBlog slug={uri.slug}/>
    )

}
