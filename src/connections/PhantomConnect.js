import React from 'react'

const PhantomConnect = () => {
    const connect = async () => { 
        const resp = await window.solana.connect();
        console.log(resp.publicKey.toString())
    }
    return (
        <span className="mb-4 btn-phantom px-2 py-2"><img className="phantom-logo me-3" src="./icons/phantom.png" alt="boo! very scary" /><span>CONNECT </span><span class="material-icons mb-1">lock</span></span>
    )
}

export default PhantomConnect
