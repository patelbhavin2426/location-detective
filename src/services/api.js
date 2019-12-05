
export function fetchPlaces(near,term) {

    const params = {
        v: '20140806',
        ll: '-33.8670,151.1957',
        client_id: 'ALZGU5SYSDOTXYFFOR33BKOTFI431ZTBN32ELVKCCKNJ5WLH',
        client_secret: 'LV1UVS1UNSIQX4XPTAVIYSLUTLMPNHETJ4QUIBCG1VPBE05V'
    }

    const endPoint = 'https://api.foursquare.com/v2/venues/explore?client_id='+params.client_id+
        '&client_secret='+params.client_secret+
        '&v='+ params.v +
        '&limit=20&near='+ near +
        '&query='+ term;

    return fetch(endPoint)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if(data.meta.code !== 200) {
                throw new Error('Please try again later!!');
            }
            return data.response.groups[0].items;
        });
}

export default fetchPlaces;
