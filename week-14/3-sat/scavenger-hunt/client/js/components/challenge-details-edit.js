const editDetails = (challengeId) => {
    const editableDetails = document.querySelectorAll('.editable-challenge-details');
    for (const detailField of editableDetails) {
        detailField.addEventListener('focus', () => {
            if (detailField.value.length >= 1) {
                if (detailField.classList.contains('description-edit')) {
                    detailField.addEventListener('blur', () => {
                        const data = { id: challengeId, detail: detailField.value, type: 'description' };
                        axios.patch('/api/challenges', data)
                            .then((res) => {
                            });
                    });
                }
                else {
                    detailField.addEventListener('blur', () => {
                        const data = { id: challengeId, detail: detailField.value, type: 'address' };
                        axios.patch('/api/challenges', data)
                            .then((res) => {
                            });
                    });
                }
            }
        });
    }
};