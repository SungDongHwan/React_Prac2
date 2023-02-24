const Async = () => {

    const funcA = () => {
        console.log("함수 명령");
    }

    console.log("명령1") ;
    console.log("명령2") ;
    setTimeout(() => {
        console.log("타임아웃 명령1")
        setTimeout(() => {
            console.log("타임아웃 명령2")
            setTimeout(() => {
                console.log("타임아웃 명령3")
            }, 500);
        }, 100);    
    }, 1000);
    
    console.log("명령3") ;

    return (
        <>
        </>
    );
}

export default Async ;

