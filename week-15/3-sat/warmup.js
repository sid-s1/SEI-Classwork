const deleteNth = (arr, N) => {
    const count = (element, array) => {
        let countElem = 0;
        for (const elem of array) {
            if (elem === element) {
                count++;
            }
        }
        return count;
    };

    // arr.forEach(element => {
    //     const freq = count(element,arr);
    //     if (freq > N) {

    //     }
    // });

    for (let i = 0; i < arr.length; i++) {
        const elemCount = count(arr[i], arr);
        while (elemCount > N) {
            for (let j = arr.length - 1; j >= 0; j--) {
                if (arr[j] === arr[i]) {
                    arr.pop()
                }
            }
        }
    }


};