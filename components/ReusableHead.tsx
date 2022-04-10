import Head from "next/head"

interface IProps { 
    title: string
}

export default function ReusableHead({ title}: IProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Personal Portfolio Website for Hasan Sattar" />
            <link rel="icon" href="/favicon.png" />
      </Head>
    )
}