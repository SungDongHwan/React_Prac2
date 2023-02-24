import { usestate, useEffect} from'react';
const Boxdata = ({mvcd})=>{
        const [mtag,setMtag] = usestate;

        const getData = async() => {
            let url = '';
            try{
            const resp = await fetch(url);
            const data = await resp.json;
            //object 이기떄문에 map 이 안됨.
            let temp = data.movieInfoResult.moviInfo ; 
            temp = Object.entries(temp);
            console.log(data);
        }
            catch(err){
                console.log(err)
            }
        }
        useEffect(()=>{
            setMcd(mvcd);
        },[])
        useEffect(()=>{
            console.log("mcd",mvcd)
            getData();
        },[mvcd])
    return(
        <>
        </>
    )
}
export default Boxdata