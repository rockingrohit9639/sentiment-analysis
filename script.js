const inputBox = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");
const container = document.querySelector(".container");
const URL = "https://api.monkeylearn.com/v3/classifiers/cl_pi3C7JiL/classify/";

submitBtn.addEventListener("click", async() => {
    const value = inputBox.value;
    const data = {"data": [value]}

    try {
        const res = await fetch(URL, {
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": "Token cf5f74341370cf8c1972e466636326c4add93f45",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        
        const resJson = await res.json();
        const finalResult = resJson[0];
        container.innerHTML = `<h3> Sentence you enterd is :<span> ${finalResult.classifications[0].tag_name} </span> </h3>`;

        inputBox.value = "";
    }
    catch(err) {
        console.log(err);
    }

})
