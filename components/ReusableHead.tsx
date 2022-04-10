import Head from "next/head"

interface IProps { 
    title: string
}

export default function ReusableHead({ title}: IProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Personal Portfolio Website for Hasan Sattar" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap" rel="stylesheet" />
      </Head>
    )
}