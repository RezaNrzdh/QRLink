const UserAgent = () => {
    const useragent = navigator.userAgent;
    if(useragent.indexOf("Android") != -1){
        return 'Mobile'
    }
    else if(useragent.indexOf("iPhone") != -1){
        return 'Mobile'
    }
    else if(useragent.indexOf("iPad") != -1){
        return 'Mobile'
    }
    else {
        return 'Windows'
    }
}

export {UserAgent};