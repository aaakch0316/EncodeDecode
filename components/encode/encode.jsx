import styles from './encode.module.css'
import { useState } from 'react'
import Button from '../button/button'


const Encode = ({data, encodeService}) => {
    const [inputValue, setInputValue] = useState('')
    const [inputEncodeValue, setInputEncodeValue] = useState('')
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const [urlEncode, setUrlEncode] = useState(false)
    const onHandleAreatext = () => {
        if (inputValue.length == 0){
            alert('please input text!')
            return
        }
        setInputEncodeValue(encodeService.urlencode(inputValue))
        setUrlEncode(true)
    }
    const backHandleAreatext = () => {
        setUrlEncode(false)
    }
    return (
        <div className={styles.container}>
            <p>{data.text.descript}</p>
            <main className={styles.main}>
                <h2>{data.text.main}</h2>
                {urlEncode? 
                <>
                    <textarea className={styles.textarea} value={inputEncodeValue} onChange={handleChange} />
                    <Button onClick={backHandleAreatext} name="Back" />
                </>
                : 
                <>
                    <textarea className={styles.textarea} value={inputValue} onChange={handleChange} />
                    <Button onClick={onHandleAreatext} name="Encode" />
                </>
                }
            </main>
            <div className={styles.hr}>
                <hr />
            </div>
            <section className={styles.explanation}>
                <h2>{data.text.explanation}</h2>
                <br />
                <ol>
                    <li>1. Encode 할 문자를 위의 text박스에 넣어주면 됩니다.</li>
                    <ii>2. Encode 버튼을 눌러줍니다.</ii>
                    <li>3. 인코딩 된 문자를 확인합니다.</li>
                </ol>
            </section>
        </div>
    )
}

export default Encode;
