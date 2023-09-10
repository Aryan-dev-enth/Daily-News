const fs=require('fs')

var url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=9cbf1511b9d9486db1f2d0e49ef74f84';

var req = new Request(url);

fetch(req).then((resp)=>{
    resp.json().then((data)=>{
        fs.writeFile('response.json',JSON.stringify(data),(err)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Fetched succesfully")
            }
        })
    })
})