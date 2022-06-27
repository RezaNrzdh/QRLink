const OTPGenerator = () => {
    return Math.floor(Math.random() * (999999 - 100001)) + 100001;
}

export default OTPGenerator;