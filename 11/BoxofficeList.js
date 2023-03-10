import { useState, useEffect } from "react";

const BoxofficeList = ({targetDt}) => {
    
    const [mvList, setMvList] = useState();
    let mvdata;

    //맨처음 랜더링 시
    useEffect(() => {
        if(!targetDt) return;
        const apikey = 'dd5b0afc0511d7102b761b9afc283a08';
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}`;

        console.log(url)

        //fetch로 데이터 받아오기
        fetch(url)
        .then((resp) => resp.json())
        .then((data)=>{
            mvdata = data.boxOfficeResult.dailyBoxOfficeList;
            console.log('fetch', mvdata)
            let keys = [ "rank","movieNm", "audiCnt"]
            let temp = mvdata.map((item) => {
                    let t = keys.map((k)=> 
                    
                    <span className={k}>
                        {item[k]}
                    </span>
                    )

                    return (
                        <div className="s1">{t}</div>
                    );

            });
            setMvList(temp);
        })
        .catch((err)=>console.log(err))

    },[targetDt]);


    useEffect(() => {

        console.log('targetdt useEffect', mvdata)

    },[targetDt])
    
;
    
     


    return(
        <>
            <div>
                {targetDt && mvList}
            </div>

            <div>
            </div>
        </>
    );

}

export default BoxofficeList;