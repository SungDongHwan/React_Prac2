const Async = () => {

    const url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214';

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
     

    return (
        <>
        </>
    );
}

export default Async ;

