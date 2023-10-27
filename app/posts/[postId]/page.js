'use client';
import { useState } from 'react';

export default function EmailPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email submitted: ${email}`);
        // Add code here to send email to your email list
    };

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div>
            <h1>Join our email list</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="text" value={email} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
