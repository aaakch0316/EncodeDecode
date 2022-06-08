import styles from '../styles/encode/encode.module.css'
import { useState } from 'react'

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
                <button>Encode</button>
            </main>
        </div>
    )
}

export default EncodePage;
