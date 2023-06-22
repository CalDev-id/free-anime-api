export async function getStaticProps() {
    const res = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
    const dataUsers = await res.json();

    return {
        props: {
            dataUsers,
        },
    }
}