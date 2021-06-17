import Head from 'next/head';
import Header from '../components/Header';
function Search() {
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="stylesheet" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />
            {/* Search Results */}
        </div>
    );
}

export default Search;
