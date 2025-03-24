export const fetchData = async (setFunc, searchedWord) => {
    const url = import.meta.env.VITE_THEMEAL_API_URL;

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    fetch(url, options)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
/*            setFunc({
                category,
                imageUrl: data[0].url,
                imageId: data[0].id,
            });*/
        });
}