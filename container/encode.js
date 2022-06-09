import styles from '../styles/encode/encode.module.css'
import { useState } from 'react'
import Button from '../components/button/button'


const EncodePage = () => {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div className={styles.container}>
            <p>url 인코딩 하는 방법을 알아보자.</p>
            <main className={styles.main}>
                <h2>url Encode</h2>
                <textarea className={styles.textarea} value={inputValue} onChange={handleChange} />
                <Button name="Encode" />

            </main>
            <div className={styles.hr}>
                <hr />
            </div>
            <section className={styles.explanation}>
                <h2>url encode 사용방법</h2>
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

export default EncodePage;
