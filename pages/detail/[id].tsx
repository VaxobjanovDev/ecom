import { GetStaticProps } from "next";
import { BaseLayout } from "../../src/layout/base-layout";
import { ProductDetail } from "../../src/modules/detail";
import {PropsCard} from "../../src/types/cardType";


function Detail({ cardInfo }: PropsCard) {
  return (
    <BaseLayout>
      <ProductDetail cardInfo={cardInfo} />
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = async (context: any) => {

  const {req, params } = context

    let host = req?.headers.host || "localhost:3000"


  const response = await fetch(
    `http://${host}/api/getbyId?id=${params.id}`
  )
  const data = await response.json()

  if (!data.id) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      cardInfo: data
    }
  }
}

export async function getStaticPaths() {

  const res = await fetch("http://localhost:3000/api/products")

  const data = await res.json()

  const paths = data.data.map((data: any) => {
    return {
      params: {
        id: `${data.id}`
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}


export default Detail;

