const phantomConnect = async() => { 
    try {
        const resp = await window.solana.connect();
        return resp.publicKey.toString()
    } catch (err) {
       console.log(err)
    }
}