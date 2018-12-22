class EasyHTTP{
  async get(url){
    const request = await fetch(url);
    const  response= await request.json();
    return response;
  }
  async post(url,data){
    const request=await fetch(url, {method:'POST', headers:{'Content-type':'application/json'}, body:data});
    const response = await request.json(); // text()
    return response;
  }
  async put(url,data){
    const request=await fetch(url, {method:'PUT', headers:{'Content-type':'application/json'}, body:data});
    const response = await request.json(); // text()
    return response;
  }
  async delete(url){
    const request = await fetch(url, {method:'DELETE'});
    const  response= await request.text(); // json()
    return response;
  }
}

export const http = new EasyHTTP;
