
function concatAddr(address: String): String {
        let a = address.substring(0,4);
        let b = address.substring(address.length - 4);
        return a + "..." + b;
}

export default concatAddr;