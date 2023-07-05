import { Metadata, ResolvingMetadata } from "next"

type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Props,
    parent?: ResolvingMetadata
  ): Promise<Metadata> {

    const slug = params.slug

    return {
      title: slug.toUpperCase().split('-').join(' ')
    }
  }

const Category = ({params}:{params:{slug:string}}) => {
    return(
        <>
            <h1>{params.slug.split('-').join(' ')}</h1>
        </>
    )
}

export default Category