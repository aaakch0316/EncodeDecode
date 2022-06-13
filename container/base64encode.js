import Encode from "../components/encode/encode";

const EncodePage = () => {
    const data = {
        text : {
            descript : "base64 인코딩 하는 방법을 알아보자",
            main : "base64 Encode",
            explanation : "base64encode 사용방법"
        }
    }
    return(
    <>
        <Encode data={data} />
    </>
    )
}

export default EncodePage;