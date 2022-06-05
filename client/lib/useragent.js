const UserAgent = () => {
    const useragent = navigator.userAgent;
    if(useragent.match("Android|iPhone|iPad/") != null){
        return 'Mobile'
    }
    else {
        return 'Desktop'
    }
}

export {UserAgent};