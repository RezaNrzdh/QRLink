const UserAgent = () => {
    const useragent = navigator.userAgent;
    if(useragent.match("Android|iPhone|iPad/") != null){
        return true
    }
    else {
        return false
    }
}

export {UserAgent};