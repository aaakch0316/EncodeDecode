import styles from '../styles/encode/encode.module.css'
import { useState } from 'react'
import Button from '../components/button/button'

const DecodePage = ({ decodeService }) => {
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
        // setInputEncodeValue(encodeURI(inputValue))
        setInputEncodeValue(decodeService.urldecode(inputValue))
        setUrlEncode(true)
    }
    const backHandleAreatext = () => {
        setUrlEncode(false)
    }
    return (
        <div className={styles.container}>
            <p>url 디코딩 하는 방법을 알아보자.</p>
            <main className={styles.main}>
                <h2>url Decode</h2>
                {urlEncode? 
                <>
                    <textarea className={styles.textarea} value={inputEncodeValue} onChange={handleChange} />
                    <Button onClick={backHandleAreatext} name="Back" />
                </>
                : 
                <>
                    <textarea className={styles.textarea} value={inputValue} onChange={handleChange} />
                    <Button onClick={onHandleAreatext} name="Decode" />
                </>
                }
            </main>
            <div className={styles.hr}>
                <hr />
            </div>
            <section className={styles.explanation}>
                <h2>url decode 사용방법</h2>
                <br />
                <ol>
                    <li>1. aaa</li>
                    <ii>2. aaa</ii>
                    <li>3. aaa</li>
                    <li>4. aaa</li>
                </ol>
            </section>
        </div>
    )
}

export default DecodePage;
