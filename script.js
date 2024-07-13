    //Store data
    const callsign = ["N13101", "Wayfarer 4555", "Delta 3721", "Duke 3717", "N1459E"]
    const atcLocation = ["Whiteman Ground", "Phoenix Ground", "Los Angeles Ground", "Chandler Ground"]
    const loca = ["Los Angeles Aiport", "Chandler municipal", "Sky Harbor", "Whiteman airport"]
    const departure = ["SUSS", "TONCE4", "WEEMO9", "DURK3", "PIZA0"]
    const transition = ["WELSH", "TRACK", "TANK", "LAKE"]
    const altitude = [2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000]
    const FL = ["FL180", "FL220", "FL 270", "FL 300", "FL340", "FL340"]
    const freq = [120.15, 121.2, 121.3, 120.4, 123.1, 125.5]
    let btn = document.getElementById('btn')
    let output = document.getElementById('output')

    //Get data
    const retrieveCallsign = () => {
            return callsign[Math.floor(Math.random() * callsign.length)]
    }

    const retrieveATC = () => {
        return atcLocation[Math.floor(Math.random() * atcLocation.length)]
    }

    const retrieveLocation = () => {
        return loca[Math.floor(Math.random() * loca.length)]
    }

    const retrieveDeparture = () => {
        return departure[Math.floor(Math.random() * departure.length)]
    }

    const retrieveTransition = () => {
        return transition[Math.floor(Math.random() * transition.length)]
    }

    const retrieveAltitude = () => {
        return altitude[Math.floor(Math.random() * altitude.length)]
    }

    const retrieveFL = () => {
        return FL[Math.floor(Math.random() * FL.length)]
    }

    const retrieveFreq = () => {
        return freq[Math.floor(Math.random() * freq.length)]
    }

    const retrieveTime = () => {
        return Math.floor(Math.random() * 20)
    }

    const retrieveSquawk = () => {
        return Math.floor(Math.random() * 9999)
    }


    const callATC = () => {
        return `${retrieveCallsign()}, ${retrieveATC()}. Cleared to ${retrieveLocation()}, ${retrieveDeparture()} deperature, 
        ${retrieveTransition()} transition then as filed. Maintain ${retrieveAltitude()}. Expect ${retrieveFL()} ${retrieveTime()} minutes after departure.
        Departure Frequency ${retrieveFreq()}. Squawk ${retrieveSquawk()}` 
    }


    btn.addEventListener('click', function() {
        output.innerHTML = callATC();
    });
    