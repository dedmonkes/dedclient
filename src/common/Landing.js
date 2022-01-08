import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import { FetchNFTClient } from '@audius/fetch-nft'
import * as moment from 'moment';

const magicEdenRpc = "https://api-mainnet.magiceden.io/rpc/getListedNFTsByQuery?q=%7B%22%24match%22%3A%7B%22collectionSymbol%22%3A%22ded_monkes%22%7D%2C%22%24sort%22%3A%7B%22takerAmount%22%3A1%2C%22createdAt%22%3A-1%7D%7D";
const magicEdenHistory = "https://api-mainnet.magiceden.io/rpc/getGlobalActivitiesByQuery?q=%7B%22%24match%22%3A%7B%22collection_symbol%22%3A%22ded_monkes%22%7D%2C%22%24sort%22%3A%7B%22blockTime%22%3A-1%7D%2C%22%24skip%22%3A0%7D";
const magicEdenNft = "https://api-mainnet.magiceden.io/rpc/getNFTByMintAddress/";
const Landing = (props) => {
    
    const [floorPrice, setFloorPrice] = useState(0);
    const [listCount, setListCount] = useState([]);
    const [salesHistory, setSalesHistory] = useState([]);
    const [uiState, pushUiState] = useState([]);
    const [nftArray, setNftArray] = useState([]);
    useEffect(() => 
    { 
        axios.get(magicEdenRpc).then(
            (response) => { 
                setFloorPrice(response.data.results[0].price);
                setListCount(response.data.results.length)
            }
        ); 
    }, []);
    useEffect(() => 
    { 
        axios.get(magicEdenHistory).then(
            (response) => { 
                let onlySales = response.data.results.filter(s => s.txType == "acceptBid" || s.txType == "exchange");
                setSalesHistory(onlySales)
            }
        ); 
    }, []);
    useEffect(() => {
        if(salesHistory.length > 0) { 
            parseSales(salesHistory)
        }
    }, [salesHistory])
    useEffect(() => { 
        if(props.publicKey.length > 0){ 
            const fetchClient = new FetchNFTClient()
            fetchClient.getCollectibles({
                solWallets: [props.publicKey] 
            }).then(res =>{ console.log(res); setNftArray(res.solCollectibles[props.publicKey]); console.log(res.solCollectibles[props.publicKey]) })    
        }
    }, [props.publicKey])
    const concatAddr = (address) => { 
        let a = address.substring(0,4);
        let b = address.substring(address.length - 4);
        return a + "..." + b;
    }
    const dateFormat = (date) => { 
       return (date.getMonth() + 1) + "/" + date.getDay() + "/" + date.getFullYear()
    }
    const parseSales = (sales) => { 
        const getImage = (mint) => { 
            axios.get(magicEdenNft + mint).then((response) => { return response.data.results.img})
        }
        sales.forEach(x => {
            console.log(x)
            let img = getImage(x.mint);
            let ui = 
            <div className="row" key={x.transaction_id}>
                {/* <div className="col">
                {<img src={img} />}
                </div> */}
                <div className="col">{ new Date(x.createdAt.toString()).toString() }</div>
                <div className="col"><a href={"https://solscan.io/tx/" + x.transaction_id}>{concatAddr(x.transaction_id)}</a></div>
                <div className="col text-end"><small className="sol-cirle-text">◎</small>{(x.parsedTransaction.total_amount * .000000001).toFixed(2)}</div>
            </div>
            pushUiState(uiState => [...uiState,ui]);
        })
    }
    return (
        <div className="row">
            <div className="col-md-6 mb-2">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                            Floor Price
                            </div>
                            <div className="card-body">
                            <h1><small className="sol-circle">◎</small>{floorPrice}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                            Total Listed
                            </div>
                            <div className="card-body">
                                <h1>{listCount}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                Your Collection
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                    {!props.authState && <h5>Connect wallet to view.</h5>}
                                    {props.authState && nftArray.length > 0 &&
                                        nftArray.filter(nft => nft.name === "Ded Monkes").map(nft => 
                                            <div className="col-sm mx-2 my-2">
                                                        <img key={nft.id} className="nft-pix" src={
                                                            nft.mediaType == 'GIF' ?
                                                            nft.gifUrl : nft.imageUrl}></img>
                                            </div>
                             )
                                    }
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="col-md-6 mb-2">
                <div className="card">
                    <div className="card-header">
                    Latest Sales
                    </div>
                    <div className="card-body">
                        <div className="container-fluid">
                            { uiState }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
